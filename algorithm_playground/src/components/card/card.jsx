import React from 'react';
import './card.css';

export const Card = props => (
    <div className='card'>
        <h1>{props.option}</h1>
    </div>
);
