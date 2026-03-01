"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Target,
  Eye,
  Award,
  Calendar,
  ArrowRight,
  Building2,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { Organization, OrgNews, OrgNotice, OrgFaq } from "@/lib/types";
import { Timeline } from "@/components/ui/Timeline";

interface Props {
  organization: Organization;
  news: OrgNews[];
  notices: OrgNotice[];
  faqs: OrgFaq[];
}

export function SisterOrgDetailContent({
  organization: org,
  news,
  notices,
  faqs,
}: Props) {
  return (
    <main className="bg-white">
      {/* ── Hero Section (Redesigned) ── */}
      <section className="relative bg-primary-dark text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
            className="w-full h-full"
          />
        </div>

        {/* Background image overlay */}
        <div className="absolute inset-0">
          {org?.image && (
            <Image
              src={
                org.image ||
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              }
              alt={org.name}
              width={1920}
              height={600}
              className="w-full h-full object-cover opacity-20"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/20 via-primary-dark/10 to-primary-dark/20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link
              href="/organizations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors group"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
              />
              Back to Organizations
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {/* Category badge */}
              <div className="flex items-center gap-3 mb-4">
                {org.category && (
                  <span className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 text-accent text-xs font-semibold rounded-lg">
                    {org.category}
                  </span>
                )}
                {org.established && (
                  <span className="inline-flex items-center gap-2 text-sm text-white/60">
                    <Calendar size={14} />
                    Est. {org.established}
                  </span>
                )}
              </div>

              {/* Organization name */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {org.name}
              </h1>

              {/* Description */}
              <p className="text-lg text-white/80 leading-relaxed max-w-3xl mb-8">
                {org.description}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                {org.website && (
                  <Link
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-primary-dark font-semibold rounded-xl hover:bg-accent-light transition-all hover:shadow-lg shadow-accent/20"
                  >
                    Visit Official Website
                    <ExternalLink
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                )}
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            {/* Right: Logo + Quick info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col items-center"
            >
              {/* Large logo */}
              <div className="w-48 h-48 rounded-3xl bg-white shadow-2xl flex items-center justify-center text-8xl mb-6 border-4 border-accent/20">
                {org.logo && org.logo.startsWith("http") ? (
                  <Image
                    src={org.logo}
                    alt={org.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                ) : (
                  <span>{org.logo || "🏢"}</span>
                )}
              </div>

              {/* Quick contact */}
              {/* <div className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
                {org.phone && (
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Phone size={14} />
                    <Link
                      href={`tel:${org.phone}`}
                      className="hover:text-accent transition-colors"
                    >
                      {org.phone}
                    </Link>
                  </div>
                )}
                {org.email && (
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Mail size={14} />
                    <a
                      href={`mailto:${org.email}`}
                      className="hover:text-accent transition-colors truncate"
                    >
                      {org.email}
                    </a>
                  </div>
                )}
                {org.address && (
                  <div className="flex items-start gap-3 text-sm text-white/80">
                    <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                    <span>{org.address}</span>
                  </div>
                )}
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── About Section ── */}
      <section id="about" className="py-20 lg:py-28 bg-light-primary">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-[2fr_1fr] gap-12"
          >
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
                  About Us
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl mb-6">
                Who We Are
              </h2>
              {org.fullDescription && (
                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {org.fullDescription}
                </p>
              )}

              {/* Mission & Vision cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {org.mission && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Target size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">
                      Our Mission
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {org.mission}
                    </p>
                  </div>
                )}
                {org.vision && (
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Eye size={24} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-sm uppercase tracking-wider">
                      Our Vision
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {org.vision}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Values sidebar */}
            {org.values && org.values.length > 0 && (
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-fit sticky top-28">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Award size={24} className="text-accent" />
                </div>
                <h3 className="font-bold text-primary mb-6 text-sm uppercase tracking-wider">
                  Core Values
                </h3>
                <ul className="space-y-3">
                  {org.values.map((value, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-sm text-text-muted">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Our Journey Section ── */}
      {org.journey && org.journey.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <SectionHeader
              eyebrow="Our Story"
              title="Our Journey"
              description={`Key milestones in ${org.name}'s growth and development`}
            />
            <Timeline data={org.journey} />
          </div>
        </section>
      )}

      {/* ── News Section ── */}
      {news.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <SectionHeader
                eyebrow="Latest Updates"
                title="News & Announcements"
                description={`Recent developments from ${org.name}`}
              />
              <Link
                href={`/organizations/sister/${org.slug}/news`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg"
              >
                View All News
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item, i) => (
                <OrgNewsCardPreview
                  key={item.id}
                  news={item}
                  orgSlug={org.slug}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Notices Section ── */}
      {notices.length > 0 && (
        <section className="py-20 bg-light-primary">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <SectionHeader
                eyebrow="Important Information"
                title="Official Notices"
                description="Latest circulars and announcements"
              />
              <Link
                href={`/organizations/sister/${org.slug}/notices`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg"
              >
                View All Notices
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="max-w-4xl space-y-3">
              {notices.map((notice, i) => (
                <OrgNoticeCardPreview
                  key={notice.id}
                  notice={notice}
                  orgSlug={org.slug}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ Section ── */}
      {faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
              <SectionHeader
                eyebrow="Have Questions?"
                title="Frequently Asked Questions"
                description="Common inquiries about our services and operations"
              />
              <Link
                href={`/organizations/sister/${org.slug}/faq`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary-dark transition-all hover:shadow-lg"
              >
                View All FAQs
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div className="max-w-4xl space-y-3">
              {faqs.map((faq, i) => (
                <OrgFaqPreview key={faq.id} faq={faq} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

// UPDATE these functions at the bottom of SisterOrgDetailContent.tsx

/* ── Preview Components ── */
function OrgNewsCardPreview({
  news,
  orgSlug,
  index,
}: {
  news: OrgNews;
  orgSlug: string;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
    >
      {news.image && (
        <div className="relative overflow-hidden h-48">
          <Image
            src={news.image}
            alt={news.title}
            width={600}
            height={192}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-xs text-text-muted mb-2">{news.date}</p>
        <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-2 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-sm text-text-muted line-clamp-2 mb-4">
          {news.summary}
        </p>
        <Link
          href={`/organizations/sister/${orgSlug}/news/${news.slug}`}
          className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          Read More
          <ArrowRight
            size={14}
            className="transition-transform group-hover/link:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

function OrgNoticeCardPreview({
  notice,
  orgSlug,
  index,
}: {
  notice: OrgNotice;
  orgSlug: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
    >
      <Link
        href={`/organizations/sister/${orgSlug}/notices/${notice.slug}`}
        className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:bg-primary/5 hover:border-primary/20 transition-all"
      >
        <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
          <Building2 size={18} className="text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap">
            <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug">
              {notice.title}
            </h3>
            {notice.isNew && (
              <span className="px-2 py-0.5 text-[10px] font-bold bg-accent/10 text-accent-dark rounded-full">
                NEW
              </span>
            )}
          </div>
          <p className="text-sm text-text-muted mt-1">{notice.date}</p>
        </div>
        <ArrowRight
          size={18}
          className="text-gray-300 group-hover:text-primary transition-all group-hover:translate-x-1"
        />
      </Link>
    </motion.div>
  );
}

function OrgFaqPreview({ faq, index }: { faq: OrgFaq; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all"
    >
      <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
      <p className="text-sm text-text-muted leading-relaxed line-clamp-2">
        {faq.answer}
      </p>
    </motion.div>
  );
}
