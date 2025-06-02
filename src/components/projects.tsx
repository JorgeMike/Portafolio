import React from "react";
import "@/styles/css/styles.css";
import Image from "next/image";

// Replace these imports with your actual screenshots
import mobileScreenshot from "@/assets/encuestas_mobile.png";
import macScreenshot from "@/assets/mackbook.png";
import backpack from "@/assets/mebackpack.png";
import chart from "@/assets/charttime.png";

export default function Projects() {
  return (
    <section className="row">
      <div className="text-start">
        <h3 className="left-subtitle fs-1 fw-bold">Professional Projects</h3>
      </div>

      <h4 className="fs-2 mb-4 d-flex align-items-center gap-2">
        Participated in more than{" "}
        <span className="badge bg-primary">5 production projects</span>
      </h4>

      <h5 className="fs-2 fw-bold text-center my-4">
        Teacher Evaluation Survey System
      </h5>

      <div className="bento-grid">
        <div className="bento-grid-item bento-grid-item-2x3 text-center bg-primary text-white">
          <p className="fw-semibold fs-4 mb-0">
            Responsive Design
          </p>
          <p className="text-">
            For phone, tablets and desktop
          </p>

          <Image
            src={mobileScreenshot}
            alt="Mobile Screenshot"
            className="img-fluid rounded-3 mt-4"
            height={400}
            style={{
              maskImage: "linear-gradient(black 70%, transparent)",
            }}
          />
        </div>

        <div className="bento-grid-item bento-grid-item-3x1 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-1 fw-bold text-primary mb-0 text-center">
            100,000+
          </p>
          <p className="fs-5 text-secondary text-center mb-0">
            Surveys Applied Each Semester
          </p>
        </div>

        <div className="bento-grid-item bento-grid-item-3x1 d-flex justify-content-center align-items-center">
          <p className="fs-1 fw-bold text-primary mb-0 text-center me-2">
            26+
          </p>
          <p className="fs-2 text-secondary text-center mb-0">
            Degree program
          </p>
        </div>

        {/*         <div className="bento-grid-item bento-grid-item-2x2 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex gap-3">
            <i className="bi bi-file-pdf display-2 text-danger mb-3"></i>
            <i className="bi bi-file-excel display-2 text-success mb-3"></i>
          </div>
          <p className="text-muted">
            Generete reports in xlsx for analysis and download certificates for students.
          </p>
        </div> */}

        <div className="bento-grid-item bento-grid-item-2x1 text-center d-flex flex-column align-items-center justify-content-center">
          <p className="fs-4 fw-semibold mb-0">
            Monitoring in real time
          </p>
          <Image
            src={chart}
            alt="Backpack"
            className="img-fluid rounded-3 mt-2"
            height={300}
            style={{
              maskImage: "linear-gradient(black 70%, transparent)",
            }}
          />
        </div>

        <div className="bento-grid-item bento-grid-item-1x2 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-4 fw-semibold mb-0">
            Full-stack
          </p>
          <p className="text-muted mb-0">
            Development
          </p>
          <Image
            src={backpack}
            alt="Backpack"
            className="img-fluid rounded-3 mt-2"
            height={300}
            style={{
              maskImage: "linear-gradient(black 70%, transparent)",
            }}
          />
        </div>


        <div className="bento-grid-item bento-grid-item-3x2 text-center bg-primary text-white">
          <p className="fs-4 fw-semibold mb-0">
            UI/UX Design
          </p>
          <Image
            src={macScreenshot}
            alt="Mac Screenshot"
            className="img-fluid rounded-3 mt-2"
            height={300}
            style={{
              maskImage: "linear-gradient(black 70%, transparent)",
            }}
          />
        </div>

        <div className="bento-grid-item bento-grid-item-2x1 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex gap-3">
            <i className="bi bi-file-pdf fs-1 text-danger"></i>
            <i className="bi bi-file-excel fs-1 text-success"></i>
          </div>
          <p className="text-muted mb-0">
            Generete reports in xlsx and download certificates for students.
          </p>
        </div>

      </div>
    </section>
  );
}
