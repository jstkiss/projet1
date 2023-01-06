"use client";

import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";
import World from "./World";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      inherit="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="Insight" textStyles="text-center" />
      <TitleText title="Insight about metaverse" textStyles="text-center" />
      <div className="mt-12 flex flex-col gap-8">
        {insights.map((insights, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insights}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
