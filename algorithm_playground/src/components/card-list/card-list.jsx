import React from 'react';
import Card from '../card/card';
import './card-list.css';


const CardList = (props) => {
    return(
        <div className='card-list'>
            {props.options.map((option) => (
                <Card key={option.name} option={option.name} linkUrl={option.linkUrl}  />
            ))}
        </div>
    )
}
 
export default CardList;