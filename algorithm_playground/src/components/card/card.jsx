import React from 'react';
import { withRouter } from 'react-router-dom'
import './card.css';


const Card = ({option, history, match, linkUrl}) => (
    <div className='card' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <h1>{option}</h1>
    </div>
);

export default withRouter(Card);