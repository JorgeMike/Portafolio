import React from "react";
import SurveySystem from "./survey-system";
import Cedetec from "./cedetec";

export default function Projects() {
  return (
    <section className="row">
      <div className="text-start">
        <h3 className="left-subtitle fs-1 fw-bold">Professional Projects</h3>
      </div>

      <h4 className="fs-2 mb-4 d-flex flex-wrap align-items-center gap-2">
        Participated in more than{" "}
        <span className="badge bg-primary">5 production projects</span>
      </h4>
      <SurveySystem />
      <Cedetec />
    </section>
  );
}
