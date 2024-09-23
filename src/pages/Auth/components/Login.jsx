import "../../../css/Login.css";
import { useState } from "react";
import loginBg from "../../../assets/login.png";
import AuthForm from "../../../shared-components/AuthForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (data.email.trim() === "" || data.password.trim() === "") {
      alert("Please fill out all fields");
      return;
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${loginBg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        Height: "100vh",
      }}
    >
      <AuthForm
        formType="login"
        onSubmit={handleSubmit}
        onClick={togglePassword}
        passwordType={showPassword ? "text" : "password"}
        showEye={showPassword ? <FaEye /> : <FaEyeSlash />}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default LoginPage;
