"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      inherit='hidden'
      whileInView='show'
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-6`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className='flex-[0.5] lg:max-w-96 flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-3xl border-[-1px] border-[#6a6a6a] relative'
      >
        <div className='feedback-gradient' />
        <div>
          <h4 className='font-bold sm:text-3xl text-2xl sm:leading-10 leading-9 text-white'>
            JSTKiss
          </h4>
          <p className='mt-4 font-normal sm:text-lg text-xs sm:leading-5 leading-4 text-white'>
            Founder cou
          </p>
        </div>
        <p className='mt-6 font-normal sm:text-6 text-lg sm:leading-[45px] leading-10 text-white'>
          'Jiimcy trop disipé un truc de fou cette enfant est insuportable jpp'
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className='relative flex-1 flex justify-center items-center'
      >
        <img
          src='planet-09.png'
          alt='planet9'
          className='w-full lg:h-[610px] h-auto min-h-52 object-cover rounded-[40px]'
        />
        
        <motion.div
          variants={zoomIn(0.4, 1)}
          className='hidden lg:block absolute -left-[10%] top-[3%]'
        >
          <img
            src='/stamp.png'
            alt='stamp'
            className='w-40 h-40 object-contain'
          />
        </motion.div>

      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
