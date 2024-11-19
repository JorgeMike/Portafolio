import React from 'react'

export default function Spheres({ number = 1 }: { number?: number }) {
    return (
        <div className={`spheres-${number}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
