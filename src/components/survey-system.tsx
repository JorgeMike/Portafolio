import React from 'react';
import Image from 'next/image';

// Replace these imports with your actual screenshots
import mobileScreenshot from '@/assets/survey-system/encuestas_mobile.png';
import macScreenshot from '@/assets/survey-system/mackbook.png';
import backpack from '@/assets/avatar/mebackpack.png';
import chart from '@/assets/survey-system/charttime.png';

export default function SurveySystem() {
  return (
    <>
      <h5 className="fs-2 fw-bold text-center my-4">
        Teacher Evaluation Survey System
      </h5>
      <div className="bento-grid">
        <div className="bgi bgi-8x3 bgi-md-2x3 text-center bg-primary text-white">
          <p className="fw-semibold fs-4 mb-0">Responsive Design</p>
          <p className="mb-0">For phone, tablets and desktop</p>

          <Image
            src={mobileScreenshot}
            alt="Mobile Screenshot"
            className="img-fluid rounded-3 mt-4"
            height={400}
            style={{
              maskImage: 'linear-gradient(black 70%, transparent)',
            }}
          />
        </div>

        <div className="bgi bgi-8x1 bgi-md-3x1 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-1 fw-bold text-primary mb-0 text-center">100,000+</p>
          <p className="fs-5 text-secondary text-center mb-0">
            Surveys Applied Each Semester
          </p>
        </div>

        <div className="bgi bgi-8x1 bgi-md-3x1 d-flex align-items-center justify-content-center">
          <i className="bi bi-envelope-fill fs-2 text-primary me-3"></i>
          <p className="fs-5 text-center text-muted mb-0">
            Integrated Gmail API for sending emails
          </p>
        </div>

        <div className="bgi bgi-8x1 bgi-md-3x1 bgi-lg-2x1 text-center d-flex flex-column align-items-center justify-content-center">
          <p className="fs-4 fw-semibold mb-0">Monitoring in real time</p>
          <Image
            src={chart}
            alt="chart"
            className="img-fluid rounded-3 mt-2"
            height={300}
          />
        </div>

        <div className="d-none d-lg-flex bgi bgi-lg-1x2 flex-column justify-content-center align-items-center">
          <p className="fs-4 fw-semibold mb-0">Full-stack</p>
          <p className="text-muted mb-0">Development</p>
          <Image
            src={backpack}
            alt="Backpack"
            className="img-fluid rounded-3 mt-2"
            height={300}
            style={{
              maskImage: 'linear-gradient(black 70%, transparent)',
            }}
          />
        </div>

        <div className="bgi bgi-8x2 bgi-md-3x2 text-center bg-primary text-white">
          <p className="fs-4 fw-semibold mb-0">UI/UX Design</p>
          <Image
            src={macScreenshot}
            alt="Mac Screenshot"
            className="img-fluid rounded-3 mt-2"
            height={300}
            style={{
              maskImage: 'linear-gradient(black 70%, transparent)',
            }}
          />
        </div>

        <div className="bgi bgi-8x1 bgi-md-3x1 bgi-lg-2x1 text-center d-flex flex-column align-items-center justify-content-center">
          <div className="d-flex gap-3">
            <i className="bi bi-file-earmark-pdf fs-1 text-danger"></i>
            <i className="bi bi-file-earmark-excel fs-1 text-success"></i>
          </div>
          <p className="text-muted mb-0">
            Generete reports in xlsx and download certificates for students.
          </p>
        </div>
      </div>
      <p className="mb-0 d-none d-lg-block text-muted text-end text-decoration-underline mt-1">
        More about this project
      </p>
    </>
  );
}
