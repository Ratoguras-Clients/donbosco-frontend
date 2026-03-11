export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { getOrganizationBySlug, getOrganizationNews } from "@/lib/api";
import { OrgNewsContent } from "./_components/OrgNewsContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) return {};
  return {
    title: `News | ${org.name} | Don Bosco`,
    description: `Latest news from ${org.name}`,
  };
}

export default async function OrgNewsPage({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) notFound();

  const news = await getOrganizationNews(org.id);

  return (
    <>
      <PageHero
        eyebrow={org.name}
        title="News & Updates"
        description="Latest developments and announcements"
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations", href: "/organizations/sister" },
          { label: org.name, href: `/organizations/sister/${slug}` },
          { label: "News" },
        ]}
      />
      <OrgNewsContent
        news={news as any}
        orgSlug={slug}
        orgName={org.name}
        basePath="sister"
      />
    </>
  );
}
