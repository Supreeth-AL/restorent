const foodData = [
  // ========================================
  // SNACKS - 10 ITEMS
  // ========================================

  {
    id: 1,
    name: "Samosa",
    category: "Snacks",
    description: "Crispy samosa filled with spiced potatoes.",
    price: 40,
    image: "/images/samosa.jpg",
  },

  {
    id: 2,
    name: "Paneer Pakora",
    category: "Snacks",
    description: "Crispy paneer pakora with flavorful spices.",
    price: 100,
    image: "/images/paneer-pakora.jpg",
  },

  {
    id: 3,
    name: "Onion Pakora",
    category: "Snacks",
    description: "Crispy onion pakora prepared with Indian spices.",
    price: 80,
    image: "/images/onion-pakora.jpg",
  },

  {
    id: 4,
    name: "Aloo Tikki",
    category: "Snacks",
    description: "Crispy potato tikki served with delicious chutney.",
    price: 80,
    image: "/images/aloo-tikki.jpg",
  },

  {
    id: 5,
    name: "Masala Vada",
    category: "Snacks",
    description: "Crispy South Indian masala vada.",
    price: 70,
    image: "/images/masala-vada.jpg",
  },

  {
    id: 6,
    name: "French Fries",
    category: "Snacks",
    description: "Crispy golden French fries.",
    price: 120,
    image: "/images/french-fries.jpg",
  },

  {
    id: 7,
    name: "Veg Spring Roll",
    category: "Snacks",
    description: "Crispy spring rolls filled with fresh vegetables.",
    price: 120,
    image: "/images/veg-spring-roll.jpg",
  },

  {
    id: 8,
    name: "Chicken Roll",
    category: "Snacks",
    description: "Soft roll filled with spicy chicken and vegetables.",
    price: 150,
    image: "/images/chicken-roll.jpg",
  },

  {
    id: 9,
    name: "Paneer Roll",
    category: "Snacks",
    description: "Delicious paneer roll with fresh vegetables.",
    price: 140,
    image: "/images/paneer-roll.jpg",
  },

  {
    id: 10,
    name: "Gobi Manchurian",
    category: "Snacks",
    description: "Crispy cauliflower tossed in Manchurian sauce.",
    price: 130,
    image: "/images/gobi-manchurian.jpg",
  },

  // ========================================
  // NORTH INDIAN FOOD - 10 ITEMS
  // ========================================

  {
    id: 11,
    name: "Butter Chicken",
    category: "North Indian Food",
    description: "Tender chicken cooked in rich buttery tomato gravy.",
    price: 280,
    image: "/images/butter-chicken.jpg",
  },

  {
    id: 12,
    name: "Chicken Tikka Masala",
    category: "North Indian Food",
    description: "Grilled chicken tikka cooked in creamy masala gravy.",
    price: 290,
    image: "/images/chicken-tikka-masala.jpg",
  },

  {
    id: 13,
    name: "Kadai Chicken",
    category: "North Indian Food",
    description: "Chicken cooked with peppers and aromatic spices.",
    price: 270,
    image: "/images/kadai-chicken.jpg",
  },

  {
    id: 14,
    name: "Paneer Butter Masala",
    category: "North Indian Food",
    description: "Soft paneer cooked in creamy tomato gravy.",
    price: 240,
    image: "/images/paneer-butter-masala.jpg",
  },

  {
    id: 15,
    name: "Kadai Paneer",
    category: "North Indian Food",
    description: "Paneer cooked with capsicum and kadai spices.",
    price: 230,
    image: "/images/kadai-paneer.jpg",
  },

  {
    id: 16,
    name: "Dal Makhani",
    category: "North Indian Food",
    description: "Creamy black lentils cooked with butter and spices.",
    price: 180,
    image: "/images/dal-makhani.jpg",
  },

  {
    id: 17,
    name: "Chole Bhature",
    category: "North Indian Food",
    description: "Spiced chickpeas served with fluffy bhature.",
    price: 180,
    image: "/images/chole-bhature.jpg",
  },

  {
    id: 18,
    name: "Rajma Chawal",
    category: "North Indian Food",
    description: "Rajma curry served with steamed rice.",
    price: 170,
    image: "/images/rajma-chawal.jpg",
  },

  {
    id: 19,
    name: "Aloo Paratha",
    category: "North Indian Food",
    description: "Stuffed potato paratha served with curd.",
    price: 120,
    image: "/images/aloo-paratha.jpg",
  },

  {
    id: 20,
    name: "Naan & Paneer Curry",
    category: "North Indian Food",
    description: "Soft naan served with flavorful paneer curry.",
    price: 220,
    image: "/images/naan-paneer-curry.jpg",
  },

  // ========================================
  // SOUTH INDIAN FOOD - 10 ITEMS
  // ========================================

  {
    id: 21,
    name: "Masala Dosa",
    category: "South Indian Food",
    description: "Crispy dosa filled with spiced potato masala.",
    price: 100,
    image: "/images/masala-dosa.jpg",
  },

  {
    id: 22,
    name: "Plain Dosa",
    category: "South Indian Food",
    description: "Crispy traditional South Indian dosa.",
    price: 80,
    image: "/images/plain-dosa.jpg",
  },

  {
    id: 23,
    name: "Idli Sambar",
    category: "South Indian Food",
    description: "Soft steamed idlis served with hot sambar.",
    price: 70,
    image: "/images/idli-sambar.jpg",
  },

  {
    id: 24,
    name: "Vada Sambar",
    category: "South Indian Food",
    description: "Crispy vada served with flavorful sambar.",
    price: 80,
    image: "/images/vada-sambar.jpg",
  },

  {
    id: 25,
    name: "Rava Dosa",
    category: "South Indian Food",
    description: "Thin and crispy dosa made with semolina.",
    price: 110,
    image: "/images/rava-dosa.jpg",
  },

  {
    id: 26,
    name: "Set Dosa",
    category: "South Indian Food",
    description: "Soft and fluffy set dosa served with chutney.",
    price: 100,
    image: "/images/set-dosa.jpg",
  },

  {
    id: 27,
    name: "Pongal",
    category: "South Indian Food",
    description: "Traditional South Indian rice and lentil dish.",
    price: 90,
    image: "/images/pongal.jpg",
  },

  {
    id: 28,
    name: "Bisibele Bath",
    category: "South Indian Food",
    description: "Flavorful rice and lentil dish with vegetables.",
    price: 100,
    image: "/images/bisibele-bath.jpg",
  },

  {
    id: 29,
    name: "Lemon Rice",
    category: "South Indian Food",
    description: "Tangy rice flavored with lemon and spices.",
    price: 80,
    image: "/images/lemon-rice.jpg",
  },

  {
    id: 30,
    name: "Curd Rice",
    category: "South Indian Food",
    description: "Refreshing rice mixed with creamy curd.",
    price: 70,
    image: "/images/curd-rice.jpg",
  },

  // ========================================
  // DESSERTS & DRINKS - 10 ITEMS
  // ========================================

  {
    id: 31,
    name: "Gulab Jamun",
    category: "Desserts & Drinks",
    description: "Soft milk dumplings soaked in sweet syrup.",
    price: 80,
    image: "/images/gulab-jamun.jpg",
  },

  {
    id: 32,
    name: "Rasmalai",
    category: "Desserts & Drinks",
    description: "Soft rasmalai served in sweet creamy milk.",
    price: 100,
    image: "/images/rasmalai.jpg",
  },

  {
    id: 33,
    name: "Gajar Ka Halwa",
    category: "Desserts & Drinks",
    description: "Traditional carrot dessert prepared with milk and nuts.",
    price: 100,
    image: "/images/gajar-ka-halwa.jpg",
  },

  {
    id: 34,
    name: "Ice Cream",
    category: "Desserts & Drinks",
    description: "Creamy and refreshing ice cream.",
    price: 90,
    image: "/images/ice-cream.jpg",
  },

  {
    id: 35,
    name: "Brownie",
    category: "Desserts & Drinks",
    description: "Soft and rich chocolate brownie.",
    price: 120,
    image: "/images/brownie.jpg",
  },

  {
    id: 36,
    name: "Chocolate Cake",
    category: "Desserts & Drinks",
    description: "Rich chocolate cake with a soft texture.",
    price: 140,
    image: "/images/chocolate-cake.jpg",
  },

  {
    id: 37,
    name: "Fresh Lime Soda",
    category: "Desserts & Drinks",
    description: "Refreshing lime soda served chilled.",
    price: 70,
    image: "/images/fresh-lime-soda.jpg",
  },

  {
    id: 38,
    name: "Cold Coffee",
    category: "Desserts & Drinks",
    description: "Chilled creamy coffee drink.",
    price: 120,
    image: "/images/cold-coffee.jpg",
  },

  {
    id: 39,
    name: "Mango Lassi",
    category: "Desserts & Drinks",
    description: "Creamy mango lassi made with fresh yogurt.",
    price: 100,
    image: "/images/mango-lassi.jpg",
  },

  {
    id: 40,
    name: "Fresh Fruit Juice",
    category: "Desserts & Drinks",
    description: "Freshly prepared fruit juice served chilled.",
    price: 100,
    image: "/images/fresh-fruit-juice.jpg",
  },
];

export default foodData;