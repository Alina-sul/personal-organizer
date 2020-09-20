import React from 'react';
import PropTypes from 'prop-types';

function Button({onClick, css, value}) {
    return (
        <button onClick={onClick} className={css} >
            {value}
        </button>
    );
}

export default Button;

Button.propTypes = {
    onClick: PropTypes.func,
    css: PropTypes.string,
    value: PropTypes.string
};
