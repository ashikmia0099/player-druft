import React from 'react';

import selected_image from '../../assets/images/logo.png'
import Selected_Card from '../Selected_Card/Selected_Card';

const Selected = ({selectedPlayer}) => {

    
    return (
        <div className='w-full mx-[8%]'>
            <h1 className='text-2xl font-bold'>Selected Player ({selectedPlayer.length}/6)</h1>
            
            <div>
                {
                    selectedPlayer.map(player =>
                        <Selected_Card
                        
                        key={player.id}
                        player={player}

                        
                        ></Selected_Card>
                    )
                    
                    

                }
            </div>
            
        </div>
    );
};

export default Selected;