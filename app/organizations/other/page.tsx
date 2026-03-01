import { PageHero } from "@/components/layout/PageHero";
import { OtherOrgsContent } from "./_components/OtherOrgsContent";
import { getOtherOrganizations } from "@/lib/api";

export const metadata = {
  title: "Other Organizations | Don Bosco",
  description:
    "Government bodies, development partners, and international organizations.",
};

export default async function OtherOrganizationsPage() {
  const organizations = await getOtherOrganizations();

  return (
    <>
      <PageHero
        eyebrow="Partner Institutions"
        title="Other Organizations"
        description="Government bodies, development partners, and international organizations supporting industrial development"
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Other Organizations" },
        ]}
      />
      <OtherOrgsContent organizations={organizations} />
    </>
  );
}
