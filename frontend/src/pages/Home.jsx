import "../styles/home.css";

function Home() {
  return (
    <main className="Home">
      {/* hero section */}
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Welcome to Our Restaurant</p>

          <h1>
            Delicious Food,
            <br />
            Made With Love
          </h1>

          <p className="hero-description">
            Enjoy fresh and delicious food prepared with quality ingredients and
            served with care.
          </p>

          <button className="hero-button">View Menu</button>
        </div>

        <div className="hero-image">
          <div className="hero-image-placeholder">Food Image</div>
        </div>
      </section>

      {/* About Section */}
      {/* About Section */}
      <section className="about">
        <div className="about-content">
          <p className="section-subtitle">About Us</p>

          <h2>Good Food. Good Moments.</h2>

          <p className="about-description">
            We prepare delicious meals using fresh ingredients and traditional
            flavors. Our goal is to make every meal enjoyable for our customers.
          </p>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>Fresh Food</h3>

            <p>We use fresh ingredients to prepare every meal.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>Quality Ingredients</h3>

            <p>We carefully select quality ingredients for our food.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✓</div>

            <h3>Great Taste</h3>

            <p>Delicious flavors made to give you a memorable meal.</p>
          </div>
        </div>
      </section>

      {/* Categories Section */}

      <section className="categories">
        <p className="section-subtitle">Explore</p>

        <h2>Food Categories</h2>

        <div className="category-container">
          <div className="category-card">
            <div className="category-image">Food Image</div>
            <h3>Snacks</h3>
            <p>Delicious pizzas made with fresh ingredients.</p>
          </div>

          <div className="category-card">
            <div className="category-image">Food Image</div>
            <h3>North Indian Food</h3>
            <p>Delicious North India Foods.</p>
          </div>

          <div className="category-card">
            <div className="category-image">Food Image</div>
            <h3>South Indian Food</h3>
            <p>Delicious South India Food</p>
          </div>

          <div className="category-card">
            <div className="category-image">Food Image</div>
            <h3>Desserts & Drinks</h3>
            <p>Delicious Desserts & Drinks </p>
          </div>
        </div>
      </section>



      {/* Popular Food Section */}
      <section className="popular-food">
        <p className="section-subtitle">Our Menu</p>

        <h2>Popular Food</h2>

        <div className="food-container">
          <div className="food-card">
            <div className="food-image">Food Image</div>

            <h3>Chicken Biryani</h3>

            <p>Delicious chicken biryani with aromatic spices.</p>

            <span>₹249</span>

            <button>View Food</button>
          </div>

          <div className="food-card">
            <div className="food-image">Food Image</div>

            <h3>Chicken Burger</h3>

            <p>Juicy chicken burger with fresh vegetables.</p>

            <span>₹199</span>

            <button>View Food</button>
          </div>

          <div className="food-card">
            <div className="food-image">Food Image</div>

            <h3>Margherita Pizza</h3>

            <p>Fresh pizza topped with cheese and tomato.</p>

            <span>₹299</span>

            <button>View Food</button>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="cta">
        <p className="section-subtitle">Hungry?</p>
        <h2>Ready to Order?</h2>
        <p>Explore our menu and find something delicious.</p>
        <button>Explore Menu</button>
      </section>
    </main>
  );
}

export default Home;
