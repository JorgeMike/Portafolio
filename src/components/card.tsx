import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CardProps {
    title: string;
    description: string;
    image: StaticImageData;
}

export default function Card({ title, description, image }: CardProps) {
    return (
        <div className='card rounded-3 overflow-hidden'>
            <Image src={image} alt='Project Image' className='img-fluid card-img-top'/>
            <div className='card-body'>
                <h3 className='fs-1 fw-semibold text-center'>{title}</h3>
                <p className='text-muted fs-5'>{description}</p>
            </div>
        </div>
    );
}
