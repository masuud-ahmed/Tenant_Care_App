import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-01.png';
function Nav() {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    if (token) {
      setUserInfo(token);
    }
  }, [userInfo]);

  const handleLogout = () => {
    Cookies.remove("token");
    setUserInfo(true);
    navigate("/signIn");
  };

  return (
    <div className="fixed z-[6] top-0 right-0 w-[100%] bg-white h-[70px] shadow-lg ">
      <div className="h-[70px] flex items-center text-center justify-between md:px-[15%] ">
        <Link>
        <img src={logo} alt="logo" className=" h-80 w-90 flex-auto px-12" />
          
        </Link>

        <div
          onClick={handleLogout}
          className="hidden ml-10 md:flex items-center justify-center text-xl text-[#FF6746] gap-3 cursor-pointer"
        >
          <FiLogOut />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
