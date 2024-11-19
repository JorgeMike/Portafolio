import React from 'react';
import Contact from './contact';

export default function Presentation() {
    return (
        <section
            id='presentation'
            className='container on-appear-2 mt-5 mt-md-0'
        >
            <div className='row flex-row-reverse'>
                <div className='col-md-5 position-relative'>
                    <div className='d-flex justify-content-center'>
                        <img
                            src='https://placehold.co/400x500/000000/FFF'
                            alt='imagen placeholder'
                            className='img-fluid rounded-4'
                        />
                    </div>
                </div>
                <div className='col-md-7 mt-3 mt-md-0'>
                    <h2>Hi! I'm</h2>
                    <h1 className='fw-bolder display-3'>Miguel Alvarado</h1>
                    <h3 className='fw-bold display-6 mb-4'>
                        Frontend Developer
                    </h3>
                    <p className='glass-card fs-5'>
                        I am passionate about coding and exploring new
                        technologies. I enjoy creating attractive and efficient
                        interfaces, with a deep interest in UX/UI design.
                    </p>
                    <Contact />
                </div>
            </div>
        </section>
    );
}
