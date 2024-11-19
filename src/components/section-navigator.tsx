import React from 'react';
import styles from '@/styles/css/section-navigator.module.css';

interface SectionNavigatorProps {
    id: string;
    label: string;
    direction?: 'up' | 'down';
}

export default function SectionNavigator({ id, label, direction = 'down' }: SectionNavigatorProps) {
    return (
        <div
            className={`d-none d-md-flex mb-2 scale-in-1 ${styles.container}`}
        >
            <a
                href={`#${id}`}
                className={`card rounded-circle cursor-pointer text-body ${styles.button}`}
                style={{ scrollBehavior: 'smooth' }}
            >
                <i className={`bi bi-arrow-${direction}`}></i>
            </a>
            <span className={`card ${styles.label} ${styles[direction]} px-3 py-1`}>
                {label}
            </span>
        </div>
    );
}
