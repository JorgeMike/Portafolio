import React from 'react';
import styles from '@/styles/css/section-navigator.module.css';

interface SectionNavigatorProps {
    id: string;
    label: string;
}

export default function SectionNavigator({ id, label }: SectionNavigatorProps) {
    return (
        <div
            className={`d-none d-md-flex mb-2 scale-in-1 ${styles.container}`}
        >
            <a
                href={`#${id}`}
                className={`glass-card rounded-circle cursor-pointer text-body ${styles.button}`}
                style={{scrollBehavior: 'smooth'}}
            >
                <i className='bi bi-arrow-down'></i>
            </a>
            <span className={`glass-card ${styles.label} px-3 py-1`}>
                {label}
            </span>
        </div>
    );
}
