export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import {
  getOrganizationBySlug,
  getOrganizationNews,
  getOrgNewsById,
} from "@/lib/api";
import { OrgNewsDetailContent } from "./_components/OrgNewsDetailContent";

interface Props {
  params: Promise<{ slug: string; newsId: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug, newsId } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) return {};
  const newsItem = await getOrgNewsById(org.id, newsId);
  if (!newsItem) return {};
  return {
    title: `${newsItem.title} | ${org.name}`,
    description: newsItem.summary,
  };
}

export default async function OrgNewsDetailPage({ params }: Props) {
  const { slug, newsId } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) notFound();

  const newsItem = await getOrgNewsById(org.id, newsId);
  if (!newsItem) notFound();

  const allNews = await getOrganizationNews(org.id);
  const recentNews = allNews.filter((n) => n.id !== newsItem.id).slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={org.name}
        title={newsItem.title}
        description={newsItem.date}
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations", href: "/organizations/sister" },
          { label: org.name, href: `/organizations/sister/${slug}` },
          { label: "News", href: `/organizations/sister/${slug}/news` },
          { label: newsItem.title },
        ]}
      />
      <OrgNewsDetailContent
        news={newsItem as any}
        recentNews={recentNews as any}
        orgSlug={slug}
        orgName={org.name}
        basePath="sister"
      />
    </>
  );
}
