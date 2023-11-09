import React from 'react';
import './button.css'

const button = ({ title, classButton, type, Click }) => {
    return (
        <>
            <button
                
                className={classButton}
                type={type}
                onClick={Click}>
                {title}
            </button>
        </>
    );
};

export default button;