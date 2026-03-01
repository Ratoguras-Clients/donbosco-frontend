"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, MessageCircleQuestion, ArrowRight } from "lucide-react";
import { FaqItem } from "@/components/ui/FaqItem";
import type { OrgFaq } from "@/lib/types";

interface Props {
  faqs: OrgFaq[];
  orgSlug: string;
  orgName: string;
  basePath: "sister" | "other";
}

export function OrgFaqContent({ faqs, orgSlug, orgName, basePath }: Props) {
  const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);
  const [search, setSearch] = useState("");

  const filtered = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="py-20 bg-light-primary min-h-[60vh]">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <div className="relative">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all shadow-sm"
            />
          </div>
          {search && (
            <p className="mt-2 text-xs text-text-muted">
              Found{" "}
              <span className="font-semibold text-primary">
                {filtered.length}
              </span>{" "}
              result
              {filtered.length !== 1 ? "s" : ""}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-12 items-start">
          {/* FAQ list */}
          <div className="space-y-3">
            {filtered.length > 0 ? (
              filtered.map((faq, i) => (
                <FaqItem
                  key={faq.id}
                  faq={{ ...faq, question: faq.question, answer: faq.answer }}
                  index={i}
                  isOpen={openId === faq.id}
                  toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <MessageCircleQuestion
                  size={44}
                  className="mx-auto mb-4 text-gray-300"
                />
                <p className="font-semibold text-gray-500">
                  No matching questions
                </p>
                <p className="text-sm text-text-muted mt-1">
                  Try a different search term
                </p>
              </motion.div>
            )}
          </div>

          {/* Sticky contact card */}
          <div className="space-y-4 sticky top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                <MessageCircleQuestion
                  size={28}
                  className="text-accent-light"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">
                Still have questions?
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Can't find what you're looking for? Contact {orgName} directly
                for more information.
              </p>
              <Link
                href={`/organizations/${basePath}/${orgSlug}`}
                className="group inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 bg-accent text-primary-dark font-semibold rounded-xl transition-all hover:bg-accent-light hover:shadow-lg"
              >
                Contact {orgName}
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4"
            >
              <h4 className="font-semibold text-primary text-sm">
                Quick Links
              </h4>
              <Link
                href={`/organizations/${basePath}/${orgSlug}/news`}
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                → Latest News
              </Link>
              <Link
                href={`/organizations/${basePath}/${orgSlug}/notices`}
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                → Official Notices
              </Link>
              <Link
                href={`/organizations/${basePath}/${orgSlug}`}
                className="block text-sm text-text-muted hover:text-primary transition-colors"
              >
                → About {orgName}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
