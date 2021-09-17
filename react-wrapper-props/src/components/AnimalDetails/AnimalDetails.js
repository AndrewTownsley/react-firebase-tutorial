import React from 'react'
import PropTypes from 'prop-types';

const convertFood = (food) => {
    switch (food) {
        case 'insects':
            return '🐜'
        case 'meat':
            return '🍖'
        case 'plants':
            return '🌱'
        
    
        default:
            break;
    }
}

const AnimalDetails = ({ diet, scientificName }) => {
    return (
        <div className="details">
            <h4>Details:</h4>
            <div>
            <div>
                Scientific Name: {scientificName}
            </div>
                Diet: {diet.map((food) => convertFood(food)).join('')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default AnimalDetails
