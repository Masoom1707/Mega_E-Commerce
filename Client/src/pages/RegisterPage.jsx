import "../css/loginPage.css";
import { NavLink } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="login_page_container">
      <form className="login_container">
        <h3>Sign Up</h3>
        <div>
          <input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <input type="tel" placeholder="Phone No." />
        </div>
        <div>
          <input type="text" placeholder="E-mail" />
        </div>
        <div>
          <input type={showPass ? 'text' : 'password'} placeholder="password" />
          {showPass ? (
            <IoMdEyeOff
              style={{ cursor: "pointer", fontSize:"25px", color:"#590fa8" }}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <IoMdEye
              style={{ cursor: "pointer", fontSize:"25px", color:"#590fa8" }}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>

        <button type="submit">Sign Up</button>
        <p className="not_reg">
          Already have an account?{" "}
          <span>
            <NavLink to="/login">login</NavLink>
          </span>
        </p>
        <p>Or continue with social account</p>
        <button className="google">
          <FcGoogle style={{ fontSize: "25px" }} />
          signUp with google
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
