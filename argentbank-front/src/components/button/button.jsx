import React from 'react';

export default function button({ title, classButton, type, Click, styleButton }) {
    return (
        <>
            <button
                className={classButton}
                type={type}
                onClick={Click}
                style={styleButton}
            >
                {title}
            </button>
        </>
    );
};

