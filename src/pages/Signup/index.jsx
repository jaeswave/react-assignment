import "../../css/SignUp.css"
import AuthForm from "../../shared-components/AuthForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { APPLINK } from "../../utils"
import { toast } from 'react-toastify'
const SignUp = () => {
  const Navigate = useNavigate()

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [error, setError] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  })

  const handleChange = (e) => {
    console.log("first, ", data.firstName)
    if(data.firstName === ""){
      setError( () =>  {
             return  {...error, firstName: 'Firstname is required'}
             })
    
    } else{
        setError(() => {
          return {...error, firstName: '' }
        })
      }
    
    setData(() => {
      return {
         ...data, [e.target.name]: e.target.value 
      }
    })
    
   
    
   

    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.firstName !="" &&
      data.lastName  !== "" &&
      data.email  != "" &&
      data.phoneNumber  != ""
    ){
      //1. call api wit this data
      //2. Wait for Api feedback and if success
      //3. navigate to otp screen
      //4. on error, show a toast if theres error
      toast.success("🥳You have successfully signed up")
      Navigate(APPLINK.OTP[0])
    }else{
       toast.error("All fields are required!");
    }
   
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
        error = {error}
      />
    </div>
  );
};

export default SignUp;
