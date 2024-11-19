'use client'
import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Projects() {
    return (
        <div id='projects'>
            <Fade direction="up" triggerOnce duration={1500}>
                <h2>Some Projects</h2>
            </Fade>
            <div className="row align-items-center gap-2 gap-md-0 mb-5">
                <Fade direction="left" triggerOnce duration={1500} className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>Survey System</h3>
                            <p className="text-muted">Survey system for the university community, with features for teacher evaluation and simple surveys. It also includes administrator profiles for supervising responses and monitoring participation by academic program.</p>
                        </div>
                    </div>

                </Fade>
                <Fade direction="right" triggerOnce duration={1500} className="col-md-6">
                    <div className='d-flex flex-column align-items-center'>
                        <img src="https://placehold.co/400x300/000000/FFF" alt="" className='rounded img-fluid mb-2' />
                        <div className="card px-3 py-2">
                            <small>
                                Roles in the project: Front-end development, back-end optimization.
                            </small>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="row align-items-center gap-2 gap-md-0 mb-5">
                <Fade direction="left" triggerOnce duration={2500} className="col-md-6">
                    <div className='d-flex flex-column align-items-center'>
                        <img src="https://placehold.co/400x300/000000/FFF" alt="" className='rounded img-fluid mb-2' />
                        <div className="card px-3 py-2">
                            <small>
                                Roles in the project: Front-end and back-end development.
                            </small>
                        </div>
                    </div>
                </Fade>
                <Fade direction="right" triggerOnce duration={2500} className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>CEDETEC Website</h3>
                            <p className="text-muted">Informative page about CEDETEC services, with features for creating events and managing participants.</p>
                        </div>
                    </div>

                </Fade>
            </div>
            <div className="row align-items-center gap-2 gap-md-0 mb-5">
                <Fade direction="left" triggerOnce duration={1500} className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>VXTA System</h3>
                            <p className="text-muted">System for registering clients and car conditions, generating repair PDFs, and providing offers based on repair costs and market studies. Designed for an agency dedicated to buying and selling cars.</p>
                        </div>
                    </div>

                </Fade>
                <Fade direction="right" triggerOnce duration={1500} className="col-md-6">
                    <div className='d-flex flex-column align-items-center'>
                        <img src="https://placehold.co/400x300/000000/FFF" alt="" className='rounded img-fluid mb-2' />
                        <div className="card px-3 py-2">
                            <small>
                                Roles in the project: Full stack development.
                            </small>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="row align-items-center gap-2 gap-md-0 mb-5">
                <Fade direction="left" triggerOnce duration={2500} className="col-md-6">
                    <div className='d-flex flex-column align-items-center'>
                        <img src="https://placehold.co/400x300/000000/FFF" alt="" className='rounded img-fluid mb-2' />
                        <div className="card px-3 py-2">
                            <small>
                                Roles in the project: Front-end development.
                            </small>
                        </div>
                    </div>
                </Fade>
                <Fade direction="right" triggerOnce duration={2500} className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3>UNAM PDI Consultation</h3>
                            <p className="text-muted">System for consultation and participation in the Institutional Development Plan 2024-2028 of FES Acatlán, intended for students, faculty, and staff. Includes administrator profiles to monitor comments and download them in XLS format.</p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}