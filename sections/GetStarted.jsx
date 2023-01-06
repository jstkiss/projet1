'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { StartSteps, TitleText, TypingText } from "../components";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { startingFeatures } from "../constants";
import World from "./World";


const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div variants={staggerContainer} initial='hidden' whileInView='show' viewport={{once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>
      <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
        <img src='get-started.png' alt='started' className='w-[90%] object-contain' />
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} className='flex-[0.75] flex justify-center flex-col'>
        <TypingText title='How Metaversus' />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className='mt-8 flex flex-col max-w-[370px] gap-6'>
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index + 1}
              text={feature}
              />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
