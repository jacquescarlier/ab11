import React from 'react';

const button = ({ title, classButton, type, Click, styleButton }) => {
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

export default button;