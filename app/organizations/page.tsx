export const dynamic = "force-dynamic";

import { PageHero } from "@/components/layout/PageHero";
import { OrganizationsLanding } from "./_components/OrganizationsLanding";
import { getOrganizations, getOtherOrganizations } from "@/lib/api";

export const metadata = {
  title: "Organizations | Don Bosco",
  description:
    "Sister organizations and partner institutions working with Don Bosco.",
};

export default async function OrganizationsPage() {
  const [sisterOrgs, otherOrgs] = await Promise.all([
    getOrganizations(),
    getOtherOrganizations(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="Organizations"
        description="Sister organizations and partner institutions supporting industrial development in Nepal"
        breadcrumbs={[{ label: "Organizations" }]}
      />
      <OrganizationsLanding
        sisterOrgs={sisterOrgs.slice(0, 4)}
        otherOrgs={otherOrgs.slice(0, 4)}
      />
    </>
  );
}
