"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Bell,
  Download,
  FileText,
  ArrowRight,
} from "lucide-react";
import type { OrgNotice } from "@/lib/types";

interface Props {
  notice: OrgNotice;
  recentNotices: OrgNotice[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}

export function OrgNoticeDetailContent({
  notice,
  recentNotices,
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
            href={`/organizations/${basePath}/${orgSlug}/notices`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-text-muted hover:text-primary transition-colors group"
          >
            <ArrowLeft
              size={15}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to {orgName} Notices
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* Main content */}
          <div>
            {/* Notice badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-600 rounded-xl mb-6"
            >
              <Bell size={16} />
              <span className="text-sm font-bold">
                Official Notice - {orgName}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl leading-tight mb-6"
            >
              {notice.title}
            </motion.h1>

            {/* Metadata */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center gap-4 flex-wrap mb-8 pb-6 border-b border-gray-200"
            >
              <span className="inline-flex items-center gap-1.5 text-sm text-text-muted">
                <Calendar size={14} />
                Published: {notice.date}
              </span>
              {notice.isNew && (
                <span className="px-2.5 py-1 text-xs font-bold bg-accent/10 text-accent-dark rounded-full">
                  NEW
                </span>
              )}
            </motion.div>

            {/* Summary box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-light-primary rounded-2xl p-6 mb-8 border-l-4 border-primary"
            >
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <FileText size={18} />
                Notice Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">{notice.summary}</p>
            </motion.div>

            {/* Notice body */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {notice.content}
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4"
            >
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all">
                <Download size={16} />
                Download Notice (PDF)
              </button>
              <Link
                href={`/organizations/${basePath}/${orgSlug}/notices`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-all"
              >
                <ArrowLeft size={16} />
                All Notices
              </Link>
            </motion.div>
          </div>

          {/* Sidebar - Recent Notices */}
          <RecentNoticesSidebar
            notices={recentNotices}
            orgSlug={orgSlug}
            orgName={orgName}
            basePath={basePath}
          />
        </div>
      </div>
    </section>
  );
}

/* Sidebar */
function RecentNoticesSidebar({
  notices,
  orgSlug,
  orgName,
  basePath,
}: {
  notices: OrgNotice[];
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
          Recent Notices
        </h3>
        <div className="space-y-4">
          {notices.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={`/organizations/${basePath}/${orgSlug}/notices/${item.slug}`}
                className="group flex gap-3 pb-4 border-b border-gray-200 last:border-0 last:pb-0 hover:opacity-80 transition-opacity"
              >
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
          href={`/organizations/${basePath}/${orgSlug}/notices`}
          className="group inline-flex items-center gap-2 mt-6 text-sm font-semibold text-primary hover:text-accent transition-colors"
        >
          View All Notices
          <ArrowRight
            size={14}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.aside>
  );
}
