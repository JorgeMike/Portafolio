import React from 'react';
import farmacia from '@/assets/farmacia.png';
import calculadora from '@/assets/calculadora.png';
import Image from 'next/image';

export default function PersonalProjects() {
  return (
    <section
      className="row row-gap-4 mt-5 d-flex align-items-center"
      id="academic-projects"
    >
      <div className="text-start">
        <h3 className="left-subtitle fs-1 fw-bold">Academic Projects</h3>
      </div>

      <div className="col-12 col-md-6">
        {/* Local video */}
        <video
          controls
          className="img-fluid mt-3 rounded"
          style={{ maxHeight: '100%', width: '100%' }}
        >
          <source src="/chatbot.mp4" type="video/webm" />
          Your browser does not support the video element.
        </video>
      </div>

      <div className="col-12 col-md-6">
        <h4 className="fs-1">Misprofesores.com Chatbot</h4>
        <p className="text-muted">
          Developed <strong>web scraping</strong> code to{' '}
          <strong>extract</strong>, <strong>clean</strong>, and{' '}
          <strong>store</strong> data from misProfesores.com in a{' '}
          <strong>MySQL</strong> database on{' '}
          <strong>Google Cloud Platform</strong>. Used <strong>Docker</strong>{' '}
          to orchestrate and connect the <strong>FastAPI</strong> backend,{' '}
          <strong>MySQL database</strong>, and <strong>Next.js</strong>{' '}
          frontend. Integrated{' '}
          <strong>Google&apos;s Gemini text generation API</strong> to power the
          chatbot, allowing users to interact and retrieve information about
          professors and courses.
        </p>
      </div>

      {/* If you really wanted to duplicate this block, simply repeat it. Otherwise, you can remove one. */}
      <div className="col-12 col-md-6">
        <a
          href="https://jorgemike.github.io/Farmacia/"
          className="text-dark"
          target="_blank"
        >
          <h4 className="fs-1">UI of a pharmacy website</h4>
        </a>
        <p className="text-muted">
          Simulation of a pharmacy website UI with Next.js and Bootstrap
        </p>
      </div>

      <div className="col-12 col-md-6">
        <Image
          src={farmacia}
          alt="UI of a pharmacy website"
          className="img-fluid mt-3 rounded"
        />
      </div>

      <div className="col-12 col-md-6">
        <Image
          src={calculadora}
          alt="UI of a pharmacy website"
          className="img-fluid mt-3 rounded"
        />
      </div>

      <div className="col-12 col-md-6">
        <a
          href="https://jorgemike.github.io/calculadora_interes_moratorio/"
          className="text-dark"
          target="_blank"
        >
          <h4 className="fs-1">Moratory Interest Calculator</h4>
        </a>
        <p className="text-muted">
          Developed a web application to calculate moratory interest using{' '}
          <strong>Next.js</strong> and <strong>Bootstrap</strong>. The app
          allows users to input loan details and calculates the moratory
          interest based on the provided data.
        </p>
      </div>
    </section>
  );
}
