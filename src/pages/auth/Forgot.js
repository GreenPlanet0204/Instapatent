import React from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";

const Forgot = () => {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/verification");
  };
  return (
    <Layout>
      <div className="auth-form">
        <form id="forgot">
          <div className="title">Forgot Password</div>
          <div className="form">
            <div className="link-group">
              <Link to="/signup">I don't have an acccount</Link>
            </div>

            <div className="form-group">
              <input type="email" placeholder="name@example.com" />
            </div>
            <button className="btn blue" onClick={() => Submit()}>
              Continue with Email
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Forgot;
