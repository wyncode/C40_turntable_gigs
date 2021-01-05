import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="footer-column-1">
          <p>About us</p>
        </div>
        <div className="footer-column-2">
          <p>Contact us</p>
          <p>Email</p>
        </div>
        <div className="footer-column-3">
          <p>Follow</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="footer-column-4">
          <form className="footer-form">
            <p className="subscribe-footer">Subscribe to our newsletter</p>
            <input
              className="footer-input"
              type="email"
              name="name"
              placeholder="Enter your email"
            />
            <input className="footer-submit" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
