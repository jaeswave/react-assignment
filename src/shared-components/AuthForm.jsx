import Button from "../shared-components/Button";
import { Link } from "react-router-dom";
import {APPLINK} from '../utils'
const AuthForm = (prop) => {
  const { formType, onSubmit, onChange, passwordType, onClick, showEye, error } = prop;
  return (
    <>
      {
      formType === "login" && (
        <div className="auth-container">
          <div className="auth-box">
            <h2>Welcome back</h2>
            <p>Welcome back! Log in to continue your journey.</p>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  onChange={onChange}
                />
              </div>
              <div className="form-group password-group">
                <label>Password</label>
                <input
                  type={passwordType}
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={onChange}
                />
                <span className="password-toggle" onClick={onClick}>
                  {showEye}
                </span>
              </div>
              <div className="form-options">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <Link to={APPLINK.START_FORGET_PASSWORD[0]}>Forgot password? </Link>
              </div>
              <Button identity="auth-button" onClick={onSubmit} />
              <p className="form-footer">
                Don’t have an account? <Link to={APPLINK.SIGNUP[0]}>Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      )}
      {
       formType === "signUp" && (
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign up</h2>
            <p>Welcome! Lets get started on your journey.</p>

            <div className="step-indicator">
              <span className="step-title">Account Information</span>
              <span>Step 01/02</span>
            </div>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="John"
                  onChange={onChange}
                />

              <span style={{color:'red'}}>{error.firstName}</span>
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Doe"
                  onChange={onChange}
                />
                <span style={{color:'red'}}>{error.lastName}</span>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="johndoe@gmail.com"
                  onChange={onChange}
                />
                <span style={{color:'red'}}>{error.email}</span>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="08123456789"
                  onChange={onChange}
                />
                <span style={{color:'red'}}>{error.phoneNumber}</span>
              </div>

              <div className="form-buttons">
                <Button type="button" identity="back-button" text="Back" />
                <Button
                  type="submit"
                  identity="continue-button"
                  text="Continue"
                  onClick={onSubmit}
                />
              </div>
            </form>

            <p className="form-footer">
              Already have an account? <Link to={APPLINK.LOGIN[0]}>Sign in</Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;