export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { getOrganizationBySlug, getOrganizationNotices } from "@/lib/api";
import { OrgNoticesContent } from "./_components/OrgNoticesContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) return {};
  return {
    title: `Notices | ${org.name} | Don Bosco`,
    description: `Official notices from ${org.name}`,
  };
}

export default async function OrgNoticesPage({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) notFound();

  const notices = await getOrganizationNotices(org.id);

  return (
    <>
      <PageHero
        eyebrow={org.name}
        title="Official Notices"
        description="Important announcements and circulars"
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations", href: "/organizations/sister" },
          { label: org.name, href: `/organizations/sister/${slug}` },
          { label: "Notices" },
        ]}
      />
      <OrgNoticesContent
        notices={notices}
        orgSlug={slug}
        orgName={org.name}
        basePath="sister"
      />
    </>
  );
}
