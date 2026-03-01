"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, ArrowRight, Inbox } from "lucide-react";
import type { OrgNews } from "@/lib/types";
import defaultNewsImg from "@/public/news.png";

interface Props {
  news: OrgNews[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}

export function OrgNewsContent({ news, orgSlug, orgName, basePath }: Props) {
  const [search, setSearch] = useState("");

  const filtered = news.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.summary.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-20 bg-light-primary min-h-[60vh]">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mb-10"
        >
          <div className="relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search news..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-sm text-text-muted mb-8">
          <span className="font-semibold text-primary">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "article" : "articles"} from {orgName}
        </p>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {item.image && (
                  <div className="relative overflow-hidden h-56">
                    <Image
                      src={item.image || defaultNewsImg}
                      alt={item.title}
                      width={600}
                      height={224}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-sm text-text-muted">
                    <Calendar size={14} />
                    {item.date}
                  </div>

                  <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-3 leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-text-muted line-clamp-3 mb-6">
                    {item.summary}
                  </p>

                  <Link
                    href={`/organizations/${basePath}/${orgSlug}/news/${item.slug}`}
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Read Full Article
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <Inbox size={44} className="mx-auto mb-4 text-gray-300" />
            <p className="font-semibold text-gray-500">No news found</p>
            <p className="text-sm text-text-muted mt-1">
              Try a different search term
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
