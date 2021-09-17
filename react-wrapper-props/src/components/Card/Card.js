import PropTypes from 'prop-types';
import React from 'react'
import './Card.css';

const Card = ({ children, details, title}) => {
    return (
        <div className="card">
            <div className="card-details">
                <h2>{title}</h2>    
                {details}
            </div>
            {children}
        </div>
    )
}

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired,
    ]),
    details: PropTypes.element,
    title: PropTypes.string.isRequired,
}

Card.defaultProps = {
    details: null,
}

export default Card
