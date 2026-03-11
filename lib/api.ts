// Import from organized data structure
import api from "./axios";
import { fetchMessages } from "./data/donbosco/fetch-messages";
import {
  fetchCNITeamMembers,
  fetchCNIStaff,
  fetchOrgTeamMembers,
} from "./data/donbosco/fetch-teams";
import { fetchFaqs } from "./data/donbosco/faqs";
import { fetchCNIJourney, fetchJourneyByOrgId } from "./data/donbosco/journey";
import defaultNoticeImg from "@/public/notice.png";

import { fetchCNINews, fetchNewsByOrgId } from "./data/news-notices/news";

import { videos } from "./data/media";

import type {
  HeroSlide,
  Message,
  Mission,
  Faq,
  Stat,
  TeamMember,
  AboutStat,
  AlbumsApiResponse,
  Video,
  Photo,
  Staff,
  OrgNotice,
  OrgFaq,
  OrgTeamMember,
  JourneyMilestone,
  BlogItem,
  EventItem,
  HomeArrayMission,
  ArrayMission,
  EventApiResponse,
  BlogsApiResponse,
  NewsNoticeCategory,
} from "./types";
import {
  fetchCNINotices,
  fetchNoticesByOrgId,
} from "./data/news-notices/notices";

// ── CNI Data ──
export async function getHeroSlides(): Promise<HeroSlide[]> {
  const data = await api.get("/heros");
  return data.data.data;
}

export async function getMessages(): Promise<Message[]> {
  return fetchMessages();
}

export async function getMessageById(id: number): Promise<Message | undefined> {
  const allMessages = await fetchMessages();
  return allMessages.find((m) => m.id === id);
}
export async function getMediaHero(): Promise<HeroSlide> {
  try {
    const data = await api.get("/media-hero");
    return data.data.data;
  } catch {
    return {
      id: 0,
      title: "Media Gallery",
      content:
        "Photos, videos, and media resources from Don Bosco events and activities",
      image: "",
    };
  }
}
export async function getMessageHero(): Promise<HeroSlide> {
  try {
    const data = await api.get("/message-hero");
    return data.data.data;
  } catch {
    return {
      id: 0,
      title: "Leadership Messages",
      content: "Words of guidance and inspiration from our school leadership",
      image: "",
    };
  }
}
export async function getFaqHero(): Promise<HeroSlide> {
  try {
    const data = await api.get("/faq-hero");
    return data.data.data;
  } catch {
    return {
      id: 0,
      title: "Frequently Asked Questions",
      content:
        "Everything you need to know about Don Bosco, membership benefits, and how to get involved.",
      image: "",
    };
  }
}
export async function getTeamHero(): Promise<HeroSlide> {
  try {
    const data = await api.get("/team-hero");
    return data.data.data;
  } catch {
    return {
      id: 0,
      title: "Staff",
      content:
        "Meets our best teachers and staff members who are dedicated to providing quality education and support to our students.",
      image: "",
    };
  }
}
// Updated to fetch from API
export async function getMissions(
  organizationId: number,
): Promise<ArrayMission[]> {
  try {
    const response = await api.get<ArrayMission[]>(
      `/missions/${organizationId}`,
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch missions from API:", error);
    // return missionsFallback;
    return [];
  }
}
export async function getOrganizationMissions(
  organizationId: number,
): Promise<Mission[]> {
  try {
    const response = await api.get<Mission[]>(`/missions/${organizationId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch missions from API:", error);
    // return missionsFallback;
    return [];
  }
}
export async function getHomeMission(): Promise<HomeArrayMission> {
  const data = await api.get("/homemissions");
  return data.data;
}
// For other organizations' missions
export async function getOrganizationMissionsData(
  organizationId: number,
): Promise<Mission[]> {
  return getOrganizationMissions(organizationId);
}

export async function getNotices() {
  const data = await fetchCNINotices();
  return data?.data?.map((item) => ({
    ...item,
    image: item.image || defaultNoticeImg,
  }));
}

export async function getFaqs(): Promise<Faq[]> {
  return fetchFaqs();
}

export async function getStats(): Promise<Stat[]> {
  try {
    const response = await api.get("/stats");
    return response.data.data;
  } catch {
    return [];
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const apiTeam = await fetchCNITeamMembers();
  return apiTeam.length > 0 ? apiTeam : [];
}
// about stats
export async function getAboutStats(): Promise<AboutStat[]> {
  return [];
}

export async function getStaff(): Promise<Staff[]> {
  const apiStaff = await fetchCNIStaff();
  return apiStaff.length > 0 ? apiStaff.sort((a, b) => a.order - b.order) : [];
}

export async function getOrganizationTeamMembers(
  orgId: number,
): Promise<OrgTeamMember[]> {
  return fetchOrgTeamMembers(orgId);
}

// Fetch from API
export async function getCNIJourneyData(): Promise<JourneyMilestone[]> {
  return fetchCNIJourney();
}

// For other organizations' journey data
export async function getOrganizationJourneyData(
  organizationId: number,
): Promise<JourneyMilestone[]> {
  return fetchJourneyByOrgId(organizationId);
}

// ── News & Notices ──
export async function getNews() {
  const data = await fetchCNINews();
  return data;
}

export async function getNewsNotices(category?: NewsNoticeCategory | "All") {
  const [newsData, noticesData] = await Promise.all([
    fetchCNINews(),
    fetchCNINotices(),
  ]);

  return {
    newsData,
    noticesData,
  };
}

export async function getNewsNoticeById(
  idOrSlug: string,
  category?: NewsNoticeCategory,
): Promise<any> {
  const { noticesData, newsData } = await getNewsNotices();
  if (category === "News") {
    return newsData?.data.find(
      (item: any) => item.id === (idOrSlug as any) || item.slug === idOrSlug,
    );
  } else {
    return noticesData?.data.find(
      (item) => item.id === (idOrSlug as any) || item.slug === idOrSlug,
    );
  }
}

// ── Media ──
export async function getPhotoAlbums(): Promise<AlbumsApiResponse> {
  const response = await api.get("/collections");
  return response.data;
}

//
interface Props {
  data: Photo[];
  details: {
    id: number;
    organization_id: string;
    title: string;
    description: string;
    cover_image: string;
    order_index: string;
    is_active: boolean;
    created_by: string;
    updated_by: string;
    created_at: string;
    updated_at: string;
  };
}
// get photoAlbums
export async function getPhotosForAlbum(albumId: string): Promise<Props> {
  const response = await api.get(`/gallery-items/${albumId}`);
  return response.data;
}

export async function getVideos(): Promise<Video[]> {
  return videos;
}

export async function getAboutHero(): Promise<{
  data: [
    {
      id: number;
      title: string;
      content: string;
      is_home: boolean;
    },
  ];
}> {
  const response = await api.get("/about-hero");
  return response.data;
}

export async function getOrganizationNews(orgId: number) {
  // Fetch news from API using the org's ID
  const newsItems = await fetchNewsByOrgId(orgId);
  return newsItems.map((item) => ({
    id: item.id,
    organizationId: orgId,
    title: item.title,
    summary: item.summary,
    content: item.content || "",
    image: typeof item.image === "string" ? item.image : undefined,
    date: item.date,
    slug: item.slug,
  }));
}

export async function getOrgNewsById(orgId: number, newsSlug: string) {
  const allNews = await getOrganizationNews(orgId);
  return allNews.find((news) => news.slug === newsSlug);
}

export async function getOrganizationNotices(
  orgId: number,
): Promise<OrgNotice[]> {
  // Fetch notices from API using the org's ID
  const noticeItems = await fetchNoticesByOrgId(orgId);
  return noticeItems.map((item) => ({
    id: item.id.toString(),
    organizationId: orgId,
    title: item.title,
    summary: item.description || "",
    content: item.description || "",
    date: item.date,
    isNew: item.isNew,
    slug: item.slug || item.id.toString(),
  }));
}

export async function getOrgNoticeById(
  orgId: number,
  noticeSlug: string,
): Promise<OrgNotice | undefined> {
  const allNotices = await getOrganizationNotices(orgId);
  return allNotices.find((notice) => notice.slug === noticeSlug);
}

export async function getOrganizationFaqs(orgId: number): Promise<OrgFaq[]> {
  // Fetch FAQs from API using the org's ID
  const faqItems = await fetchFaqs(orgId);
  return faqItems.map((item) => ({
    id: item.id,
    organizationId: orgId,
    question: item.question,
    answer: item.answer,
  }));
}

// ── Blogs ──
export async function getBlogs(page: number = 1): Promise<BlogsApiResponse> {
  try {
    const response = await api.get(`/blogs?page=${page}`);
    const items = response.data;
    return {
      data: items.data.map((item: any) => ({
        id: item.id,
        title: item.title || "",
        description: item.description || "",
        name: item.name || "",
        image: item.image || null,
        start_date: item.start_date || "",
      })),
      total: items.total,
      per_page: items.per_page,
      current_page: items.current_page,
      last_page: items.last_page,
      start: items.start,
      offset: items.offset,
      count: items.count,
    };
  } catch {
    return {
      data: [],
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
      start: 0,
      offset: 0,
      count: 0,
    };
  }
}

// ── Events ──
export async function getEvents(): Promise<EventApiResponse> {
  try {
    const response = await api.get("/events");
    const items = response.data;
    return {
      data: items.data.map((item: any) => ({
        id: item.id,
        summary: item.description || item.summary || "",
        location: item.location || "",
        image: item.image || null,
        start_date: item.start_date || "",
        end_date: item.end_date || "",
        is_home: item.is_home || false,
        title: item.title || "",
      })),
      total: items.total,
      per_page: items.per_page,
      current_page: items.current_page,
      last_page: items.last_page,
      start: items.start,
      offset: items.offset,
      count: items.count,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
      start: 0,
      offset: 0,
      count: 0,
    };
  }
}

export async function getBlogById(id: number): Promise<BlogItem | undefined> {
  const blogs = await getBlogs();
  return blogs.data.find((b) => b.id === id);
}

export async function getEventById(id: number): Promise<EventItem | undefined> {
  const events = await getEvents();
  return events.data.find((e) => e.id === id);
}

// fetch the paginated events

export async function getPaginatedEvents(
  page: number,
): Promise<EventApiResponse> {
  try {
    const response = await api.get(`/events?page=${page}`);
    const items = response.data;
    return {
      data: items?.data?.map((item: any) => ({
        id: item.id,
        summary: item.description || item.summary || "",
        location: item.location || "",
        image: item.image || null,
        start_date: item.start_date || "",
        end_date: item.end_date || "",
        is_home: item.is_home || false,
        title: item.title || "",
      })),
      total: items?.total,
      per_page: items?.per_page,
      current_page: items?.current_page,
      last_page: items?.last_page,
      start: items?.start,
      offset: items?.offset,
      count: items?.count,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
      start: 0,
      offset: 0,
      count: 0,
    };
  }
}

export async function getPaginatedBlogs(
  page: number,
): Promise<BlogsApiResponse> {
  try {
    const response = await api.get(`/blogs?page=${page}`);
    const items = response.data;
    return {
      data: items?.data?.map((item: any) => ({
        id: item.id,
        summary: item.description || item.summary || "",
        location: item.location || "",
        image: item.image || null,
        start_date: item.start_date || "",
        end_date: item.end_date || "",
        is_home: item.is_home || false,
        title: item.title || "",
      })),
      total: items?.total,
      per_page: items?.per_page,
      current_page: items?.current_page,
      last_page: items?.last_page,
      start: items?.start,
      offset: items?.offset,
      count: items?.count,
    };
  } catch (error) {
    console.log(error);
    return {
      data: [],
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
      start: 0,
      offset: 0,
      count: 0,
    };
  }
}
export async function getPaginatedAlbums(
  page: number,
): Promise<AlbumsApiResponse> {
  try {
    const response = await api.get(`/collections?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return {
      data: [],
      total: 0,
      per_page: 0,
      current_page: 0,
      last_page: 0,
      start: 0,
      offset: 0,
      count: 0,
    };
  }
}

export async function getNoticeBySlug(slug: string) {
  try {
    const notices = await fetchCNINotices();
    return notices.data.find((notice) => notice.slug === slug);
  } catch (error) {
    console.error(error);
  }
}
export async function getNewBySlug(slug: string) {
  try {
    const notices = await fetchCNINews();
    return notices.data.find((notice: any) => notice.slug === slug);
  } catch (error) {
    console.error(error);
  }
}

// about story api

export async function getAboutStory() {
  try {
    const aboutStory = await api.get("/about-story");
    return aboutStory.data.data[0];
  } catch (error) {
    console.error(error);
  }
}
