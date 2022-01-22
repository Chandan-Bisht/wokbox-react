import React from 'react';
import Typical from 'react-typical';
import Navbar from '../Elements/Navbar';
import { NavLink } from 'react-router-dom';
import Screen1img1 from '../Assets/s1img1.jpg';
import Screen1img2 from '../Assets/s1img2.jpg';
import Screen1img3 from '../Assets/s1img.jpg';
import Screen1img4 from '../Assets/s1img4.jpg';
import Screen1img5 from '../Assets/s1img5.jpg';
import Screen1img6 from '../Assets/s1img6.jpg';
import Brand1 from '../Assets/brands/brand1.png';
import Brand2 from '../Assets/brands/brand2.jpg';
import Brand3 from '../Assets/brands/brand3.png';
import Brand4 from '../Assets/brands/brand4.png';
import Brand5 from '../Assets/brands/brand5.png';
import Brand6 from '../Assets/brands/brand6.png';

export default function Home(){
    return(
        <>
            <Navbar />
            <div className="max-w-full font-google mx-32">
                <div className="grid grid-cols-10 gap-x-4 my-16">
                    <div className="col-span-4 mr-8 pt-4 relative">
                        <h1 className="font-sans text-gray-800 text-5xl font-semibold">
                            Wokbox is effortless and powerful with {' '}
                            <p className="font-sans mt-2 text-orange-600 font-semibold">
                                <Typical
                                    steps={[
                                        "easy usage",
                                        1500,
                                        "fast transactions",
                                        1500,
                                        "secure payments",
                                        1500,
                                    ]}
                                    wrapper="p"
                                    loop={Infinity}
                                />
                            </p>
                        </h1>
                        <p className="my-8 text-2xl text-gray-500 font-normal">
                            Achieve your saving goals. Have all your recurring and one time expenses and incomes in one place.
                        </p>
                        <div className="py-4">
                            <button className="px-6 py-4 bg-orange-600 text-white text-xl font-semibold rounded-lg">Get Started</button>
                            <button className="mx-3 px-6 py-4 bg-emerald-500 text-white text-xl font-semibold rounded-lg">Free Trial</button>
                        </div>
                        
                    </div>
                    <div className="col-span-6 ml-8">
                        <div className="grid grid-cols-3 max-w-full">
                            <div className="col-span-1">
                                <div className="mt-24">
                                    <img 
                                        src={Screen1img1}
                                        className="rounded-md"
                                        alt=""
                                    />
                                </div>
                                <div className="mt-8 mr-4 shadow rounded-md">
                                    <img 
                                        src={Screen1img2}
                                        className=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img 
                                    src={Screen1img3}
                                    className="rounded-md"
                                    alt=""
                                />
                            </div>
                            <div className="col-span-1 mt-24 ml-4">
                                <div>
                                    <img 
                                        src={Screen1img4}
                                        className=""
                                        alt=""
                                    />
                                </div>
                                <div className="w-32 my-4 ml-4 shadow rounded-md">
                                    <img 
                                        src={Screen1img5}
                                        className=""
                                        alt=""
                                    />
                                </div>
                                <div className='w-32 ml-4'>
                                    <img
                                        src={Screen1img6}
                                        className="rounded-md"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-12">
                    <h2 className="mb-8 text-center tracking-wide text-base text-gray-400 font-bold uppercase ">Trusted by over 5000 Clients</h2>
                    <div className="grid grid-cols-6 gap-x-4 items-center mb-24">
                        <div className="col-span-1">
                            <img
                                src={Brand1}
                                className="w-20"
                                alt=""
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src={Brand2}
                                className=""
                                alt=""
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src={Brand3}
                                className="w-"
                                alt=""
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src={Brand4}
                                className="w-32"
                                alt=""
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src={Brand5}
                                className="w-32"
                                alt=""
                            />
                        </div>
                        <div className="col-span-1">
                            <img
                                src={Brand6}
                                className="w-32"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="px-52">
                        <h2 className="mb-8 tracking-wide text-center text-base text-gray-400 font-bold uppercase ">Why Choose Wokbox?</h2>
                        <h3 className="text-center text-4xl text-stone-200 font-semibold">Here are a few reasons why our customers choose Wokbox.</h3>
                    </div>
                    <ul className="flex list-none flex-row" role="tablist">
                        <li className="">
                            <NavLink to="" className="flex flex-row">
                                <div>
                                    <img
                                        src=""
                                        className=""
                                        alt=""
                                    />
                                </div>
                                <div>
                                    <h2>Easy Usage</h2>
                                    <p></p>
                                </div>
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="">
                                
                            </NavLink>
                        </li>
                        <li className="">
                            <NavLink to="">
                                
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}