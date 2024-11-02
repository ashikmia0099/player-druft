import { useState } from 'react'

import './App.css'
import Navbar from './componantes/Navbar/Navbar'

import Card from './componantes/Player_Card/Card'
import Player from './componantes/player/player'
import Footer from './componantes/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


function App() {
  
  const [totalMoney, setState] = useState(0)
  const [selectedPlayer, setSelectedPlayer] = useState([])
  const [selectedDelete, setDeleteSelected] = useState(false)

  let initialnmoney = 1000000;

  const AddMoney = () => {

      const newMoney = totalMoney + initialnmoney;
      setState(newMoney)


  }

  //  bidding price function
  const handlePurchase = (price, singleplayer) => {

    

    if (totalMoney >= price ) {

      if (selectedPlayer.length < 6){
        
        setState(totalMoney - price);
        handelSelected(singleplayer);

        toast.success('Player purchased successfully');
      }
      else {
        toast.error('Cannot select more than 6 players');
      }

      
      
    } else {
      toast.error('Insufficient Balance');
    }
  };

  

  const handelSelected = singleplayer => {

    if (selectedPlayer.length < 6){
      
      const newSelected = [...selectedPlayer, singleplayer] 
      setSelectedPlayer(newSelected)

    }
    else{
     
    }
    
  }

  // delete selectedData

  const handelDelete = () => {
    
  }



  return (
    <>

    <div >
      <div >
      <Navbar totalMoney={totalMoney} AddMoney={AddMoney} ></Navbar>
      </div>
    
      <Card  totalMoney={totalMoney} handlePurchase={handlePurchase} handelSelected = {handelSelected} selectedPlayer={selectedPlayer}></Card>
      <Footer></Footer>
      
      
    </div>
    
      
      
      
    </>
  )
}

export default App
