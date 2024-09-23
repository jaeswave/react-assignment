import "../../../css/SignUp.css";
import AuthForm from "../../../shared-components/AuthForm";
import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.firstName.trim() === "" ||
      data.lastName.trim() === "" ||
      data.email.trim() === "" ||
      data.phoneNumber.trim() === ""
    )
      alert("All fields are required!");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "red",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no repeat",
        Height: "100vh",
        padding: "100px",
      }}
    >
      <AuthForm
        formType="signUp"
        onSubmit={handleSubmit}
        onChange={(e) => handleChange(e)}
        onClick={handleSubmit}
      />
    </div>
  );
};

export default SignUp;
