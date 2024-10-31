import React, { useEffect, useState } from 'react';
import Player from '../player/player';


const Card = () => {


   const [cards, setCardData] = useState([])

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
                    <button class="btn font-bold rounded-none rounded-l-lg">Available</button>
                    <button class="btn font-bold rounded-none rounded-r-lg">Selected (0)</button>
                </div>
            </div> 

           <div className="flex justify-center mt-10">
            <div  className='grid grid-cols-3 gap-4 place-items-center max-w-screen-lg'>
                {
                        cards.map(card => 
                        <Player
                        key={card.id}
                        card={card}


                        ></Player>)

                    }
            </div>

           </div>
           
            
        </div>
    );
};

export default Card;