'use client';
import React from 'react';
import Spheres from './spheres';
import { Fade } from 'react-awesome-reveal';

// Importa las imágenes
import htmlIcon from '../../public/html.png';
import cssIcon from '../../public/css.png';
import tsIcon from '../../public/ts.png';
import nextjsIcon from '../../public/nextjs.png';
import nestjsIcon from '../../public/nestjs.png';
import mongoIcon from '../../public/mongo.png';
import bootstrapIcon from '../../public/bootstrap.png';
import Image from 'next/image';

export default function Skills() {
    // Lista de skills con su respectiva imagen y nombre
    const skills = [
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'Next.js', icon: nextjsIcon },
        { name: 'NestJS', icon: nestjsIcon },
        { name: 'MongoDB', icon: mongoIcon },
        { name: 'Bootstrap', icon: bootstrapIcon },
    ];

    return (
        <section
            id='skills'
            className='on-appear-2 py-5'
        >
            <Spheres number={2} />
            <div className='container'>
                <Fade direction="up" duration={1500} triggerOnce>
                    <h2>Skills</h2>
                </Fade>
                <div className="row row-gap-3">
                    {skills.map((skill, index) => (
                        <div key={index} className="col-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <Image className='img-fluid' src={skill.icon} alt={skill.name} width={100} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}