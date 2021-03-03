import React, { useState, useEffect } from 'react';
import TinderCards from 'react-tinder-card';
import axios from '../axios';
import './TinderCard.css';

const TinderCard = (props) => {

	const [people, setPeople] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const req = await axios.get('/tinder/card');
			setPeople(req.data);
		}
		fetchData();
	},[]);

	const swiped = (direction, nameToDelete) => {
		console.log("removing: "+ nameToDelete);
	}

	const outOfFrame = (name) => {
		console.log(name + "left the Screen");
	}

  return (
    <div className="tinderCards">
    	<div className="tinderCard__cardContainer">
    		{people.map((person) => (
    			<TinderCards 
    				className="swipe"
    				key={person.name}
    				preventSwipe={["up","down"]}
    				onSwipe={(dir) => swiped(dir, person.name)} 
    				onCardLeftScreen={() => outOfFrame(person.name)} 
    				
    			>
    			<div className="card" style={{ backgroundImage: `url(${person.url})`}} >
    				<h3>{person.name}</h3>
    			</div>
    			</TinderCards>
    		))}
    	</div>

    </div>
  )
}

export default TinderCard;