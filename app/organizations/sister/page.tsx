export const dynamic = "force-dynamic";

import { PageHero } from "@/components/layout/PageHero";
import { SisterOrgsContent } from "./_components/SisterOrgsContent";
import { getOrganizations } from "@/lib/api";

export const metadata = {
  title: "Sister Organizations | Don Bosco",
  description: "Industry associations and chambers affiliated with Don Bosco.",
};

export default async function SisterOrganizationsPage() {
  const organizations = await getOrganizations();

  return (
    <>
      <PageHero
        eyebrow="Our Network"
        title="Sister Organizations"
        description="Industry associations and chambers working together for industrial development in Nepal"
        breadcrumbs={[
          { label: "Organizations", href: "/organizations" },
          { label: "Sister Organizations" },
        ]}
      />
      <SisterOrgsContent organizations={organizations} />
    </>
  );
}
