import React from "react";
import Layout from "../../components/Layout";
import { Link, useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";

const Verification = () => {
  const navigate = useNavigate();
  const Submit = () => {
    navigate("/reset");
  };
  return (
    <Layout>
      <div className="auth-form">
        <form id="verification">
          <div className="title">Verification Code</div>
          <div className="form">
            <div className="link-group">
              <Link to="#">Resend Code</Link>
            </div>
            <div className="code-group">
              <VerificationInput placeholder=" " />
            </div>
            <button className="btn blue" onClick={Submit}>
              Continue
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Verification;
