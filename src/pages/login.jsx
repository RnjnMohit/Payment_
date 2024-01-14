import React from "react";

export const Frame = () => {
  return (
    <div className="frame">
      <div className="div">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper">LOG IN TO CPAY</div>
          <p className="don-t-have-an">
            <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Don’t have an account? </span>
            <span className="text-wrapper-2">Register</span>
          </p>
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="text-wrapper-3">Personal</div>
          <div className="text-wrapper-4">Business</div>
          <div className="rectangle-4" />
          <div className="text-wrapper-5">Email</div>
          <div className="rectangle-5" />
          <div className="text-wrapper-6">Password</div>
          <div className="text-wrapper-7">Or continue with</div>
          <img className="line" alt="Line" src="line-1.svg" />
          <img className="img" alt="Line" src="line-2.svg" />
          <img className="rectangle-6" alt="Rectangle" src="rectangle-6.png" />
          <div className="text-wrapper-8">LOG IN</div>
          <img className="image" alt="Image" src="image-2.png" />
          <img className="image-2" alt="Image" src="image-3.png" />
          <p className="forgot-your-password">
            <span className="text-wrapper-9">
              <br />
            </span>
            <a
              href="https://pixner.net/paylio/paylio-v2/forgot-password-2.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="text-wrapper-10">Forgot your password?</span>
            </a>
          </p>
        </div>
        <div className="overlap">
          <div className="text-wrapper-11">Back To Cpay</div>
          <div className="text-wrapper-12">🡠</div>
        </div>
        <img className="image-3" alt="Image" src="image-4.png" />
      </div>
    </div>
  );
};
