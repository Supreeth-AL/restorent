import "../styles/menu.css";

function Menu() {
  return (
    <main className="menu">
      {/* Menu Header */}
      <section className="menu-header">
        <p className="section-subtitle">Our Menu</p>

        <h1>Explore Our Food</h1>

        <p>Choose from our delicious selection of food and drinks.</p>
      </section>

      {/* Food Categories */}
      <section className="menu-categories">
        <button className="category-filter active">All</button>

        <button className="category-filter">Snacks</button>

        <button className="category-filter">North Indian Food</button>

        <button className="category-filter">South Indian Food</button>

        <button className="category-filter">Desserts & Drinks</button>
      </section>

      {/* Food Items */}
      <section className="menu-food">
        <div className="menu-food-container">
          <div className="food-card">
            <div className="food-image">Food Image</div>

            <h3>Samosa</h3>

            <p>Crispy samosa filled with spiced potatoes.</p>

            <span>₹40</span>

            <button>View Food</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Menu;
