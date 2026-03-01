"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Organization, OtherOrganization } from "@/lib/types";

interface Props {
  sisterOrgs: Organization[];
  otherOrgs: OtherOrganization[];
}

export function OrganizationsLanding({ sisterOrgs, otherOrgs }: Props) {
  return (
    <main className="bg-light-primary">
      {/* ── Sister Organizations Section ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeader
              eyebrow="Our Network"
              title="Sister Organizations"
              description="Industry associations and chambers working together for industrial development"
            />
            <Link
              href="/organizations/sister"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View All Sister Organizations
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {sisterOrgs.map((org, i) => (
              <OrgPreviewCard key={org.id} org={org} type="sister" index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Organizations Section ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <SectionHeader
              eyebrow="Partner Institutions"
              title="Other Organizations"
              description="Government bodies, development partners, and international organizations"
            />
            <Link
              href="/organizations/other"
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              View All Other Organizations
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {otherOrgs.map((org, i) => (
              <OrgPreviewCard key={org.id} org={org} type="other" index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Preview Card Component ── */
function OrgPreviewCard({
  org,
  type,
  index,
}: {
  org: Organization | OtherOrganization;
  type: "sister" | "other";
  index: number;
}) {
  const baseUrl =
    type === "sister" ? "/organizations/sister" : "/organizations/other";

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <Image
          src={
            org.image ||
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
          }
          alt={org.name}
          width={600}
          height={224}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Logo overlay */}
        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center text-4xl">
          {/* <img src={org.logo} alt="org_logo" /> */}
          {org?.logo&&<Image src={org.logo || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80" }   width={200}
           height={124} alt="org_logo" /> }
        </div>

        {/* Category badge */}
        {org.category && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center px-3 py-1.5 text-xs font-semibold text-white bg-black/30 backdrop-blur-sm rounded-lg border border-white/20">
              {org.category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Name */}
        <h3 className="mb-2 text-lg font-bold text-gray-800 group-hover:text-primary transition-colors leading-snug line-clamp-2">
          {org.name}
        </h3>

        {/* Established */}
        {org.established && (
          <div className="flex items-center gap-2 mb-3 text-sm text-text-muted">
            <Calendar size={14} />
            Est. {org.established}
          </div>
        )}

        {/* Description */}
        {org.description && (
          <p className="mb-6 text-sm leading-relaxed text-text-muted line-clamp-3 flex-1">
            {org.description}
          </p>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-4">
          <Link
            href={`${baseUrl}/${org.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            View Details
            <ArrowRight
              size={16}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
          {org.website && (
            <Link
              href={org.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-primary transition-colors"
              title="Visit website"
            >
              <Globe size={16} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
