import React from "react";
import react from "@/assets/react.webp";
import next from "@/assets/next.png";
import nest from "@/assets/nest.svg";
import typescript from "@/assets/typescript.webp";
import mariadb from "@/assets/mariadb.png";
import mongo from "@/assets/mongo.webp";
import python from "@/assets/python.webp";
import docker from "@/assets/docker.webp";
import github from "@/assets/github.png";
import bootstrap from "@/assets/bootstrap.png";
import sass from "@/assets/sass.png";
import me from "@/assets/mecut.png";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <motion.section
      className="row row-gap-4"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
      id="about-me"
    >
      <div className="col-lg-6 h-100">
        <div className="text-start">
          <h3 className="left-subtitle fs-1 fw-bold">About Me</h3>
        </div>
        <h4 className="fs-2">How am I?</h4>
        <p>
          I&apos;m a <strong>Full-Stack Web Developer</strong> with a degree in{" "}
          <strong>Applied Mathematics and Computer Science from UNAM</strong>.
          With{" "}
          <strong>
            over two years of experience in Next.js, Nest.js and TypeScript
          </strong>
          , I build scalable, maintainable applications. I thrive in agile teams
          and continually integrate best practices to deliver outstanding user
          experiences.
        </p>

        <h4 className="fs-2">Some of my skills</h4>
        <div className="d-flex flex-wrap justify-content-center gap-2 mt-3 row-gap-3">
          {[
            // Frontend
            { src: react, alt: "React" },
            { src: next, alt: "Next.js" },
            { src: bootstrap, alt: "Bootstrap" },
            { src: sass, alt: "Sass" },

            // Backend / Lenguajes
            { src: nest, alt: "NestJS" },
            { src: typescript, alt: "TypeScript" },
            { src: python, alt: "Python" },

            // Bases de datos
            { src: mongo, alt: "MongoDB" },
            { src: mariadb, alt: "MariaDB" },

            // DevOps / Control de versiones
            { src: docker, alt: "Docker" },
            { src: github, alt: "GitHub" },
          ].map((img, idx) => (
            <Image
              key={idx}
              src={img.src}
              alt={img.alt}
              className="me-3 img-fluid"
              style={{ width: 48, height: 48, objectFit: "contain" }}
            />
          ))}
        </div>
      </div>
      <div className="col-lg-6 h-100">
        <div className="d-flex flex-column align-items-center justify-content-center avatar">
          <Image
            src={me}
            alt="My photo"
            className="img-fluid mb-3"
            width={356}
            height={384}
            style={{
              maskImage: "linear-gradient(black 80%, transparent)",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}
