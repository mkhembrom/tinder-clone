import React, { useState } from 'react';
import TinderCards from 'react-tinder-card';
import './TinderCard.css';

const TinderCard = (props) => {

	const [people, setPeople] = useState([
	{
		name: "Elon Musk",
		url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
	},
	{
		name: "Bill Gates",
		url: "https://image.cnbcfm.com/api/v1/image/106260685-1574427137464rtx79uek.jpg?v=1612974619"
	},
	{
		name: "Cristiano Ronaldo",
		url: "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093"
	}


	]);

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