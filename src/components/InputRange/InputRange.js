import React from 'react';
import PropTypes from "prop-types";

InputRange.propTypes = {
    name: PropTypes.string.isRequired,
    min: PropTypes.number,
    max: PropTypes.number,
}

InputRange.defaultProps = {
    min: 1,
    max: 10000,
}

function InputRange({ name, min, max, onChange }) {

    return (
        <div>
            <label htmlFor="volume">{name}</label>
            <input {...{ name, min, max, onChange }} type="range" id={name} value='5'/>
        </div>
    );
}

export default InputRange;