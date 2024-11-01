import React, { useEffect, useState } from 'react';
import Player from '../player/player';
import Selected from '../Selected/Selected';


const Card = () => {


   const [cards, setCardData] = useState([])

   const [showSelected, setSelectedCard] = useState(false)

   useEffect (() =>{
    fetch('players.json')
    .then(res => res.json())
    .then(data => setCardData(data))
    .catch(error => console.error('Error fetching player data:', error));
   }, [])

    return (
        <div className='px-10 pt-10'>
            {/* text-button div */}

            <div className='flex justify-between items-center px-[7%]'>
                <div>
                    <h1 className='font-bold text-2xl'>Available Players</h1>
                </div>
                <div className='border-2 border-gray-300 rounded-xl	'>
                    <button className={`btn font-bold rounded-none rounded-l-lg ${!showSelected ? 'bg-green-500 text-white': ''}`} onClick={ () => setSelectedCard(false)}>Available</button>
                    <button class={`btn font-bold rounded-none rounded-r-lg ${showSelected ? 'bg-green-500 text-white' : ''}`} onClick={() => setSelectedCard(true)}>Selected (0)</button>
                </div>
            </div> 

           <div className="flex justify-center mt-10">

            { showSelected ? (<Selected></Selected>) : ( <div  className='grid grid-cols-3 gap-4 place-items-center max-w-screen-lg '>
                {
                        cards.map(card => 
                        <Player
                        key={card.id}
                        card={card}


                        ></Player>)

                    }
            </div>)
               
            }
           

           </div>
           
            
        </div>
    );
};

export default Card;