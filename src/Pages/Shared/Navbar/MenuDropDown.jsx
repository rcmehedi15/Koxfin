import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/MenuDropDown.css'
const NavBar = () => {

    const navOptions = <>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/Solutions">Solutions</Link></li>
        <li><Link to="/Consulting">Consulting</Link></li>
        <li><Link to="/Careers">Careers</Link></li>
        <li><Link to="/Contact">Contact</Link></li>



    </>

    return (
        <>
         <div className="dropdown md:hidden z-10 shadow-md ">
                <label tabIndex={0} className=" lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu  menu-compact dropdown-content mt-3 p-2  bg-base-300 shadow  rounded-box w-44">
                    {navOptions}
                </ul>
            </div>


            <div className=" hidden lg:flex ">
                <ul className="menu menu-horizontal hoverColor text-white">
                    {navOptions}
                </ul>
            </div>


        </>
    );
};

export default NavBar;