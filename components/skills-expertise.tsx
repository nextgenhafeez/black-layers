"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useTabState } from "@/hooks/use-tab-state"
import { TabButton } from "@/components/skills/tab-button"
import { SkillsTab } from "@/components/skills/skills-tab"
import { StatsTab } from "@/components/skills/stats-tab"
import { ReviewsTab } from "@/components/skills/reviews-tab"

export function SkillsExpertise() {
  const { activeTab, switchTab } = useTabState()

  return (
    <section
      id="skills-expertise"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 scroll-mt-16"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <h2 id="skills-heading" className="mb-4 text-4xl font-bold tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            A comprehensive overview of my technical skills and areas of expertise.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex rounded-lg bg-gray-100 p-1" role="tablist">
            <TabButton active={activeTab === "skills"} onClick={() => switchTab("skills")}>
              Skills
            </TabButton>
            <TabButton active={activeTab === "stats"} onClick={() => switchTab("stats")}>
              Performance
            </TabButton>
            <TabButton active={activeTab === "reviews"} onClick={() => switchTab("reviews")}>
              Reviews
            </TabButton>
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === "skills" && <SkillsTab />}
          {activeTab === "stats" && <StatsTab />}
          {activeTab === "reviews" && <ReviewsTab />}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-r from-black to-gray-800 p-8 text-center text-white"
        >
          <h3 className="mb-4 text-2xl font-bold">Ready to Start Your Project?</h3>
          <p className="mx-auto mb-6 max-w-2xl">
            Let's collaborate to bring your vision to life with professional development services tailored to your
            needs.
          </p>
          <a
            href="#contact"
            className="inline-block rounded-lg bg-white px-8 py-3 font-medium text-black transition-all hover:bg-gray-100"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

