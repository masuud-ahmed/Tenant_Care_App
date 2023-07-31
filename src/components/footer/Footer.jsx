import React, { useEffect, useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const [year, setYear] = useState()

  useEffect(() => {
    const date = new Date();

    setYear(date.getFullYear())
  },[year])

  return (
    <footer className="w-full py-10 px-[4%] bg-[#ECF1F8] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-3 md:gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold text-slate-900 cursor-pointer">
            TENANT<span className="text-[#00befe]">CARE</span>
          </h1>
          <p className="text-gray-400 break-words">
            Introducing TenantCare, the ultimate property management solution 
            designed to streamline and simplify every aspect of managing properties,
           tenants, and work orders . 
          </p>
          <div className="flex gap-3 mt-4 text-[#00befe]">
            <Link to='https://www.facebook.com'><FaFacebook /></Link>
            <Link to='https://twitter.com'><FaTwitter /></Link>
            <Link to='https://instagram.com'><FaInstagram /></Link>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[#222] font-medium ">Quick Links</span>
          <Link to="/" className="text-gray-400 hover:text-[#00befe]">Home</Link>
          <Link to="/about" className="text-gray-400 hover:text-[#00befe]">About Us</Link>
          <Link to="/signIn" className="text-gray-400 hover:text-[#00befe]">Sign In</Link>
          <a className="text-gray-400 hover:text-[#00befe]">Get Started</a>
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <span className="text-[#222] font-medium">Subscribe</span>
          <p className="mt-2 text-gray-500 text-sm">
            Subscribe to get latest property, blog news from us
          </p>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Email address "
              className="outline-none p-3 bg-white rounded-lg"
            />
            <div className="w-full text-center bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
              Subscribe
            </div>
          </div>
        </div>
      </div>
       <p className="md:mt-2 mt-5 text-gray-500 text-sm max-[768px]:text-center ">
        &copy; {year} Tenant Care All rights reserved.
       </p>
    </footer>
  );
}

export default Footer;
