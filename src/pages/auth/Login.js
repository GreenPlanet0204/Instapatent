import React, { useState } from "react";
import Layout from "../../components/Layout";
import { ReactComponent as AppleLogo } from "../../assets/logo/apple.svg";
import { ReactComponent as GoogleLogo } from "../../assets/logo/google.svg";
import { ReactComponent as UserLogo } from "../../assets/logo/user.svg";
import { ReactComponent as LockLogo } from "../../assets/logo/lock.svg";
import { LoginSocialApple, LoginSocialGoogle } from "reactjs-social-login";
import { Link } from "react-router-dom";
import { APPLE_AUTH_CLIENT_ID, GOOGLE_AUTH_CLIENT_ID } from "../../utils";

const Login = () => {
  const [user, setUser] = useState({
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

  const Submit = (e) => {
    e.preventDefault();
    console.log("user", user);
  };

  return (
    <Layout>
      <div className="auth-form">
        <form id="login">
          <div className="title">Log in to InstaPatent</div>
          <div className="form">
            <div className="form-group">
              <UserLogo />
              <input
                type="text"
                placeholder="Username or Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <LockLogo />
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="link-group">
              <Link to="/signup">I don't have an account</Link>
              <Link to="/forgot">Forgot password?</Link>
            </div>
            <button className="btn blue" onClick={Submit}>
              Sign in with Email
            </button>
          </div>
          <div className="seperator">
            <span>or</span>
          </div>
          <div className="form">
            <LoginSocialGoogle
              client_id={GOOGLE_AUTH_CLIENT_ID}
              onLogoutFailure={onLogoutFailure}
              onResolve={({ provider, data }) => {
                SocialLogin(data.access_token);
              }}
            >
              <button className="btn white">
                <GoogleLogo /> &nbsp; Sign in with Google
              </button>
            </LoginSocialGoogle>
            <LoginSocialApple client_id={APPLE_AUTH_CLIENT_ID}>
              <button className="btn white">
                <AppleLogo />
                &nbsp; Sign in with Apple
              </button>
            </LoginSocialApple>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
