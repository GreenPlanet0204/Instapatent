import React, { useState } from "react";
import Layout from "../../components/Layout";
import { ReactComponent as AppleLogo } from "../../assets/logo/apple.svg";
import { ReactComponent as GoogleLogo } from "../../assets/logo/google.svg";
import { LoginSocialApple, LoginSocialGoogle } from "reactjs-social-login";
import { Link, useNavigate } from "react-router-dom";
import { APPLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_ID } from "../../utils";

const Signup = () => {
  const [strength, setStrength] = useState("");
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const onLogoutFailure = () => {
    localStorage.clear();
  };

  const SocialLogin = async (access_token) => {
    localStorage.clear();
    localStorage.setItem("access_token", access_token);
    window.location.href = "/";
  };

  const handleChangePassword = (e) => {
    setUser({
      ...user,
      password: e.target.value,
    });
    checkStrength(e.target.value);
  };

  const checkStrength = (password) => {
    let strengthValue = 0;
    const validateRegex = ["[A-Z]", "[a-z]", "[0-9]", "\\W"];
    validateRegex.forEach((regex, i) => {
      if (new RegExp(regex).test(password)) {
        strengthValue += 1;
      }
    });
    console.log(strengthValue);
    switch (strengthValue) {
      case 0:
        return setStrength("");
      case 1:
        return setStrength("poor");
      case 2:
        return setStrength("good");
      case 3:
        return setStrength("good");
      case 4:
        return setStrength("strong");
      default:
        return null;
    }
  };

  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    console.log("user", user);
    navigate("/profile");
  };

  return (
    <Layout>
      <div className="auth-form signup">
        <form id="signup">
          <div className="title">Sign up to InstaPatent</div>
          <div className="form">
            <LoginSocialGoogle
              client_id={GOOGLE_AUTH_CLIENT_ID}
              onLogoutFailure={onLogoutFailure}
              onResolve={({ provider, data }) => {
                SocialLogin(data.access_token);
              }}
            >
              <button className="btn white">
                <GoogleLogo /> &nbsp; Sign up with Google
              </button>
            </LoginSocialGoogle>
            <LoginSocialApple client_id={APPLE_AUTH_CLIENT_ID}>
              <button className="btn white">
                <AppleLogo />
                &nbsp; Sign up with Apple
              </button>
            </LoginSocialApple>
          </div>
          <div className="seperator">
            <span>or</span>
          </div>
          <div className="form">
            <div className="form-group">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group password">
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChangePassword}
              />
              <div className="progress">
                <div className={`strength ${strength}`}>
                  <div className="step first" />
                  <div className="step second" />
                  <div className="step third" />
                </div>
                <div className="label">{strength}</div>
              </div>
            </div>
          </div>
          <div className="form">
            <button className="btn blue" onClick={Submit}>
              Create my account
            </button>
          </div>
          <div className="text">
            Already have an account?
            <Link to="/">Log In</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
