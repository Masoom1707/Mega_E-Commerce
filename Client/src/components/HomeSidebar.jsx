import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaImage, FaProductHunt, FaShoppingBag, FaUsers } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const HomeSidebar = () => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const handleSidebarMenu = (index) => {
    if (sidebarMenu === index) {
      setSidebarMenu(null);
    } else {
      setSidebarMenu(index);
    }
  };

  return (
    <div className="Home_Left_Sidebar">
      <button className="sidebarItmes">
        <MdDashboard style={{ fontSize: "17px" }} />
        <p>Dashboard</p>
      </button>
      <button className="sidebarItmes" onClick={() => handleSidebarMenu(1)}>
        <FaImage style={{ fontSize: "17px" }} />
        <p>Home Slides</p>
      </button>
      {sidebarMenu === 1 && (
        <div className="listItmes">
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
        </div>
      )}
      <button className="sidebarItmes">
        <FaUsers style={{ fontSize: "17px" }} />
        <p> Users</p>
      </button>
      <button className="sidebarItmes" onClick={() => handleSidebarMenu(2)}>
        <FaProductHunt style={{ fontSize: "17px" }} />
        <p> Products</p>
      </button>
      {sidebarMenu === 2 && (
        <div className="listItmes">
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
        </div>
      )}
      <button className="sidebarItmes" onClick={() => handleSidebarMenu(3)}>
        <BiSolidCategoryAlt style={{ fontSize: "17px" }} />
        <p>Category</p>
      </button>
      {sidebarMenu === 3 && (
        <div className="listItmes">
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
          <NavLink>Detial</NavLink>
        </div>
      )}
      <button className="sidebarItmes">
        <FaShoppingBag style={{ fontSize: "17px" }} />
        <p>Orders</p>
      </button>
      <button className="sidebarItmes">
        <IoLogOut style={{ fontSize: "17px" }} />
        <p>LogOut</p>
      </button>
    </div>
  );
};

export default HomeSidebar;
