import React from 'react';
import selected_image from '../../assets/images/logo.png';
import { MdDeleteForever } from "react-icons/md";

const Selected_Card = ({player,removePlayer}) => {

    
    return (
        <div>
            <div className='flex justify-between border-2 border-gray-200 p-4 rounded-lg mt-5 items-center'>

            <div className='flex items-center gap-4'>
                <div>
                    <img src={player.image} alt="" className='h-16 w-16 rounded-lg' />
                </div>
                <div>
                <h1 className='text-2xl font-semibold'>{player.name}</h1>
                    <p className='font-medium text-[#13131399]'> {player.battingType} </p>
                </div>
            </div>
            <div> 
                <button  onClick={() => removePlayer(player.id)}><MdDeleteForever className='h-10 w-10' /> </button>
                
            </div>

            </div>

           
            
        </div>
    );
};

export default Selected_Card;