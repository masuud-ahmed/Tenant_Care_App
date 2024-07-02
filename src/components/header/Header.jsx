import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../../assets/images/logo-01.png';

function Header() {
  const location = useLocation();

  const [menu, setMenu] = useState(true);

  return (
    <header className="fixed top-0 left-0 z-10 w-full h-[70px] bg-white shadow flex justify-between items-center md:px-[12%] px-[7%]">
      <Link to='/'>
        <div>
        
          <img src={logo} alt="logo" className=" h-80 w-80 flex " />
          
          </div>
      </Link>
      <div onClick={() => setMenu(!menu)} className="md:hidden flex items-center justify-center w-[40px] h-[40px] bg-[#4949DB] text-white text-xl rounded cursor-pointer">
        {menu ? <FaBars /> : <FaTimes />}
      </div>
      <div className={` ${menu ? "hidden md:flex" : "transition-all ease-in duration-300 flex"} absolute md:static md:top-0 top-[70px] border-t-2 md:border-none left-0 bg-white md:bg-none shadow md:shadow-none w-full md:w-auto flex flex-col md:flex-row md:items-center items-start md:px-0 px-[7%] md:py-0 py-4`}>
        <Link to="/">
          <div
            className={`font-[600] relative p-3 ${location.pathname === "/"
                ? "text-[#4949DB] after:hidden md:after:block after:absolute md:only:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#4949DB] "
                : "text-[#0D025E]"
              } `}
          >
            HOME
          </div>
        </Link>

        <Link to="/about">
          <div
            className={`font-[600] relative p-3 ${location.pathname === "/about"
                ? "text-[#4949DB] after:hidden md:after:block after:absolute md:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#4949DB]"
                : "text-[#0D025E]"
              } `}
          >
            ABOUT US
          </div>
        </Link>

        <Link to="/signIn">
          <div
            className={`font-[600] relative p-3 ${location.pathname === "/signIn"
                ? "text-[#4949DB] after:hidden md:after:block after:absolute md:after:bottom-[-10.9px] after:bottom-[8px] after:left-0 after:w-[100%] after:h-[2px] after:bg-[#4949DB]"
                : "text-[#0D025E]"
              } `}
          >
            SING IN
          </div>
        </Link>

        <Link to="/GetStarted">
          <button className="my-3 md:y-0 ml-2 bg-[#4949DB] p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-[#0D025E]">
            GET STARTED
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
