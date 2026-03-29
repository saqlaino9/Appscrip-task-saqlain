import {
  FaInstagram,
  FaLinkedin,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaApplePay,
  FaGooglePay,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP */}
      <div className="footer-top">
        <div className="newsletter">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from our latest offers</p>

          <div className="subscribe">
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@email.com</p>

          <h4>CURRENCY</h4>
          <p>USD</p>
        </div>
      </div>

      {/* LINKS */}
      <div className="footer-links">
        <div>
          <h4>mettà muse</h4>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
        </div>

        <div>
          <h4>QUICK LINKS</h4>
          <p>Orders & Shipping</p>
          <p>Join/Login</p>
          <p>Return & Refund</p>
          <p>FAQs</p>
        </div>

        <div>
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* PAYMENT */}
      <div className="payments">
        <p>mettà muse ACCEPTS</p>
        <div className="payment-icons">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaApplePay />
          <FaGooglePay />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 Saqlain Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;