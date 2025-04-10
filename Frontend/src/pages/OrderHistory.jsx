import Badge from '../components/Badge'
import '../css/orderHistory.css'

const OrderHistory = () => {
  return (
    <div className="orderHistory">
      <div className="orderTable">
        <h3>My Orders</h3>
        <h4>There are <span>2</span> orders</h4>
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
  )
}

export default OrderHistory