import Image, { StaticImageData } from 'next/image';
import React, { useId } from 'react';
import { Fade } from 'react-awesome-reveal';

interface ProjectProps {
    title: string;
    description: string;
    images: StaticImageData[];
    roles: string;
    imagePosition: 'left' | 'right';
}

export default function Project({
    title,
    description,
    images,
    roles,
    imagePosition,
}: ProjectProps) {
    const carouselId = useId(); // Crear un ID único para el carrusel

    const renderContent = () => {
        if (imagePosition === 'left') {
            return (
                <>
                    {renderImageSection()}
                    {renderTextSection()}
                </>
            );
        } else {
            return (
                <>
                    {renderTextSection()}
                    {renderImageSection()}
                </>
            );
        }
    };

    const renderTextSection = () => (
        <Fade
            direction={imagePosition === 'left' ? 'right' : 'left'}
            triggerOnce
            duration={1500}
            className='col-md-6'
        >
            <div className='card'>
                <div className='card-body'>
                    <h3 className='fs-1 fw-semibold'>{title}</h3>
                    <p className='text-muted fw-semibold'>{description}</p>
                </div>
            </div>
        </Fade>
    );

    const renderImageSection = () => (
        <Fade
            direction={imagePosition === 'left' ? 'left' : 'right'}
            triggerOnce
            duration={1500}
            className='col-md-6'
        >
            <div className='d-flex flex-column align-items-center'>
                <div
                    id={`carousel-${carouselId}`}
                    className='carousel slide'
                    data-bs-ride='carousel'
                >
                    <div className='carousel-inner'>
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`carousel-item ${
                                    index === 0 ? 'active' : ''
                                }`}
                            >
                                <Image
                                    src={image}
                                    className='img-fluid'
                                    alt='Project Image'
                                />
                            </div>
                        ))}
                    </div>
                    <button
                        className='carousel-control-prev'
                        type='button'
                        data-bs-target={`#carousel-${carouselId}`}
                        data-bs-slide='prev'
                    >
                        <span
                            className='carousel-control-prev-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button
                        className='carousel-control-next'
                        type='button'
                        data-bs-target={`#carousel-${carouselId}`}
                        data-bs-slide='next'
                    >
                        <span
                            className='carousel-control-next-icon'
                            aria-hidden='true'
                        ></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
                <div className='card px-3 py-2'>
                    <small>{roles}</small>
                </div>
            </div>
        </Fade>
    );

    return (
        <div className='row align-items-center gap-2 gap-md-0 mb-3'>
            {renderContent()}
        </div>
    );
}
