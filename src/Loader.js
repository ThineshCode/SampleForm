import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="overlay">
                <div className="overlay__inner">
                    <div className="overlay__content"><span className="spinner"></span></div>
                </div>
            </div>
        </div>
    )
}
