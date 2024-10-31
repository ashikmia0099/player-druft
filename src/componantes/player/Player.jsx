import React from 'react';
import PropTypes from 'prop-types';


const Player = ({card}) => {

    const {name,country,image,role,battingType,biddingPrice} = card;

    return (
        <div>

             {/* card div */}

            
                <div>
                    <div className="card bg-base-100  shadow-xl">
                        <figure >
                            <img className='h-60 w-full object-cover'
                                src={image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <div className="flex justify-between items-center border-b-2 pb-3 border-zinc-200 ">
                                <p className='text-[#898989] font-medium'> {country} </p>
                                <button className='btn'> {role} </button>
                            </div>
                            <p className='font-bold'>Rating</p>
                            <div className="flex justify-between">
                                <p className='font-semibold	'>Left hand bat</p>
                                <p className='text-[#898989] items-right'> {battingType} </p>
                            </div>
                            <div className="flex justify-between items-center">
                                <p className='font-semibold	'>Price</p>
                                <button className='btn'> ${biddingPrice} </button>
                            </div>
                            
                        </div>
                    </div>
                </div>

                
                
                

            
        </div>
    );
};


Player.propTypes = {
    card: PropTypes.object,
    
}

export default Player;