'use client';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import encuestas from '../../public/mockups/encuestas.png';
import encuestas2 from '../../public/mockups/encuestas2.png';
import pdi from '../../public/mockups/pdi.png';
import Project from './project';
import vxta from '../../public/mockups/vxta.png';
import cedetec from '../../public/mockups/cedetec.png';
import Card from './card';

export default function Projects() {
    return (
        <div id='projects'>
            <Fade direction='up' triggerOnce duration={1500}>
                <h2>Some Projects</h2>
            </Fade>
            <Project
                title='Survey System'
                description='Survey system for the university community, with
                            features for teacher evaluation and simple surveys.
                            It also includes administrator profiles for
                            supervising responses and monitoring participation
                            by academic program.'
                images={[encuestas, encuestas2]}
                roles='Roles in the project: Front-end development,
                            back-end optimization.'
                imagePosition='right'
            />
            <Project
                title='UNAM PDI Consultation'
                description='System for consultation and participation in the
                            Institutional Development Plan 2024-2028 of FES
                            Acatlán, intended for students, faculty, and staff.
                            Includes administrator profiles to monitor comments
                            and download them in XLS format.'
                images={[pdi]}
                roles='Roles in the project: Front-end development.'
                imagePosition='left'
            />

            <div className='row align-items-center gap-2 gap-md-0 mt-5'>
                <div className='col-lg-6'>
                    <Card
                        title='VXTA Sistem'
                        description='System for registering clients and car
                                conditions, generating repair PDFs, and
                                providing offers based on repair costs and
                                market studies. Designed for an agency dedicated
                                to buying and selling cars.'
                        image={vxta}
                    />
                </div>
                <div className='col-lg-6'>
                    <Card
                        title='CEDETEC'
                        description='CEDETEC website for providing information about services, confirming registrations, and managing events, including participant registration. Additionally, it allows real-time display of available spots and generates lists in Excel format.'
                        image={cedetec}
                    />
                </div>
            </div>
        </div>
    );
}
