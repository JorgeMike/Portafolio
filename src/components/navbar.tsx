'use client';
import React, { useEffect } from 'react';

export default function Navbar() {
    

    useEffect(() => {
        if (typeof document !== 'undefined') {
          import('bootstrap/dist/js/bootstrap.bundle.min.js')
            .then(() => {
              console.log('Bootstrap loaded');
            })
            .catch((err) => {
              console.error('Failed to load Bootstrap:', err);
            });
        }
      }, []);

    return (
        <nav className='navbar navbar-expand-md fixed-top on-appear-1'>
            <div className='container-fluid'>
                <div className='navbar-brand'>Web Developer</div>
                <button
                    className='navbar-toggler fs-3'
                    type='button'
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasExample'
                    aria-controls='offcanvasExample'
                >
                    <i className='bi bi-list'></i>
                </button>
                <div
                    className='offcanvas offcanvas-end'
                    tabIndex={-1}
                    id='offcanvasExample'
                    aria-labelledby='offcanvasExampleLabel'
                >
                    <div className='offcanvas-header'>
                        <h5
                            className='offcanvas-title'
                            id='offcanvasNavbarLabel'
                        >
                            Hi there!
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='offcanvas'
                            aria-label='Close'
                        ></button>
                    </div>

                    <div className='offcanvas-body d-md-flex justify-content-end'>
                        <ul className='navbar-nav gap-3'>
                            <li className='nav-item' data-bs-dismiss='offcanvas'>
                                <a href='#presentation' className='nav-link'>
                                    About Me
                                </a>
                            </li>
                            <li className='nav-item' data-bs-dismiss='offcanvas'>
                                <a href='#experience' className='nav-link'>
                                    Experience
                                </a>
                            </li>
                            <li className='nav-item' data-bs-dismiss='offcanvas'>
                                <a href='#projects' className='nav-link'>
                                    Projects
                                </a>
                            </li>
                            <li className='nav-item' data-bs-dismiss='offcanvas'>
                                <a href='#skills' className='nav-link'>
                                    Skills
                                </a>
                            </li>
                            <li className='nav-item' data-bs-dismiss='offcanvas'>
                                <a href='#contact' className='nav-link'>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
