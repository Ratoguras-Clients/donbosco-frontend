export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { getOrganizationBySlug, getOrganizationFaqs } from "@/lib/api";
import { OrgFaqContent } from "./_components/OrgFaqContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) return {};
  return {
    title: `FAQ | ${org.name} | Don Bosco`,
    description: `Frequently asked questions about ${org.name}`,
  };
}

export default async function OrgFaqPage({ params }: Props) {
  const { slug } = await params;
  const org = await getOrganizationBySlug(slug);
  if (!org) notFound();

  const faqs = await getOrganizationFaqs(org.id);

  return (
    <>
      <PageHero
        eyebrow={org.name}
        title="Frequently Asked Questions"
        description="Common questions about our services and operations"
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations", href: "/organizations/sister" },
          { label: org.name, href: `/organizations/sister/${slug}` },
          { label: "FAQ" },
        ]}
      />
      <OrgFaqContent
        faqs={faqs}
        orgSlug={slug}
        orgName={org.name}
        basePath="sister"
      />
    </>
  );
}
