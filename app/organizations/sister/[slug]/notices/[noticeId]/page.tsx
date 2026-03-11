export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import {
  getOrganizationBySlug,
  getOrganizationNotices,
  getOrgNoticeById,
} from "@/lib/api";
import { OrgNoticeDetailContent } from "./_components/OrgNoticeDetailContent";

interface Props {
  params: Promise<{ slug: string; noticeId: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug, noticeId } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) return {};
  const notice = await getOrgNoticeById(org.id, noticeId);
  if (!notice) return {};
  return {
    title: `${notice.title} | ${org.name}`,
    description: notice.summary,
  };
}

export default async function OrgNoticeDetailPage({ params }: Props) {
  const { slug, noticeId } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) notFound();

  const notice = await getOrgNoticeById(org.id, noticeId);
  if (!notice) notFound();

  const allNotices = await getOrganizationNotices(org.id);
  const recentNotices = allNotices
    .filter((n) => n.id !== notice.id)
    .slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={org.name}
        title={notice.title}
        description={notice.date}
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations", href: "/organizations/sister" },
          { label: org.name, href: `/organizations/sister/${slug}` },
          { label: "Notices", href: `/organizations/sister/${slug}/notices` },
          { label: notice.title },
        ]}
      />
      <OrgNoticeDetailContent
        notice={notice}
        recentNotices={recentNotices}
        orgSlug={slug}
        orgName={org.name}
        basePath="sister"
      />
    </>
  );
}
