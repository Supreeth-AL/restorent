import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Restaurant Logo */}
        <div className="navbar-logo">Restaurant</div>

        {/* Navigation Links */}
        <nav className="navbar-links">
          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/cart">Cart</a>
        </nav>

        {/* Cart */}
        <div className="navbar-cart">
          <span>🛒</span>
          <span>0</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
