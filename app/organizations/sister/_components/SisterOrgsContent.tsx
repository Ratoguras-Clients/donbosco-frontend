"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Search, Inbox, Calendar, ArrowRight, Globe } from "lucide-react";
import type { Organization } from "@/lib/types";

interface Props {
  organizations: Organization[];
}

export function SisterOrgsContent({ organizations }: Props) {
  const [search, setSearch] = useState("");

  const filtered = organizations.filter((o) =>
    o.name.toLowerCase().includes(search.toLowerCase()),
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
              placeholder="Search sister organizations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
            />
          </div>
        </motion.div>

        {/* Count */}
        <p className="text-sm text-text-muted mb-8">
          <span className="font-semibold text-primary">{filtered.length}</span>{" "}
          sister {filtered.length === 1 ? "organization" : "organizations"}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((org, i) => (
              <motion.article
                key={org.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group flex flex-col h-full bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-transparent"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={
                      org.image ||
                      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80"
                    }
                    alt={org.name}
                    width={600}
                    height={192}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Logo overlay */}
                  <div className="absolute bottom-4 left-4 w-24 rounded-2xl h-16 bg-white shadow-lg flex items-center justify-center text-4xl">
                    {org?.logo && org.logo.startsWith("http") ? (
                      <Image
                        src={org.logo}
                        fill
                        className="object-cover rounded-2xl"
                        alt="sister_logo"
                      />
                    ) : (
                      <span>{org?.logo || "🏢"}</span>
                    )}
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
                      href={`/organizations/sister/${org.slug}`}
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
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 text-text-muted"
          >
            <Inbox size={44} className="mx-auto mb-4 text-gray-300" />
            <p className="font-semibold text-gray-500">
              No organizations found
            </p>
            <p className="text-sm mt-1">Try a different search term</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
