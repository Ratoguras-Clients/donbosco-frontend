"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Organization } from "@/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getOrganizations } from "@/lib/api";

export function OrganizationsSection({
  organizations,
}: {
  organizations: Organization[];
}) {
  // const [organizations, setOrganizations] = useState<Organization[]>([]);
  // useEffect(() => {
  //      getOrganizations().then((organizations)=>{
  //       setOrganizations(organizations)
  //      })
  // }, [])

  return (
    <section
      id="organizations"
      className="py-20 lg:py-28 bg-light-primary relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-[2px] bg-accent" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-accent">
                School Community
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
              Student Organizations
            </h2>
            <p className="mt-3 text-base text-text-muted max-w-lg">
              Empowering students through clubs, councils, and extracurricular
              groups that build leadership and character
            </p>
          </div>
          <Link
            href="/organizations"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-primary rounded-xl transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/20"
          >
            View All
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {organizations.slice(0, 5).map((org, i) => (
            <motion.a
              key={org.id}
              href={org.website ?? "#"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-primary/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-5xl mb-3 transition-transform duration-500 group-hover:scale-110">
                {org.logo &&
                (org.logo.startsWith("/") || org.logo.startsWith("http")) ? (
                  <Image src={org.logo} alt="logo" width={150} height={100} />
                ) : (
                  <span>{org.logo}</span>
                )}
              </div>
              <span className="relative text-sm  font-medium text-text-muted text-center leading-tight group-hover:text-primary transition-colors">
                {org.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
