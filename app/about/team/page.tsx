import { PageHero } from "@/components/layout/PageHero";
import { getStaff } from "@/lib/api";
import { TeamContent } from "../_components/TeamContent";

export const metadata = {
  title: "Our Team | Don Bosco",
  description: "Meet the dedicated team behind Don Bosco.",
};

export default async function TeamPage() {
  const staff = await getStaff();

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Staff"
        description="Meets our best teachers and staff members who are dedicated to providing quality education and support to our students."
        breadcrumbs={[{ label: "About", href: "/about" }, { label: "Team" }]}
      />
      <TeamContent staff={staff} />
    </>
  );
}
