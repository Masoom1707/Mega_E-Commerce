import { Link } from "react-router-dom";
import "../css/header.css";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { MdOutlineFilterList } from "react-icons/md";
import { GrDeliver } from "react-icons/gr";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const [moreItems, setMoreItems] = useState(null);

  const toggleMoreItems = (index) => {
    if(moreItems === index){
        setMoreItems(null)
    }else{
        setMoreItems(index);
    }
  };

  return (
    <>
      <div className="fixed">
        <div className="header_container common_display">
          <div className="header1">
            <h2>Level-Up</h2>
          </div>
          <div className="header2">
            <input type="text" placeholder="Search Products here.." />
            <button>Search</button>
          </div>
          <div className="header3">
            <div className="login">
              <Link to="/login">Login / Register</Link>
            </div>
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
        <div className="lower_header_container common_display">
          <div className="lower1">
            <button
              className={`category ${isOpen ? "purple" : ""}`}
              onClick={() => toggleSidebar(setMoreItems(null))}
            >
              <MdOutlineFilterList />
              SHOP BY CATEGORIES
            </button>
          </div>
          <div className="lower2">
            <Link to="/">Home</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/new">New Arrivals</Link>
            <Link to="/all">All Brands</Link>
            <Link to="/more">More</Link>
          </div>
          <div className="lower3 common_display">
            <p>Fast Delivery...</p>
            <GrDeliver />
          </div>
        </div>

        <div className={`sidebar ${isOpen ? "open" : "close"} `}>
          <RxCross2
            className="cross"
            onClick={() => toggleSidebar(setMoreItems(null))}
          />
          <div className="sidebar_items">
            <ul>
              <li onClick={() => toggleMoreItems(0)}>
                <Link className={`link ${moreItems === 0 ? 'bg' : ''}`}>
                  Men's wear
                  <span>
                    {moreItems === 0 ? <IoIosRemove /> : <IoIosAdd />}
                  </span>
                </Link>
                {moreItems === 0 && (
                  <div className="more_items">
                    <Link>Top wear</Link>
                    <Link>shirts</Link>
                    <Link>jeans</Link>
                    <Link>T-shirts</Link>
                  </div>
                )}
              </li>
              <li onClick={() => toggleMoreItems(1)}>
                <Link className={`link ${moreItems === 1 ? 'bg' : ''}`}>
                  Women's wear{" "}
                  <span>
                    {moreItems === 1 ? <IoIosRemove /> : <IoIosAdd />}
                  </span>
                </Link>
                {moreItems === 1 && (
                  <div className="more_items">
                    <Link>Top</Link>
                    <Link>plazo</Link>
                    <Link>kurti</Link>
                    <Link>shorts</Link>
                  </div>
                )}
              </li>
              <li onClick={() => toggleMoreItems(2)}>
                <Link className={`link ${moreItems === 2 ? 'bg' : ''}`}>
                  Children's wear{" "}
                  <span>
                    {moreItems === 2 ? <IoIosRemove /> : <IoIosAdd />}
                  </span>
                </Link>
                {moreItems === 2 && (
                  <div className="more_items">
                    <Link>shirt</Link>
                    <Link>jeans</Link>
                    <Link>t-shirts</Link>
                    <Link>cap</Link>
                  </div>
                )}
              </li>
              <li onClick={() => toggleMoreItems(3)}>
                <Link className={`link ${moreItems === 3 ? 'bg' : ''}`}>
                  Festive Special{" "}
                  <span>
                    {moreItems === 3 ? <IoIosRemove /> : <IoIosAdd />}
                  </span>
                </Link>
                {moreItems === 3 && (
                    <div className="more_items">
                    <Link>kurta men</Link>
                    <Link>loafer</Link>
                    <Link>Eid wear</Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
