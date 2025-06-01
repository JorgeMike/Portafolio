import React from "react";

export default function Experience() {
  return (
    <section className="row mt-5">
      {/* Main title with years of experience indicator */}
      <div className="d-flex align-items-baseline">
        <h3 className="left-subtitle fs-1 fw-bold">My Experience</h3>
      </div>

      <h4 className="fs-2 mb-4 d-flex align-items-center gap-2">
        More than <span className="badge bg-primary">2 years</span>
      </h4>

      {/* Column: FES Acatlán */}
      <div className="col-lg-6 mb-4">
        <ul className="list-unstyled">
          <li>
            <h5>FES Acatlán – UNAM</h5>
            <ul className="list-unstyled ps-3 timeline">
              <li>
                <p className="mb-0">
                  <strong>Frontend Web Developer</strong> – January 2023 – January 2024
                </p>
                <p className="text-muted">
                  Responsible for designing user interface mockups in Figma and 
                  developing the frontend using Next.js and React.
                </p>
              </li>
              <li>
                <p className="mb-0">
                  <strong>Full-Stack Web Developer</strong> – January 2024 – Present
                </p>
                <p className="text-muted">
                  Developed web applications with Next.js, Nest.js, and TypeScript, 
                  following best practices and agile methodologies to ensure 
                  maintainability and scalability.
                </p>
              </li>
              <li>
                <p className="mb-0">
                  <strong>Web Development Instructor (Acatlán Web Research and Development Club)</strong> – 2024 – 2025
                </p>
                <p className="text-muted">
                  Delivered workshops and mentorship sessions on Next.js, React, 
                  and frontend development best practices as part of the club’s activities.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Column: Freelance */}
      <div className="col-lg-6 mb-4">
        <ul className="list-unstyled">
          <li>
            <h5>Freelance Projects</h5>
            <ul className="list-unstyled ps-3 timeline">
              <li>
                <p className="mb-0">
                  <strong>Full-Stack Web Developer</strong> – 2024 – 2025
                </p>
                <p className="text-muted">
                  Developed end-to-end frontend and backend projects, designing 
                  robust architectures and optimizing the user experience.
                </p>
                <p className="text-muted">
                  Maintained constant and effective communication with clients 
                  to ensure requirements were clearly understood and deliverables 
                  were submitted on time.
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
