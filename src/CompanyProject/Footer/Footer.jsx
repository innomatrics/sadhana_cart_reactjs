import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
const Footer = ({ setSelectedContent }) => {
  return (
    <div className="Footer">
      <div className="footer-section">
        <h3>ABOUT</h3>
        <ul>
          <Link to='/contactpage'><li className="custom-link">Contact Us</li></Link>
          <Link to='/about'><li  className="custom-link">About Us</li></Link>
        </ul>
      </div>

      <div className="footer-section">
        <h3>HELP</h3>
        <ul>
          <Link to='/payment'><li  className="custom-link">Payments</li></Link>
          <Link to='/shipping'><li  className="custom-link">Shipping</li></Link>
          <Link to='/cancelreturn'><li  className="custom-link">Cancellation & Returns</li></Link>
          <Link to='/faqs'><li  className="custom-link">FAQs</li></Link>
          
         
        </ul>
      </div>

      <div className="footer-section">
        <h3>Consumer Policy</h3>
        <ul>
          <Link to='/termsofuse'><li className="custom-link">Terms of Use</li></Link>
          <Link to='/privacy'><li className="custom-link">Privacy</li></Link>
        </ul>
      </div>

      <div className="footer-section">
        <h3>ADDRESS</h3>
        <ul>
          <li className='address'>
            Floor No.: GROUND FLOOR <br />
            SRI MUKUNDA SRI GANESH RESIDENCY <br />
            Flat No.3, M.NO.1-11-400 <br />
            RAICHUR, KARNATAKA, 584101 <br /><br />
            <a href="https://maps.app.goo.gl/2gsE41FqSsf4jBAR7" target="_blank" rel="noreferrer">Click here to view map</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
