import { inconsolata, spaceMono } from "@/app/fonts";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={`${inconsolata.className} container`}>
      <motion.span
        initial={{
          opacity: 0,
          y: -50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 0.5 }}
        className="hero"
      ></motion.span>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center mt-5">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1, delay: 0.7 }}
          className="order-2 order-lg-1 me-lg-3 mb-0 display-3 fw-bold text-center text-lg-star"
        >
          Hi, I'm Jorge Alvarado
        </motion.h1>
      </div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 1 }}
        className="display-5 fw-bold text-center mt-3"
      >
        I am a <span className="text-primary">web developer</span> with a
        passion for creating beautiful and functional websites.
      </motion.h1>
    </section>
  );
}
