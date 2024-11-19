'use client';
import React from 'react';
import Spheres from './spheres';
import { Fade } from 'react-awesome-reveal';
import Projects from './projects';

export default function Experience() {
    return (
        <section
            id='experience'
            className='on-appear-2 py-5'
        >
            <Spheres number={2} />
            <div className='container'>
                <Fade direction="up" duration={1500} triggerOnce>
                    <h2>Experience</h2>
                </Fade>
                <div className="row align-items-center gap-2 gap-md-0 mb-5">
                    <Fade direction="left" triggerOnce duration={2500} className="col-md-6 mb-3 mb-md-0">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h3 className="card-title d-flex align-items-center m-0">
                                    <i className="bi bi-code-slash me-2"></i> Frontend Developer
                                </h3>
                                <p className="text-muted">Ene 2023 - Present</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text fw-bold">FES Acatlán - CEDETEC</p>
                                <p>Development of web applications using frontend technologies, focusing on improving user experience and optimizing functionalities at the Technological Development Center (CEDETEC).</p>
                            </div>
                        </div>
                    </Fade>

                    <Fade direction="right" triggerOnce duration={2500} className="col-md-6">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h3 className="card-title d-flex align-items-center m-0">
                                    <i className="bi bi-code-slash me-2"></i> Freelance Developer
                                </h3>
                                <p className="text-muted">Jan 2024 - Present</p>
                            </div>
                            <div className="card-body">
                                <p className="card-text fw-bold">Self-Employed</p>
                                <p>Development of freelance projects, both frontend and full stack, creating complete applications tailored to meet clients&apos; needs, from design to implementation.</p>
                            </div>
                        </div>

                    </Fade>
                </div>
                <Projects />
            </div>
        </section>
    );
}
