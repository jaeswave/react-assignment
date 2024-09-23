import Button from "../shared-components/Button";

const AuthForm = (prop) => {
  const { formType, onSubmit, onChange, passwordType, onClick, showEye } = prop;
  return (
    <>
      {formType === "login" && (
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
                <a href="/">Forgot password?</a>
              </div>
              <Button type="submit" identity="auth-button" onClick={onSubmit} />
              <p className="form-footer">
                Don’t have an account? <a href="/">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      )}
      {formType === "signUp" && (
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign up</h2>
            <p>Welcome! Let's get started on your journey.</p>

            <div className="step-indicator">
              <span className="step-title">Account Information</span>
              <span>Step 01/02</span>
            </div>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>First Name</label>
                <input
                  type="text"
                  name="firsName"
                  id="firstName"
                  placeholder="John"
                  onChange={onChange}
                />
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
              Already have an account? <a href="/">Sign in</a>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthForm;