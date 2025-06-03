import React from 'react';
import me from '@/assets/avatar/meokcut.png';
import Image from 'next/image';
import next from '@/assets/next.png';
import mongodb from '@/assets/mongo.webp';
import nginx from '@/assets/nginx.png';

export default function Vxta() {
  return (
    <>
      <h5 className="fs-2 fw-bold text-center mt-5 mb-4">
        Dealership appointment management system
      </h5>

      <div className="bento-grid">
        <div className="bgi bgi-8x2 bgi-md-2x2 d-flex justify-content-center align-items-center">
          <Image
            src={me}
            alt="Me"
            className="img-fluid"
            width={250}
            style={{ maskImage: 'linear-gradient(black 70%, transparent)' }}
          />
        </div>

        <div className="bgi bgi-8x1 bgi-md-3x1 d-flex flex-column justify-content-center align-items-center">
          <div>
            <p className="text-center fs-4 fw-bold m-0">
              Monolithic application
            </p>
            <p className="fs-5 text-center text-md-start mb-0 flex-grow-1 text-muted">
              built with&nbsp;
              <span className="badge bg-primary px-3 py-2 fs-6">Next.js</span>
              &nbsp;and&nbsp;
              <span className="badge bg-success px-3 py-2 fs-6">MongoDB</span>
            </p>
          </div>
        </div>

        <div className="bgi bgi-8x2 bgi-md-3x2"></div>

        <div className="bgi bgi-3x1 bgi-md-1x1 d-flex justify-content-center align-items-center">
          <Image
            src={next}
            alt="Next.js Logo"
            className="img-fluid"
            width={100}
          />
        </div>

        <div className="bgi bgi-2x1 bgi-md-1x1 d-flex justify-content-center align-items-center">
          <Image
            src={mongodb}
            alt="MongoDB Logo"
            className="img-fluid"
            width={100}
          />
        </div>

        <div className="bgi bgi-3x1 bgi-md-1x1 d-flex justify-content-center align-items-center">
          <Image src={nginx} alt="Nginx Logo" className="img-fluid" />
        </div>

        <div className="bgi bgi-4x1 rounded d-flex justify-content-center align-items-center p-3">
          <p className="mb-0 fs-5 text-center text-muted">
            Deploy on a Linux server with Nginx
          </p>
        </div>

        <div className="bgi bgi-4x1 rounded d-flex justify-content-center align-items-center p-3">
          <p className="mb-0 fs-5 text-center text-muted">
            Effectively communicate with the client
          </p>
        </div>
      </div>

      <p className="mb-0 d-none d-lg-block text-muted text-end text-decoration-underline mt-1">
        More about this project
      </p>
    </>
  );
}
