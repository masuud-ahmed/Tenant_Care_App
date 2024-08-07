import React, { useEffect, useState } from "react";
import Nav from "../../components/RenterDashboardContent/Nav";
import Sidebar from "../../components/RenterDashboardContent/Sidebar";
import CardItem from "../../components/RenterDashboardContent/CardItem";
import ResentItem from "../../components/RenterDashboardContent/ResentItem";
import { useGetUserTenantQuery } from "../../store/api/UsersSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Dashboard() {
  const { date: user = [], error } = useGetUserTenantQuery();

  // console.log(user);

  const navigate = useNavigate();

  if (error && error.status === 401) {
    Cookies.remove("token");
    navigate("/signIn");
  }

  useEffect(() => {
    document.title = "Dashboard | TenantCare";
  }, []);

  return (
    <div className="flex bg-[#f6f6f6]">
      <Sidebar />
      <Nav />
      <div className="mt-[72px] md:m-[70px] md:ml-[210px] ml-[0px] h-100vh w-full md:p-11 p-3 flex flex-col gap-2">
        <div className="flex flex-col">
          <h3 className="font-bold text-xl text-[#00befe]">Dashboard</h3>
       
        </div>
        {/* content */}
        <CardItem />
        <ResentItem />
      </div>
    </div>
  );
}

export default Dashboard;
