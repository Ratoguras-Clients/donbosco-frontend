import type { Organization } from "@/lib/types";
import api from "@/lib/axios";


// API Response types — matches GET /other-organizations/
interface OtherOrgApiItem {
  id: number;
  name: string;
  short_name: string;
  mission: string | null;
  description: string;
  image: string | null;
  url: string | null;
  established_date: string;
  logo:string | null
}

interface OtherOrgApiResponse {
  data: OtherOrgApiItem[];
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
  start: number;
  offset: number;
  count: number;
}

/**
 * Transform API other-organization data to Organization type
 */
function transformOtherOrg(item: OtherOrgApiItem): Organization {
  return {
    id: item.id,
    name: item.name,
    color: "#1a3a5c",
    slug: item.name.toLowerCase().replace(/\s+/g, "-"),
    description: item.description,
    established: item.established_date,
    category: item.short_name,
    image: item.image || undefined,
    logo:item.image  || "/",
    mission: item.mission || undefined,
    website: item.url || undefined,
  };
}

/**
 * Fetch other organizations from API
 */
export async function fetchOtherOrganizations(): Promise<Organization[]> {
  const endpoint = "/other-organizations";

  try {
    const response = await api.get<OtherOrgApiResponse>(endpoint);
    const orgs = response.data.data;
    return orgs.map(transformOtherOrg);
  } catch (error: any) {
    if (error.response) {
      console.error(
        `[fetchOtherOrganizations] HTTP Error ${error.response.status}: ${error.response.statusText}`,
      );
    } else if (error.request) {
      console.error(
        `[fetchOtherOrganizations] Network Error: No response received`,
      );
    } else {
      console.error(`[fetchOtherOrganizations] Error:`, error.message);
    }

    return [];
  }
}
