import React, { useState } from 'react';

import logo from '../../assets/images/logo.png'
import banner_bg_img from '../../assets/images/bg-shadow.png'
import banner_inside_img from '../../assets/images/banner-main.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {


    const [totalMoney, setState] = useState(0)

    let initialnmoney = 1000000;

    const AddMoney = () => {

        const newMoney = totalMoney + initialnmoney;
        setState(newMoney)


    }

    console.log(totalMoney)

    const notify = () => toast("Money Added Successfully!");

    const handelAddMoney = () => {
        AddMoney();
        notify();
    }

    return (
        <div>

            {/* navbar section */}
           <nav>
           <div className="navbar bg-slate-400 px-10  ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabindex="0"
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li>
                    <a>Parent</a>
                    
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
                </div>
                
                <img src={logo} alt="" />
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <li><a className='text-lg font-semibold'>Home</a></li>
                <li><a className='text-lg font-semibold'>Fixture</a></li>
                <li><a className='text-lg font-semibold'>Teams</a></li>
                <li><a className='text-lg font-semibold'>Schedules</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">  {totalMoney} Coin </a>
            </div>
            </div>
           </nav>

            {/* banner section */}


            <div style={{ backgroundImage: `url(${banner_bg_img})` }} className=" p-10	 bg-cover bg-black bg-center mt-10 md:mx-[10%] rounded-2xl	">

                <div className=' items-center flex flex-col'>
                    <img src={banner_inside_img} alt="" />
                    <h1 className='text-white font-bold text-2xl mt-3'>Assemble Your Ultimate Dream 11 Cricket Team</h1> 
                    <p className='text-[#9C9C9C] font-medium mt-3'>Beyond Boundaries Beyond Limits</p>
                    <button onClick={handelAddMoney} className="btn bg-[#E7FE29] mt-3 font-medium" >  Claim Free Credit</button>
                </div>
               
            </div>
            <ToastContainer></ToastContainer>


            
         

            




        </div>
    );
};

export default Navbar;