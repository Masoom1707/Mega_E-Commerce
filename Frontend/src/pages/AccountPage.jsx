import '../css/account.css'
import {FaCloudUploadAlt} from 'react-icons/fa'

const AccountPage = () => {
  return (
    <div className="account_section">
      <div className="innerProfile">
        <div className="profilecontainer">
          <img src="../public/images/15.jpg" alt="" />
          <div className="overlay">
            <input type="file" accept='image/*' />
            <FaCloudUploadAlt className='upload' />
          </div>
        </div>
        <h2>Masoom Raza</h2>
        <h3>masoomraza1211@gmail.com</h3>
        <div className="profileFields">
          <h4>My Profile</h4>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Phone Number' />
          <button className='save'>save</button>
          <button>cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AccountPage