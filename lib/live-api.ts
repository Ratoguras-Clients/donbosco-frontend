
import { fetchFaqs } from "./data/donbosco/faqs";
import { fetchCNIJourney } from "./data/donbosco/journey";

// Updated import

import { videos } from "./data/media";



import type {
  HeroSlide,
  Message,
  Mission,
  Faq,
  Stat,
  TeamMember,
  AboutStat,
  Video,
  Staff,
 
  JourneyMilestone,
} from "./types";
import { fetchCNINotices } from "./data/news-notices/notices";
import { fetchCNINews } from "./data/news-notices/news";

// ── CNI Data ──
export async function getHeroSlides(): Promise<HeroSlide[]> {
  return [];
}

export async function getMessages(): Promise<Message[]> {
  return [];
}


export async function getMissions(): Promise<Mission[]> {
  return [];
}

export async function getNotices() {
  return fetchCNINotices(); // Updated to fetch from API
}

export async function getFaqs(): Promise<Faq[]> {
  return fetchFaqs();
}

export async function getStats(): Promise<Stat[]> {
  return [];
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  return [];
}

export async function getAboutStats(): Promise<AboutStat[]> {
  return [];
}

export async function getStaff(): Promise<Staff[]> {
  return [];
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
