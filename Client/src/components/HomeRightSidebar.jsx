import React from 'react'
import {NavLink} from 'react-router-dom'
import Badge from '../components/Badge'

import {MdBarChart} from 'react-icons/md'
import { FaGift, FaProductHunt } from 'react-icons/fa'
import { IoPieChart } from 'react-icons/io5'
import { RiBarChartGroupedLine } from 'react-icons/ri'
import { BsBank2, BsFillBarChartLineFill } from 'react-icons/bs'
import { ProductTable } from './Product_Table'



const HomeRightSidebar = () => {
  return (
    <div className="Home_Right_Sidebar">
      <div className="welcome_box">
        <div className='greeting'>
        <h2>Welcome Again,</h2>
        <h2>Admin</h2>
        <p>Here's The Data Of Your Level-Up Store</p>
        <button>+Add Products</button>
        </div>
        <div className='profileCont'>
          <img src="./public/images/15.jpg" alt="profile" />
        </div>
      </div>

      <div className="card_section">
        <NavLink>
          <FaGift style={{ color:"#114fbb"}} />
          <div className="title">
            <p>New Orders</p>
            <h4>1,342</h4>
          </div>
          <MdBarChart style={{fontSize:"25px", color:"#114fbb"}} />
        </NavLink>

        <NavLink>
          <IoPieChart style={{fontSize:"20px", color:"#11bb55"}} />
          <div className="title">
            <p>Sales</p>
            <h4>$24,445</h4>
          </div>
          <BsFillBarChartLineFill style={{ color:"#11bb55"}} />
        </NavLink>

        <NavLink>
          <BsBank2 style={{fontSize:"20px",color:"#c0580d"}} />
          <div className="title">
            <p>Revenue</p>
            <h4>12,142</h4>
          </div>
          <MdBarChart style={{fontSize:"25px", color:"#c0580d"}} />
        </NavLink>

        <NavLink>
          <FaProductHunt style={{fontSize:"20px",color:"#d4112e"}} />
          <div className="title">
            <p>Total Products</p>
            <h4>1,392</h4>
          </div>
          <RiBarChartGroupedLine style={{fontSize:"25px", color:"#d4112e"}} />
        </NavLink>
      </div>

    <div className="producttable">
    <ProductTable />
    </div>

      <div className="orderHistory">
      <div className="orderTable">
        <h3>Level-Up Order History</h3>
        <h4>There are orders</h4>
       <div className="table_container">
       <table>
              <thead className="header_table">
                <tr>
                  <th scope="col">_</th>
                  <th scope="col">Order id</th>
                  <th scope="col">payment id</th>
                  <th scope="col">name</th>
                  <th scope="col">phone number</th>
                  <th scope="col">address</th>
                  <th scope="col">pincode</th>
                  <th scope="col">total amount</th>
                  <th scope="col">Email</th>
                  <th scope="col">user id</th>
                  <th scope="col">order status</th>
                  <th scope="col">View Products</th>
                  <th scope="col">date</th>
                </tr>
              </thead>
              <tbody>
                
                <tr>
                  <th></th>
                  <td>642hf80020f2482ff822f989</td>
                  <td>pay-2455j24a994d23w24a</td>
                  <td>Masoom Raza</td>
                  <td>963224356</td>
                  <td>H No. 22 street Kotwali chowk</td>
                  <td>847212</td>
                  <td>159000</td>
                  <td>masoomraza1211@gmail.com</td>
                  <td>229j366122329fg3249aa8</td>
                  <td><Badge status="delivered"/></td>
                  <td>Click here</td>
                  <td>2025-15-05</td>
                </tr>

               
              
              </tbody>
            </table>
       </div>
      </div>
    </div>

    

    </div>
  )
}

export default HomeRightSidebar