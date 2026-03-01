"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Search,
  Calendar,
  Bell,
  ArrowRight,
  Sparkles,
  Inbox,
} from "lucide-react";
import type { OrgNotice } from "@/lib/types";

interface Props {
  notices: OrgNotice[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}

export function OrgNoticesContent({
  notices,
  orgSlug,
  orgName,
  basePath,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = notices.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-20 bg-light-primary min-h-[60vh]">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-sm text-text-muted mb-8">
          <span className="font-semibold text-primary">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "notice" : "notices"} from {orgName}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((notice, i) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={`/organizations/${basePath}/${orgSlug}/notices/${notice.slug}`}
                  className="group flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-white hover:bg-primary/5 hover:border-primary/20 transition-all hover:shadow-md"
                >
                  <div className="mt-0.5 flex-shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-100 flex items-center justify-center transition-colors">
                      <Bell size={18} className="text-red-500" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 flex-wrap">
                      <h3 className="font-semibold text-gray-800 group-hover:text-primary transition-colors leading-snug">
                        {notice.title}
                      </h3>
                      {notice.isNew && (
                        <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent-dark bg-accent/10 rounded-full">
                          <Sparkles size={10} />
                          New
                        </span>
                      )}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-text-muted">
                      <Calendar size={14} />
                      {notice.date}
                    </div>
                  </div>

                  <ArrowRight
                    size={18}
                    className="flex-shrink-0 mt-1 text-gray-300 group-hover:text-primary transition-all group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <Inbox size={44} className="mx-auto mb-4 text-gray-300" />
            <p className="font-semibold text-gray-500">No notices found</p>
            <p className="text-sm text-text-muted mt-1">
              Try a different search term
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
