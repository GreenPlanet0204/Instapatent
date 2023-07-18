import React from "react";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";

const Reset = () => {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/");
  };
  return (
    <Layout>
      <div className="auth-form">
        <form id="reset">
          <div className="title">Reset Password</div>
          <div className="form">
            <div className="form-group">
              <input type="password" placeholder="Password" />
            </div>
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm (Password must be match)"
              />
            </div>
            <button className="btn blue" onClick={Submit}>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Reset;
