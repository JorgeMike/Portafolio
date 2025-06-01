import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Importa tus assets normalmente
import react from "@/assets/react.webp"
import next from "@/assets/next.png";
import nest from "@/assets/nest.svg";
import typescript from "@/assets/typescript.webp";
import mariadb from "@/assets/mariadb.png";
import mongo from "@/assets/mongo.webp";
import python from "@/assets/python.webp";

const techIcons = [
  { src: react, alt: "React" },
  { src: next, alt: "Next.js" },
  { src: nest, alt: "NestJS" },
  { src: typescript, alt: "TypeScript" },
  { src: mariadb, alt: "MariaDB" },
  { src: mongo, alt: "MongoDB" },
  { src: python, alt: "Python" },
];

const containerVariants = {
  hidden: {}, // No es necesario definir nada aquí si sólo queremos stagger children
  visible: {
    transition: {
      staggerChildren: 0.1, // 0.1s de retraso entre cada hijo
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function TechGrid() {
  return (
    <motion.div
      className="d-flex flex-wrap justify-content-between mt-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {techIcons.map((img, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          // Opcional: ajustar la duración de la transición por imagen
          transition={{ duration: 0.5 }}
          className="me-3"
          style={{ width: 48, height: 48 }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={48}
            height={48}
            style={{ objectFit: "contain" }}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
