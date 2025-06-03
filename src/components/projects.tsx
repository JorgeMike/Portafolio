// components/Projects.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SurveySystem from "./survey-system";
import Cedetec from "./cedetec";
import Vxta from "./vxta";

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="row" id="professional-projects">
      <div className="text-start">
        <h3 className="left-subtitle fs-1 fw-bold">Professional Projects</h3>
      </div>

      <h4 className="fs-2 mb-4 d-flex flex-wrap align-items-center gap-2">
        Participated in more than{" "}
        <span className="badge bg-primary">5 production projects</span>
      </h4>

      <SurveySystem />

      {/* 
        1) Utilizamos motion.div para el contenedor "blur + altura limitada". 
        2) Con `AnimatePresence` envolvemos el botón para aplicar animación de entrada y salida.
      */}
      <motion.div
        className={`mt-4`} 
        initial={false}
        animate={{
          // Cuando expanded=false: blur(5px) y altura fija de 300px.
          // Cuando expanded=true: blur(0px) y altura automática ("auto") con overflow visible.
          filter: expanded ? "blur(0px)" : "blur(5px)",
          height: expanded ? "auto" : 300,
        }}
        transition={{
          // Puedes ajustar duración y tipo de easing aquí.
          duration: 0.6,
          ease: "easeInOut",
        }}
        style={{ overflow: "hidden" }} // Para que la animación de height clippee el contenido
      >
        <Cedetec />
        <Vxta />
        {/* Opcional: puedes quitar el ::after degradado si prefieres que solo sea blur */}
      </motion.div>

      {/* 
        3) AnimatePresence para animar la aparición/desaparición del botón
      */}
      <AnimatePresence>
        {!expanded && (
          <motion.div
            className="w-100 text-center mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <button
              className="btn btn-primary"
              onClick={() => setExpanded(true)}
            >
              Show more projects
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
