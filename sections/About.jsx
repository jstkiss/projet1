"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title=' About JSTKiss' textStyles='text-center' />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className='mt-2 font-normal sm:text-2xl text-center text-secondary-white'
      >
        <span className='font-extrabold text-white'> Coucou </span>
        Bienvenue sur Metadev site fait pendant les cours chez Acces Code School
        <span className='font-extrabold text-white'>
          {' '}
          mehdi{' '}
        </span>
        blalblalblal
        <span className='font-extrabold text-white'> priska </span>
        blalblalfll
        <span className='font-extrabold text-white'> ruben </span>
        blablalblalbl
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow-donw'
        className='w-4 h-7 object-contain mt-7'
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
