import React from 'react';
import './Card.css'


const Card = (props) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img src={`https://robohash.org/${props.id}.png`} alt="robot"/>
            <div className="id-main">
                <h2>{props.name}</h2>
                <p>{props.username}</p>  
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card