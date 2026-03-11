export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import {
  getOrganizations,
  getOrganizationNews,
  getOrganizationNotices,
  getOrganizationFaqs,
  getOrganizationJourneyData,
  getOrganizationTeamMembers,
} from "@/lib/api";
import { SisterOrgDetailContent } from "./_components/SisterOrgDetailContent";
import { fetchSisterOrganizations } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const organizations = await getOrganizations();
  return organizations.map((org) => ({ slug: org.slug }));
}

// export async function generateMetadata({ params }: Props) {
//   const { slug } = await params;
//   const org = await getOrganizationBySlug(slug);
//   if (!org) return {};
//   return {
//     title: `${org.name} | Don Bosco`,
//     description: org.description,
//   };
// }

export default async function SisterOrgDetailPage({ params }: Props) {
  const { slug } = await params;
  const orgs = await fetchSisterOrganizations();
  const org = orgs.find((org) => org.slug === slug);
  if (!org) return notFound();

  const [news, notices, faqs, journey, teamMembers] = await Promise.all([
    getOrganizationNews(org.id),
    getOrganizationNotices(org.id),
    getOrganizationFaqs(org.id),
    getOrganizationJourneyData(org.id),
    getOrganizationTeamMembers(org.id),
  ]);

  // Merge journey and team data from API into the organization object
  const orgWithApiData = { ...org, journey, teamMembers };
  return (
    <>
      <SisterOrgDetailContent
        organization={orgWithApiData}
        news={news.slice(0, 3)}
        notices={notices.slice(0, 3)}
        faqs={faqs.slice(0, 5)}
      />
    </>
  );
}
