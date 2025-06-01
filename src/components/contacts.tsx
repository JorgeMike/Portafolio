import React from "react";
import { motion } from "framer-motion";

const contacts = [
  {
    name: "LinkedIn",
    icon: "bi-linkedin",
    color: "#0A66C2",
    href: "https://www.linkedin.com/in/jorge-alvarado-0bb17b218/",
    initWidth: 50,
    hoverWidth: 150,
  },
  {
    name: "GitHub",
    icon: "bi-github",
    color: "#333",
    href: "https://github.com/JorgeMike",
    initWidth: 50,
    hoverWidth: 130,
  },
  {
    name: "CV",
    icon: "bi-file-earmark-person",
    color: "#6c63ff",
    href: "/cv.pdf",
    download: true,
    initWidth: 50,
    hoverWidth: 100,
  },
  {
    name: "alvaradojr2001@gmail.com",
    icon: "bi-envelope",
    color: "#EA4335",
    href: "mailto:alvaradojr2001@gmail.com",
    initWidth: 50,
    hoverWidth: 320,
  },
];

export default function Contacts() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 1, delay: 1 }}
      className="d-flex flex-column align-items-center justify-content-center mt-3 container"
    >
      <div className="bg-white p-2 rounded-5 d-flex flex-wrap gap-3">
        {contacts.map((c) => (
          <motion.a
            key={c.name}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            download={c.download}
            className="d-flex align-items-center overflow-hidden rounded-pill text-decoration-none"
            style={{ backgroundColor: "#f8f9fa" }}
            initial={{ width: c.initWidth, color: c.color }}
            whileHover={{
              width: c.hoverWidth,
              backgroundColor: c.color,
              color: "#ffffff",
            }}
            transition={{ duration: 0.3, type: "tween" }}
          >
            <i className={`bi ${c.icon} fs-3 ms-3`} />
            <motion.span
              className="ms-3 text-nowrap fs-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {c.name}
            </motion.span>
          </motion.a>
        ))}
        <p className="mb-0 d-flex align-items-center overflow-hidden rounded-pill text-decoration-none text-bg-success px-3">
          <span>Open to work</span>
        </p>
      </div>
    </motion.section>
  );
}
