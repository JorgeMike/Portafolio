import React from 'react';

export default function Contact() {
    return (
        <div className='d-flex gap-1'>
            <div className='d-flex flex-wrap gap-2'>
                <div className='glass-card px-3 py-2 d-flex gap-2 text-body'>
                    <i className='bi bi-envelope'></i>
                    <p>alvaradojr2001@gmail.com</p>
                </div>
                <div className='glass-card px-3 py-2 d-flex gap-2 text-body'>
                    <i className='bi bi-telephone'></i>
                    <p>+52 55 46 95 18 19</p>
                </div>
                <a
                    className='glass-card px-3 py-2 d-flex gap-2 text-body text-decoration-none'
                    href='MiguelAlvaradoResume.pdf'
                    target='_blank'
                >
                    <i className='bi bi-file-person'></i>
                    <p>Resume</p>
                </a>
            </div>
            <div className='d-flex gap-2 fs-4 align-items-start'>
                <a
                    href='https://www.linkedin.com/in/jorge-alvarado-0bb17b218/'
                    className='glass-card px-3 py-2 cursor-pointer text-body'
                >
                    <i className='bi bi-linkedin'></i>
                </a>
                <a
                    href='https://github.com/JorgeMike'
                    className='glass-card px-3 py-2 cursor-pointer text-body'
                >
                    <i className='bi bi-github'></i>
                </a>
            </div>
        </div>
    );
}
