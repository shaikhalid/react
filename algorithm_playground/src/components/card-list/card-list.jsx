import React from 'react';
import {Card} from '../card/card';
import './card-list.css';


export const CardList = props => (
    <div className='card-list'>
        {props.homepage.map(option =>    (
            <Card key = {option} option = {option} />
        ))}
    </div>
)