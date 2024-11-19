import React from 'react';

export default function Contact() {
    return (
        <div className='d-flex flex-wrap flex-md-nowrap gap-2 gap-md-0  mt-2'>
            <div className='d-flex flex-wrap gap-2 justify-content-center justify-content-md-start'>
                <div className='card rounded-5'>
                    <div className='card-body d-flex gap-2'>
                        <i className='bi bi-envelope'></i>
                        <p className='card-text'>alvaradojr2001@gmail.com</p>
                    </div>
                </div>
                <div className='card rounded-5'>
                    <div className='card-body d-flex gap-2'>
                        <i className='bi bi-telephone'></i>
                        <p className='card-text'>+52 55 46 95 18 19</p>
                    </div>
                </div>
                <a
                    className='card rounded-5'
                    href='MiguelAlvaradoResume.pdf'
                    target='_blank'
                >
                    <div className='card-body d-flex gap-2'>
                        <i className='bi bi-file-person'></i>
                        <p>Resume</p>
                    </div>
                </a>
            </div>
            <div className='d-flex flex-grow-1 gap-2 fs-4 align-items-start justify-content-center justify-content-md-start'>
                <a
                    href='https://www.linkedin.com/in/jorge-alvarado-0bb17b218/'
                    className='card px-3 py-2 text-body'
                >
                    <i className='bi bi-linkedin'></i>
                </a>
                <a
                    href='https://github.com/JorgeMike'
                    className='card px-3 py-2 text-body'
                >
                    <i className='bi bi-github'></i>
                </a>
            </div>
        </div>
    );
}
