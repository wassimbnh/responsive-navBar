import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"


const NavBar = () => {

    const [nav,setNav] = useState(false)
    const navArray = [
        {
            id:1,
            nav:"who we are"
        },
        {
            id:2,
            nav:"events"
        },
        {
            id:3,
            nav:"news"
        },
        {
            id:4,
            nav:"contact"
        }
    ]

    return ( 
        <div className="flex justify-between 
        items-center w-full h-20 px-4 text-white 
         bg-slate-600 fixed">
            <div>
                <h1 className="text-2xl font-signature 
                      cursor-pointer">NAVBAR</h1>
            </div>

            <div>
                <ul className="hidden md:flex">
                   {
                    navArray.map( ({id, nav}) => (
                        <li key={id}
                           className="px-4 cursor-pointer capitalize hover:scale-105">
                            {nav}
                        </li>
                    ))
                   }
                </ul>
            </div>

            <div onClick={ ()=> setNav(!nav)}
                className="cursor-pointer pr-4 z-10 hover:scale-105 md:hidden">
               {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>
            
            {
                nav  && (
                    <ul className="flex flex-col 
                    justify-center 
                    items-center 
                    absolute top-0 left-0 
                    w-full h-screen 
                    bg-gradient-to-b
                    from-slate-600 to-gray-800 text-gray-500">
                   {
                    navArray.map( ({id, nav}) => (
                        <li onClick={ ()=> setNav(false)} 
                        className="py-2 text-3xl cursor-pointer hover:scale-105"
                        key={id}
                           >
                            {nav}
                        </li>
                    ))
                   }
                </ul>
                )
            }

        </div>
     );
}
 
export default NavBar;