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
        <span className='font-extrabold text-white'> Jiimcy </span>
        is a new thing in the future, where you can enjoy the virtual world by
        feeling like it's really real, you can feel what you feel in this
        metaverse world, because this is really the
        <span className='font-extrabold text-white'>
          {' '}
          Joue bien mais pas tout les jours mais elle reste sympas{' '}
        </span>
        of today, using only
        <span className='font-extrabold text-white'> JSTKiss </span>
        devices you can easily explore the metaverse world you want, turn your
        dreams into reality. Le
        <span className='font-extrabold text-white'> Roi </span>
        the madness of the metaverse by scrolling down
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src='arrow-down.svg'
        alt='arrow-donw'
        className='w-4 h-7 object-contain mt-7'
      ></motion.img>
    </motion.div>
  </section>
);

export default About;
