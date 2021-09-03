import React from 'react';
import Card from '../components/Card'

const CardList = (props) => {
    const arrayRobot = props.robots.map((robot, i) => {
        return <Card
        key={i}
        id={robot.id}
        name={robot.name}
        username={robot.username}
        email={robot.email}
        />
    })
    return (
        <div>
            {arrayRobot}
        </div>
    )
}

export default CardList