import { PageHero } from "@/components/layout/PageHero";
import { FaqContent } from "./_components/FaqContent";
import { getFaqs } from "@/lib/api";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "FAQ | Don Bosco",
  description:
    "Find answers to frequently asked questions about Don Bosco, membership, and our programs.",
};
export default async function FaqPage() {
  const faqs = await getFaqs();
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title="Frequently Asked Questions"
        description="Everything you need to know about Don Bosco, membership benefits, and how to get involved."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <FaqContent faqs={faqs} />
    </>
  );
}
