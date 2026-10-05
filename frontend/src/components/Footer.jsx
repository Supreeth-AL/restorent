import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">
          <h2>Restaurant</h2>

          <p>
            Delicious food made with fresh ingredients
            and served with care.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>Phone: +91 98765 43210</p>
          <p>Email: restaurant@example.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Restaurant. All rights reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;