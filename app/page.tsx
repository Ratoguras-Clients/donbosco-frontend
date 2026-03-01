import { HeroCarousel } from "@/components/sections/HeroCarousel";
import { MessageSection } from "@/components/sections/MessageSection";
import { MissionSection } from "@/components/sections/MissionSection";
import { NoticesSection } from "@/components/sections/NoticesSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import {
  getFaqs,
  getHeroSlides,
  getHomeMission,
  getMessages,
  getNews,
  getNotices,
} from "@/lib/api";
export default async function HomePage() {
  const [slides, messages, mission, notices, news, faqs] = await Promise.all([
    getHeroSlides(),
    getMessages(),
    getHomeMission(),
    getNotices(),
    getNews(),
    getFaqs(),
  ]);

  return (
    <main>
      <HeroCarousel heroSlides={slides} />
      <MissionSection homeMissions={mission} />
      <MessageSection messages={messages} />
      <NoticesSection notices={notices as any} />
      <NewsSection news={news.data as any} />
      <FaqSection faqs={faqs} />
    </main>
  );
}
