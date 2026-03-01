"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Share2, ArrowRight } from "lucide-react";
import type { OrgNews } from "@/lib/types";
import defaultNewsImg from "@/public/news.png";

interface Props {
  news: OrgNews;
  recentNews: OrgNews[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}

export function OrgNewsDetailContent({
  news,
  recentNews,
  orgSlug,
  orgName,
  basePath,
}: Props) {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-light-primary/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 relative">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <Link
            href={`/organizations/${basePath}/${orgSlug}/news`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to {orgName} News
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* Main content */}
          <div>
            {/* Hero image */}
            {news.image && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={news.image || defaultNewsImg}
                  alt={news.title}
                  width={1200}
                  height={600}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            )}

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap mb-6"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted">
                <Calendar size={12} />
                {news.date}
              </span>
              <span className="text-xs text-text-muted">•</span>
              <span className="text-xs font-semibold text-primary">
                {orgName}
              </span>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-primary transition-colors ml-auto">
                <Share2 size={12} />
                Share
              </button>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl leading-tight mb-6"
            >
              {news.title}
            </motion.h1>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-accent/30 pl-6"
            >
              {news.summary}
            </motion.p>

            {/* Article body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 leading-relaxed">{news.content}</p>

              <p className="text-gray-600 leading-relaxed mt-6">
                This article provides comprehensive coverage of the developments
                at {orgName}. For more detailed information or media inquiries,
                please contact the organization directly through their official
                channels.
              </p>
            </motion.div>

            {/* Back link bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 pt-8 border-t border-gray-100"
            >
              <Link
                href={`/organizations/${basePath}/${orgSlug}/news`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary bg-primary/5 rounded-xl transition-all hover:bg-primary hover:text-white"
              >
                <ArrowLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-1"
                />
                View All {orgName} News
              </Link>
            </motion.div>
          </div>

          {/* Sidebar - Recent News */}
          <RecentNewsSidebar
            news={recentNews}
            orgSlug={orgSlug}
            orgName={orgName}
            basePath={basePath}
          />
        </div>
      </div>
    </section>
  );
}

/* Sidebar component */
function RecentNewsSidebar({
  news,
  orgSlug,
  orgName,
  basePath,
}: {
  news: OrgNews[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}) {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="sticky top-28"
    >
      <div className="bg-light-primary rounded-2xl p-6 border border-gray-100">
        <h3 className="font-display text-xl font-bold text-primary mb-6">
          Recent News
        </h3>
        <div className="space-y-4">
          {news.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={`/organizations/${basePath}/${orgSlug}/news/${item.slug}`}
                className="group flex gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0 hover:opacity-80 transition-opacity"
              >
                {item.image && (
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || defaultNewsImg}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-gray-800 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-text-muted flex items-center gap-1">
                    <Calendar size={10} />
                    {item.date}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          href={`/organizations/${basePath}/${orgSlug}/news`}
          className="group inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          View All {orgName} News
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.aside>
  );
}
