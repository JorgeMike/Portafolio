'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Projects() {
    return (
        <div id='projects'>
            <Fade direction='up' triggerOnce duration={1500}>
                <h2>Some Projects</h2>
            </Fade>
            <div className='row align-items-center gap-2 gap-md-0 mb-5'>
                <Fade
                    direction='left'
                    triggerOnce
                    duration={1500}
                    className='col-md-6'
                >
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='fs-2'>Survey System</h3>
                            <p className='text-muted fw-semibold'>
                                Survey system for the university community, with
                                features for teacher evaluation and simple
                                surveys. It also includes administrator profiles
                                for supervising responses and monitoring
                                participation by academic program.
                            </p>
                        </div>
                    </div>
                </Fade>
                <Fade
                    direction='right'
                    triggerOnce
                    duration={1500}
                    className='col-md-6'
                >
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://placehold.co/400x300/383838/FFF'
                            alt=''
                            className='rounded img-fluid mb-2'
                        />
                        <div className='card px-3 py-2'>
                            <small>
                                Roles in the project: Front-end development,
                                back-end optimization.
                            </small>
                        </div>
                    </div>
                </Fade>
            </div>
            {/* <div className="row align-items-center gap-2 gap-md-0 mb-5">
                <Fade direction="left" triggerOnce duration={2500} className="col-md-6">
                    <div className='d-flex flex-column align-items-center'>
                        <img src="https://placehold.co/400x300/383838/FFF" alt="" className='rounded img-fluid mb-2' />
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
            </div> */}
            <div className='row align-items-center gap-2 gap-md-0 mb-5'>
                <Fade
                    direction='left'
                    triggerOnce
                    duration={2500}
                    className='col-md-6'
                >
                    <div className='d-flex flex-column align-items-center'>
                        <img
                            src='https://placehold.co/400x300/383838/FFF'
                            alt=''
                            className='rounded img-fluid mb-2'
                        />
                        <div className='card px-3 py-2'>
                            <small>
                                Roles in the project: Front-end development.
                            </small>
                        </div>
                    </div>
                </Fade>
                <Fade
                    direction='right'
                    triggerOnce
                    duration={2500}
                    className='col-md-6'
                >
                    <div className='card'>
                        <div className='card-body'>
                            <h3 className='fs-2'>UNAM PDI Consultation</h3>
                            <p className='text-muted fw-semibold'>
                                System for consultation and participation in the
                                Institutional Development Plan 2024-2028 of FES
                                Acatlán, intended for students, faculty, and
                                staff. Includes administrator profiles to
                                monitor comments and download them in XLS
                                format.
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className='row align-items-center gap-2 gap-md-0 mb-5'>
                <div className='col-lg-4'>
                    <div className='card rounded-3 overflow-hidden'>
                        <img
                            src='https://placehold.co/300x200/383838/FFF'
                            alt=''
                        />
                        <div className='card-body'>
                            <h3 className='fs-2'>VXTA Sistem</h3>
                            <p className='text-muted fw-semibold'>
                                System for registering clients and car
                                conditions, generating repair PDFs, and
                                providing offers based on repair costs and
                                market studies. Designed for an agency dedicated
                                to buying and selling cars.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card rounded-3 overflow-hidden'>
                        <img
                            src='https://placehold.co/300x200/383838/FFF'
                            alt=''
                        />
                        <div className='card-body'>
                            <h3>Project Name</h3>
                            <p className='text-muted'>
                                Description of the project.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='card rounded-3 overflow-hidden'>
                        <img
                            src='https://placehold.co/300x200/383838/FFF'
                            alt=''
                        />
                        <div className='card-body'>
                            <h3>Project Name</h3>
                            <p className='text-muted'>
                                Description of the project.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
