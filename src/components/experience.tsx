import React from "react";

export default function Experience() {
  return (
    <section className="row mt-5">
      {/* Título principal con indicador de años de experiencia */}
      <div className="d-flex align-items-baseline">
        <h3 className="left-subtitle fs-1 fw-bold ">My Experience</h3>{" "}
      </div>

      <h4 className="fs-2 mb-4 d-flex align-items-center gap-2">
        More than <span className="badge bg-primary">2 years</span>
      </h4>

      {/* Columna: FES Acatlán */}
      <div className="col-lg-6 mb-4">
        <ul className="list-unstyled">
          <li>
            <h5>FES Acatlán - UNAM</h5>
            <ul className="list-unstyled ps-3 timeline">
              <li>
                <p className="mb-0">
                  <strong>Frontend Web Developer</strong> - January/2023 -
                  January/2024
                </p>
                <p className="text-muted">
                  Responsable del maquetado de interfaces de usuario en Figma,
                  así como del desarrollo frontend con Next.js y React.
                </p>
              </li>
              <li>
                <p className="mb-0">
                  <strong>Full-Stack Web Developer</strong> - January/2024 -
                  Present
                </p>
                <p className="text-muted">
                  Desarrollé aplicaciones web con Next.js, Nest.js y TypeScript,
                  aplicando buenas prácticas y metodologías ágiles para
                  garantizar mantenibilidad y escalabilidad.
                </p>
              </li>
              <li>
                <p className="mb-0">
                  <strong>
                    Instructor de Desarrollo Web (Club de Investigación y
                    Desarrollo Web Acatlán)
                  </strong>{" "}
                  - 2024 - 2025
                </p>
                <p className="text-muted">
                  Impartí talleres y mentorías sobre Next.js, React y mejores
                  prácticas de desarrollo frontend como parte de las actividades
                  del club.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Columna: Freelance */}
      <div className="col-lg-6 mb-4">
        <ul className="list-unstyled">
          <li>
            <h5>Freelance Projects</h5>
            <ul className="list-unstyled ps-3 timeline">
              <li>
                <p className="mb-0">
                  <strong>Full-Stack Web Developer</strong> 2024 - 2025
                </p>
                <p className="text-muted">
                  Desarrollo de proyectos completos de frontend y backend,
                  diseñando arquitecturas robustas y optimizando la experiencia
                  de usuario.
                </p>
                <p className="text-muted">
                  Mantengo comunicación constante y efectiva con el cliente para
                  asegurar que los requerimientos se entiendan correctamente y
                  se entreguen resultados a tiempo.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
