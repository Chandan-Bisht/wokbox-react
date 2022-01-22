import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Assets/logo.jpg';

export default function Navbar(){
    return(
        <nav className="mt-4 font-google flex-nowrap">
            <div className="flex lg:flex-row justify-around items-center">
                <div className="">
                    <img src={logo} className="w-36" alt="Home-logo" />
                </div>
                <div className="flex"/>
                <div className="flex items-center grow basis-auto lg:basis-full">
                    <ul className="flex">
                        <li>
                        <NavLink to="#" className="px-4 whitespace-nowrap text-gray-800 font-medium no-underline">Home</NavLink> 
                        </li>
                        <li>
                        <NavLink to="#" className="px-4 whitespace-nowrap text-gray-800 font-medium no-underline">About us</NavLink> 
                        </li>
                        <li>
                        <NavLink to="#" className="px-4 whitespace-nowrap text-gray-800 font-medium no-underline">Services</NavLink> 
                        </li>
                        <li>
                        <NavLink to="#" className="px-4 whitespace-nowrap text-gray-800 font-medium no-underline">Contact</NavLink> 
                        </li>
                    </ul>
                    <ul className="flex justify-between">
                        <li>
                            <button className="ml-4 text-center text-lg text-white rounded-3xl border-orange-600 bg-orange-600 px-6 py-2">Sign In</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}