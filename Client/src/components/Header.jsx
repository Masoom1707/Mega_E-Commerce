import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../App";

import "../css/header.css";

import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import {
  IoIosLogOut,
} from "react-icons/io";
import { IoBagCheckOutline } from "react-icons/io5";



const Header = () => {
  const context = useContext(MyContext);

  // handeling the profile drop down and outside click event
  const [showProfileDrpDwn, setShowProfileDrpDwn] = useState(false);
  const profileRef = useRef(null);


  const handleClickOutside = (event) => {

    // profile icon drop down handle 
    if(profileRef.current && !profileRef.current.contains(event.target)){
      setShowProfileDrpDwn(false);
    }

  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)

    return () => {
    document.removeEventListener("click", handleClickOutside)

    }
  }, [])


  

  return (
    <>
      <div className="fixed">
        <div className="header_container common_display">
          <NavLink to="/" className="header1">
            <div className="logo">
              <img src="../public/Images/levelup.jpg" alt="" srcset="" />
            </div>
            <h2>Level-Up</h2>
          </NavLink>
          <div className="header2">
            <h1>WELCOME ADMIN</h1>
          </div>
          <div className="header3">
            {context.isLoggedIn === false ? (
              <div className="login">
                <Link to="/login">Login / Register</Link>
              </div>
            ) : (
              <button
                className="userProfile"
                ref={profileRef}
                onClick={() => setShowProfileDrpDwn(!showProfileDrpDwn)}
              >
                <img src="../public/Images/12.jpg" alt="" />
                {showProfileDrpDwn && (
                  <div className="profileDrpDwn">
                    <NavLink to="/my-account">
                      <FaRegUser /> <span>Profile</span>
                    </NavLink>
                    <NavLink to="/my-orders">
                      <IoBagCheckOutline /> <span>Orders</span>
                    </NavLink>
                    
                    <NavLink onClick={() => context.setIsLoggedIn(false)}>
                      <IoIosLogOut /> <span>Log Out</span>
                    </NavLink>
                  </div>
                )}
              </button>
            )}
            <div className="icon">
              <div>
                <Link to="/favrouites">
                  <FaRegHeart className="header-icon" />
                </Link>
                <div className="badge">0</div>
              </div>
              <div className="icondiv">
                <Link to="/cart">
                  <LuShoppingCart className="header-icon" />
                </Link>
                <div className="badge">0</div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Header;
