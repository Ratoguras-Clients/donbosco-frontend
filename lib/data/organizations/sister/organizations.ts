import type { Organization } from "@/lib/types";
import api from "@/lib/axios";

// API Response type for /organization endpoint
interface OrganizationApiItem {
  id: number;
  name: string;
  short_name: string;
  slug: string;
  mission: string | null;
  description: string;
  logo: string | null;
  established_date: string;
  status: string;
  image: string;
}

interface OrganizationApiResponse {
  organizations: OrganizationApiItem[];
}

/**
 * Transform API organization data to Organization type
 */
function transformApiOrg(apiOrg: OrganizationApiItem): Organization {
  return {
    id: apiOrg.id,
    name: apiOrg.name,
    image: apiOrg.image,
    logo: apiOrg.logo || "🏢",
    color: "#1a3a5c", // Default color
    slug: apiOrg.slug,
    description: apiOrg.description,
    established: apiOrg.established_date,
    category: apiOrg.short_name,
    mission: apiOrg.mission || undefined,
  };
}

// Static fallback data
export const sisterOrganizations: Organization[] = [
  {
    id: 2,
    name: "CNI Young Entrepreneurs Forum",
    logo: "🏢",
    color: "#1a3a5c",
    slug: "cni-young-entrepreneurs-forum",
    description:
      "CNIYEF is a platform under CNI that empowers young entrepreneurs through leadership, innovation, and business networking.",
    established: "1 Jan, 2016",
    category: "CNIYEF",
  },
];

/**
 * Fetch sister organizations from API
 */
export async function fetchSisterOrganizations(): Promise<Organization[]> {
  const endpoint = "/organization";
  const fullUrl = `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`;

  console.log(`[fetchSisterOrganizations] Fetching from: ${fullUrl}`);

  try {
    const response = await api.get<OrganizationApiResponse>(endpoint);
    const orgs = response.data.organizations;
    return orgs.map(transformApiOrg);
  } catch (error: any) {
    console.error(
      `[fetchSisterOrganizations] ❌ Failed to fetch from ${fullUrl}`,
    );

    if (error.response) {
      console.error(
        `[fetchSisterOrganizations] HTTP Error ${error.response.status}: ${error.response.statusText}`,
      );
    } else if (error.request) {
      console.error(
        `[fetchSisterOrganizations] Network Error: No response received`,
      );
    } else {
      console.error(`[fetchSisterOrganizations] Error:`, error.message);
    }

    return sisterOrganizations;
  }
}

/**
 * Fetch a single organization by slug
 */
export async function fetchSisterOrganizationBySlug(
  slug: string,
): Promise<Organization | undefined> {
  const orgs = await fetchSisterOrganizations();
  return orgs.find((org) => org.slug === slug);
}
