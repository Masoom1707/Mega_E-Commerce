import "../css/loginPage.css";
import { NavLink, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);

  const [formInput, setFormInput] = useState({
    email:'',
    password:''
  })

  const history = useNavigate()

  const handleForgotPassword = () => {
    if(formInput.email !== ""){}
    history('/verify')
  }

  return (
    <div className="login_page_container">
      <form className="login_container">
        <h3>Login to your account</h3>
        <div>
          <input type="text" placeholder="E-mail" name="email"/>
        </div>
        <div>
          <input type={showPass ? "text" : "password"} placeholder="password" name="password" />
          {showPass ? (
            <IoMdEyeOff
              style={{ cursor: "pointer", fontSize: "25px", color: "#590fa8" }}
              onClick={() => setShowPass(!showPass)}
            />
          ) : (
            <IoMdEye
              style={{ cursor: "pointer", fontSize: "25px", color: "#590fa8" }}
              onClick={() => setShowPass(!showPass)}
            />
          )}
        </div>

        <NavLink to='/verify'>Forgot Password ?</NavLink>
        <button type="submit">Login</button>
        <p className="not_reg">
          Not Registered?{" "}
          <span>
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        </p>
        <p>Or continue with social account</p>
        <button className="google">
          <FcGoogle style={{ fontSize: "25px" }} />
          login with google
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
