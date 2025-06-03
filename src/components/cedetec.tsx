import Image from 'next/image';
import React from 'react';
import carousel from '@/assets/cedetec/cedetec-carousel.png';
import logo from '@/assets/logo-azul.png';

export default function Cedetec() {
  return (
    <>
      <h5 className="fs-2 fw-bold text-center mt-5 mb-4">
        Web Page of the Center for Technological Development and Innovation
      </h5>

      <div className="bento-grid">
        {/* 1. Complete a full-stack solution */}
        <div className="bgi bgi-3x1 text-dark d-flex flex-column justify-content-center align-items-center">
          <h6 className="fw-bold fs-5">Complete a full-stack solution</h6>
          <p className="mb-0 fs-6 text-center">
            <span className="badge bg-primary me-2 fs-6">CRUD</span>
            with
            <span className="badge bg-danger ms-2 fs-6">Nestjs</span>
          </p>
          <p className="mt-1 text-muted fs-7 mb-0">
            Carousel · Members · Comments · Events
          </p>
        </div>

        {/* 2. Dynamic carousel */}
        <div className="bg-primary text-white bgi bgi-4x2 d-flex flex-column justify-content-center align-items-center">
          <p className="fw-bold fs-2 mb-0">Dynamic carousel</p>
          <Image
            src={carousel}
            alt="Cedetec Carousel"
            className="img-fluid rounded-3 mt-2"
            height={200}
            style={{
              maskImage: 'linear-gradient(black 70%, transparent)',
            }}
          />
        </div>

        {/* 3. Real-time update of event slots */}
        <div className="bgi bgi-1x2 d-flex flex-column justify-content-center align-items-center">
          <Image
            src={logo}
            alt="Cedetec Logo"
            className="img-fluid rounded-3 mb-2"
            style={{
              scale: '2.2',
              rotate: '90deg',
            }}
          />
        </div>

        <div className="bgi bgi-3x2 d-flex flex-column justify-content-center align-items-center">
          <Image
            src={carousel}
            alt="Cedetec Carousel"
            className="img-fluid rounded-3 mb-2"
            height={200}
            style={{
              maskImage: 'linear-gradient(black 70%, transparent)',
            }}
          />
          <p className="fs-3 fw-bold mb-0">Real-time update of event slots</p>
        </div>

        {/* 4. Load time ↓ from 15s to 2s */}
        <div className="bgi bgi-3x1 d-flex flex-column justify-content-center align-items-center">
          <p className="fs-3 fw-bold text-center mb-1">
            Load time ↓ from 15s to 2s
          </p>
          <p className="fs-6 text-center mb-0">
            Resource size ↓ from 25 MB to 2 MB
          </p>
        </div>

        {/* 5. Automated PDF certificates */}
        <div className="bgi bgi-2x1 d-flex flex-column justify-content-center align-items-center">
          <i className="bi bi-file-earmark-pdf fs-1 text-danger mb-2"></i>
          <p className="fs-6 text-muted text-center mb-0">
            Automated PDF certificates for event attendees
          </p>
        </div>
      </div>

      <p className="mb-0 d-none d-lg-block text-muted text-end text-decoration-underline mt-1">
        More about this project
      </p>
    </>
  );
}
