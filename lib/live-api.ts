import { messages } from "./data/cni/messages";
import { missions } from "./data/cni/missions";
import { teamMembers, staff } from "./data/cni/team";
import { stats, aboutStats } from "./data/cni/stats";
import { fetchFaqs } from "./data/cni/faqs";
import { fetchCNIJourney } from "./data/cni/journey";

// Updated import

import { videos } from "./data/media";

import {
  sisterOrganizations,
  sisterOrgNotices,
  sisterOrgFaqs,
} from "./data/organizations/sister";

import type {
  HeroSlide,
  Message,
  Mission,
  Organization,
  Faq,
  Stat,
  TeamMember,
  AboutStat,
  Video,
  Staff,
  OrgNotice,
  OrgFaq,
  JourneyMilestone,
} from "./types";
import { fetchCNINotices } from "./data/news-notices/notices";
import { fetchCNINews } from "./data/news-notices/news";

// ── CNI Data ──
export async function getHeroSlides(): Promise<HeroSlide[]> {
  return [];
}

export async function getMessages(): Promise<Message[]> {
  return messages;
}

export async function getMessageById(id: number): Promise<Message | undefined> {
  return messages.find((m) => m.id === id);
}

export async function getMissions(): Promise<Mission[]> {
  return missions;
}

export async function getNotices() {
  return fetchCNINotices(); // Updated to fetch from API
}

export async function getFaqs(): Promise<Faq[]> {
  return fetchFaqs();
}

export async function getStats(): Promise<Stat[]> {
  return stats;
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return teamMembers;
}

export async function getAboutStats(): Promise<AboutStat[]> {
  return aboutStats;
}

export async function getStaff(): Promise<Staff[]> {
  return staff.sort((a, b) => a.order - b.order);
}

export async function getCNIJourney(): Promise<JourneyMilestone[]> {
  return fetchCNIJourney();
}

// ── News & Notices ──
export async function getNews() {
  return fetchCNINews(); // Updated to fetch from API
}

// ── Media ──

export async function getVideos(): Promise<Video[]> {
  return videos;
}

// ── Sister Organizations ──
export async function getOrganizations(): Promise<Organization[]> {
  return sisterOrganizations;
}

export async function getOrganizationBySlug(
  slug: string,
): Promise<Organization | undefined> {
  return sisterOrganizations.find((org) => org.slug === slug);
}

export async function getOrganizationById(
  id: number,
): Promise<Organization | undefined> {
  return sisterOrganizations.find((org) => org.id === id);
}

export async function getOrganizationNotices(
  orgId: number,
): Promise<OrgNotice[]> {
  return sisterOrgNotices.filter((notice) => notice.organizationId === orgId);
}

export async function getOrgNoticeById(
  orgId: number,
  noticeSlug: string,
): Promise<OrgNotice | undefined> {
  return sisterOrgNotices.find(
    (notice) => notice.organizationId === orgId && notice.slug === noticeSlug,
  );
}

export async function getOrganizationFaqs(orgId: number): Promise<OrgFaq[]> {
  return sisterOrgFaqs.filter((faq) => faq.organizationId === orgId);
}
