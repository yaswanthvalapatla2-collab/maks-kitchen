/* =====================================================================
   Mak's Kitchen — centralized content & menu data
   Everything below is transcribed from the restaurant's own materials:
   the printed menu PDF (items, prices, descriptions) and the venue's
   real details. Edit here to personalise the entire site.
   ===================================================================== */

export const restaurant = {
  name: "Mak's Kitchen",
  nameTelugu: "మాక్స్ కిచెన్",
  tagline: "Multi-Cuisine Restaurant",
  hook: "Where Every Bite Tells a Story.",
  phone: "+91 90302 01028",
  phoneRaw: "9030201028",
  email: "makskitchen001@gmail.com",
  address: {
    line1: "10-3-76, 4th Floor, Above KFC,",
    line2: "Opp. Pillar No. 3, PVNR Expressway,",
    line3: "Mehdipatnam Road, Jyothi Nagar,",
    line4: "Humayun Nagar, Hyderabad, Telangana 500028",
  },
  hoursLabel: "Open Daily",
  hoursValue: "Until 12:00 AM",
  rating: "4.2",
  reviewCount: "3,171",
  lat: 17.3965676,
  lng: 78.4428772,
  mapsPlace: "https://www.google.com/maps/place/Maks+Kitchen/@17.3965676,78.4428772,17z",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=Mak%27s+Kitchen+Mehdipatnam+Hyderabad",
} as const;

export const about = {
  eyebrow: "Our Story",
  title: "A house built for the joy of the table",
  body: [
    "For years, Mak's Kitchen has been Mehdipatnam's address for authentic Hyderabadi flavour served with quiet luxury. Under warm chandeliers and hand-carved arches, every plate is prepared the way it should be — slow, generous and full of story.",
    "From our saffron-laced Zafrani Biryani to platters that arrive dressed for a celebration, we cook for families, for friends, and for anyone who believes a good meal deserves a beautiful room.",
  ],
  pillars: [
    "Authentic Hyderabadi Cuisine",
    "Separate Family Section",
    "Signature Zafrani Biryani",
    "Premium Ambience",
    "Warm, Attentive Service",
  ],
};

export const whyChoose = [
  {
    icon: "Leaf",
    title: "Fresh Ingredients",
    text: "Sourced daily and prepped in-house — nothing sits, nothing shortcuts.",
  },
  {
    icon: "ChefHat",
    title: "Authentic Recipes",
    text: "Time-honoured Hyderabadi masalas, dum cooking and pure ghee & saffron.",
  },
  {
    icon: "Sparkles",
    title: "Premium Ambience",
    text: "Chandeliers, carved arches and a calm, celebratory dining room.",
  },
  {
    icon: "Gem",
    title: "Affordable Luxury",
    text: "A fine-dining feeling without the fine-dining bill.",
  },
  {
    icon: "Timer",
    title: "Fast Service",
    text: "Kitchen and floor move together so your food arrives hot and on time.",
  },
  {
    icon: "Users",
    title: "Family Friendly",
    text: "A dedicated family section and take-away, built for gatherings big and small.",
  },
];

export type Dish = {
  name: string;
  price: string;
  desc: string;
  img: string;
  tag?: string;
};

export const signatureDishes: Dish[] = [
  {
    name: "Mutton Zafrani Biryani",
    price: "395",
    desc: "Fine basmati simmered with lamb in exotic spices, pure ghee & saffron.",
    img: "/images/dishes/zafrani-biryani.webp",
    tag: "House Favourite",
  },
  {
    name: "Thread Chicken (Dry)",
    price: "475",
    desc: "Crisp, feather-thin threaded chicken — our most photographed starter.",
    img: "/images/dishes/thread-chicken.webp",
    tag: "Signature",
  },
  {
    name: "Tandoori Mixed Grill",
    price: "3000",
    desc: "Assorted kebabs of mutton & chicken, served with fresh mint chutney.",
    img: "/images/dishes/tandoori-platter.webp",
    tag: "For the Table",
  },
  {
    name: "Apollo Fish (Dry)",
    price: "545",
    desc: "Marrel fish, twice-fried and tossed with curry leaf & chilli.",
    img: "/images/dishes/apollo-fish.webp",
  },
  {
    name: "Chicken Manchow Soup",
    price: "130",
    desc: "A thick soya-based broth with diced vegetables, topped with fried noodles.",
    img: "/images/dishes/chicken-soup.webp",
  },
  {
    name: "Dum Ka Mutton",
    price: "545",
    desc: "Boneless lamb slow-cooked on dum in a deep, spiced gravy.",
    img: "/images/dishes/mutton-curry.webp",
  },
  {
    name: "Kashmiri Rabdi",
    price: "180",
    desc: "Slow-reduced milk finished with nuts — a cool, classic close to the meal.",
    img: "/images/dishes/kashmiri-rabdi.webp",
    tag: "Dessert",
  },
  {
    name: "Grand Feast Platter",
    price: "3000",
    desc: "A celebration on one plate — kebabs, tikka & seafood, dressed to impress.",
    img: "/images/dishes/kebab-platter.webp",
  },
];

/* ---------------- Full digital menu (from the printed menu) ------------ */

export type MenuItem = {
  name: string;
  price: string;
  desc?: string;
  veg?: boolean;
  spicy?: boolean;
  star?: boolean;
};

export type MenuCategory = {
  id: string;
  title: string;
  sub: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "soups",
    title: "Soups",
    sub: "Starters",
    items: [
      { name: "Chicken Clear Soup", price: "130", desc: "Thin slices of chicken cooked in stock." },
      { name: "Chicken Corn Soup", price: "130", desc: "A thick soup made with smashed corn & chicken." },
      { name: "Chicken Hot & Sour Soup", price: "130", desc: "Shredded chicken & vegetables in soya, chilly & vinegar.", spicy: true },
      { name: "Chicken Canton Soup", price: "130", desc: "Minced chicken with diced vegetables, cantonese style." },
      { name: "Manchow Soup", price: "130", desc: "Soya-based broth with vegetables, topped with fried noodles.", star: true },
      { name: "Vegetable Clear Soup", price: "145", veg: true },
      { name: "Vegetable Hot & Sour Soup", price: "145", veg: true, spicy: true },
      { name: "Vegetable Corn Soup", price: "145", veg: true },
      { name: "Tomato Soup", price: "145", veg: true },
      { name: "Vegetable Manchow Soup", price: "145", veg: true },
    ],
  },
  {
    id: "starters",
    title: "Rolls & Snacks",
    sub: "Starters",
    items: [
      { name: "Chicken Spring Roll", price: "240", desc: "Crispy spring rolls stuffed with chicken & vegetables.", star: true },
      { name: "Mixed Spring Rolls", price: "240", desc: "Crispy rolls stuffed with chicken & vegetables." },
      { name: "Chicken Shanghai Rolls", price: "240", desc: "Minced chicken & vegetables wrapped and deep fried crisp." },
      { name: "Chicken Kheema Rolls", price: "240", desc: "Minced chicken with diced vegetables, cantonese style." },
      { name: "Vegetable Spring Rolls", price: "240", veg: true },
      { name: "Crisp Vegetable", price: "285", veg: true },
    ],
  },
  {
    id: "chinese",
    title: "Noodles & Chopsuey",
    sub: "Chinese",
    items: [
      { name: "Chicken Soft Noodles", price: "280", desc: "Soft noodles sautéed with shredded vegetables & chicken." },
      { name: "Chicken Chilly Garlic Noodles", price: "280", desc: "Sautéed with garlic & green chillies.", spicy: true },
      { name: "Chicken Singapore Noodles", price: "280", desc: "Soft noodles in a spicy sauce with vegetables & chicken." },
      { name: "Chicken Crispy Noodles", price: "280", desc: "Golden-fried noodles in a mild sauce with chicken." },
      { name: "Mixed Soft Noodles", price: "290", desc: "With shredded vegetables, chicken & sea food." },
      { name: "Chicken Schezwan Soft Noodles", price: "280", spicy: true },
      { name: "Mixed Crispy Noodles", price: "320", desc: "Golden-fried with vegetables, chicken & sea food." },
      { name: "Chicken Schezwan Crispy Noodles", price: "320", spicy: true },
      { name: "Mix Crispy Schezwan Noodles", price: "320", spicy: true },
      { name: "Chicken Chinese Chopsuey", price: "320", desc: "Golden-fried noodles, garlic sauce, vegetables & chicken." },
      { name: "Mixed Chinese Chopsuey", price: "320", desc: "Garlic sauce, vegetables, chicken & sea food." },
      { name: "Chicken American Chopsuey", price: "320", desc: "Golden noodles in chicken sweet & sour sauce." },
      { name: "Mixed American Chopsuey", price: "330", desc: "Chicken, sea food, sweet & sour sauce." },
      { name: "Egg Soft Noodles", price: "250" },
      { name: "Egg Shezwan Soft Noodles", price: "260", spicy: true },
      { name: "Vegetable Soft Noodles", price: "275", veg: true },
      { name: "Vegetable Chilli Garlic Noodles", price: "250", veg: true, spicy: true },
      { name: "Vegetable Singapore Noodles", price: "250", veg: true },
      { name: "Vegetable Crispy Noodles", price: "275", veg: true },
      { name: "Vegetable Chinese Chopsuey", price: "285", veg: true },
      { name: "Vegetable American Chopsuey", price: "285", veg: true },
      { name: "Vegetable Shezwan Soft Noodles", price: "265", veg: true, spicy: true },
      { name: "Vegetables Hakra Soft Noodles", price: "265", veg: true },
    ],
  },
  {
    id: "chicken",
    title: "Chicken",
    sub: "Kadai Ka Nazrana",
    items: [
      { name: "Thread Chicken (Dry)", price: "475", desc: "Crisp feather-thin threaded chicken.", star: true },
      { name: "Tawa Chicken", price: "485" },
      { name: "Haramasala Chicken (Dry)", price: "485" },
      { name: "Ginger Chicken (Dry/Wet)", price: "445", desc: "Minced chicken balls cooked in ginger sauce." },
      { name: "Chilli Chicken (Dry/Wet)", price: "445", desc: "Crispy chicken in lemon & hot garlic sauce.", spicy: true },
      { name: "Chilly Loose Chicken (Dry)", price: "445", spicy: true },
      { name: "Goan Chicken (Dry)", price: "445" },
      { name: "Sweet & Sour Chicken (Dry/Wet)", price: "445", desc: "Winglets in black pepper & soya sauce." },
      { name: "Chicken Hot Garlic (Dry/Wet)", price: "445", desc: "Seasoned with a strong garlic sauce.", spicy: true },
      { name: "Chicken Manchurian (Dry/Wet)", price: "445", desc: "Tossed in chilly garlic sauce & spring onions." },
      { name: "Red Hot Chilly Chicken (Dry)", price: "445", spicy: true },
      { name: "Pepper Chicken (Dry)", price: "445" },
      { name: "Schezwan Chicken (Dry/Wet)", price: "445", desc: "Tossed in spices, cooked in a kadai.", spicy: true },
      { name: "Yoga Chicken (Dry)", price: "445", desc: "Corn-flour coated, curd-flavoured gravy." },
      { name: "Chilly Chicken Pakoda (Dry)", price: "445", desc: "Chicken balls fried, served with hot garlic sauce.", spicy: true },
      { name: "Chicken Lollypop (Dry)", price: "445", desc: "Winglets coated in corn flour & spices, deep fried.", star: true },
      { name: "Soya Chicken (Dry)", price: "445" },
      { name: "Chicken Majestic (Dry)", price: "445", star: true },
      { name: "Stick Chicken", price: "445" },
      { name: "Chicken 99", price: "445" },
      { name: "Butter Garlic Chicken (Dry)", price: "445" },
      { name: "Butter Chicken", price: "475", desc: "Boneless chicken in creamy tomato gravy & butter.", star: true },
      { name: "Murgh Kandhari", price: "475", desc: "Chicken with dried pomegranate, herbs & spices." },
      { name: "Punjabi Chicken", price: "475" },
      { name: "Kadai Chicken", price: "475", desc: "Chicken with fresh herbs & spices, cooked in a kadai." },
      { name: "Hyderabadi Chicken", price: "475" },
      { name: "Dum Ka Chicken", price: "475" },
      { name: "Chicken 65 (Dry)", price: "475", star: true },
      { name: "Chicken Tikka Masala", price: "475" },
      { name: "Chicken Chatpat", price: "475" },
      { name: "Achari Chicken", price: "475" },
      { name: "Methi Chicken", price: "475", desc: "Cooked with fresh methi & aromatic herbs." },
      { name: "Chicken Kali Mirchi (Dry)", price: "475" },
      { name: "Chicken Kheema Fry", price: "475", desc: "Minced chicken with Indian exotic herbs & spices." },
    ],
  },
  {
    id: "tandoori",
    title: "Tandoori & Kebabs",
    sub: "Angaar Ke Tohfe",
    items: [
      { name: "Tandoori Chicken", price: "580 / 300", desc: "Marinated in exotic Indian spices, mint chutney. (Full / Half)", star: true },
      { name: "Tangdi Kebab (Dry)", price: "580 / 300", desc: "Chicken legs in exotic spices, mint chutney. (Full / Half)" },
      { name: "Chicken Tikka", price: "475", desc: "Cubes marinated in Indian spices, mint chutney." },
      { name: "Haryali Kebab", price: "475", desc: "Cubes with Indian spices & spinach." },
      { name: "Garlic Kebab", price: "475", desc: "Cubes with Indian spices & garlic." },
      { name: "Reshmi Kebab", price: "475", desc: "Mildly spiced chicken in a cheesy cream." },
      { name: "Murgh Malai Kebab", price: "475", desc: "Cubes marinated in cheesy cream." },
      { name: "Kandhari Kebab", price: "475", desc: "Spices, herbs & green chillies, mint chutney." },
      { name: "Boti Kebab", price: "595", desc: "Mutton kebab." },
      { name: "Sheekh Kebab", price: "595", desc: "Mutton kebab." },
      { name: "Pathar Ka Ghosht", price: "595", desc: "Mutton on the stone." },
    ],
  },
  {
    id: "mutton",
    title: "Mutton",
    sub: "Delicacies",
    items: [
      { name: "Rogan Ghosht", price: "545", desc: "Tender lamb with exotic herbs, saffron & yogurt.", star: true },
      { name: "Dum Ka Mutton", price: "545", star: true },
      { name: "Methi Mutton", price: "545", desc: "Boneless mutton with fresh methi & aromatic herbs." },
      { name: "Mutton Kandhari", price: "545", desc: "Boneless mutton with dried pomegranate & herbs." },
      { name: "Mutton Masala", price: "545", desc: "Boneless mutton in a spicy gravy.", spicy: true },
      { name: "Mutton Chatpat", price: "545" },
      { name: "Achari Mutton", price: "545" },
      { name: "Mutton Kali Mirchi (Dry)", price: "600", desc: "Lamb simmered with spices, black pepper & soya." },
      { name: "Pepper Mutton (Dry)", price: "600" },
      { name: "Mutton Fry", price: "600" },
      { name: "Talahua Ghosht", price: "600" },
    ],
  },
  {
    id: "seafood",
    title: "Fish & Prawns",
    sub: "Dariya Ke Daaman Se",
    items: [
      { name: "Apollo Fish (Dry)", price: "545", star: true },
      { name: "Patrani Fish (Dry)", price: "575" },
      { name: "Fish 99", price: "575" },
      { name: "Malai Fish (Dry)", price: "575" },
      { name: "Fish Tikka (Dry)", price: "575" },
      { name: "Kandhari Fish (Dry)", price: "545" },
      { name: "Goan Fish (Dry)", price: "545" },
      { name: "Red Hot Chilly Fish (Dry)", price: "545", spicy: true },
      { name: "Fish Hara Masala (Dry)", price: "545" },
      { name: "Pepper Fish (Dry)", price: "545", desc: "Deep fried, sautéed with black pepper & soya." },
      { name: "Fried Fish (Dry)", price: "545", desc: "Boneless fish, bread-coated & deep fried." },
      { name: "Ginger Fish (Dry/Wet)", price: "545", desc: "In our traditional ginger sauce." },
      { name: "Schezwan Fish (Dry/Wet)", price: "545", desc: "Chilly, garlic & spring onion in schezwan sauce.", spicy: true },
      { name: "Fish Masala Fry (Curry)", price: "545" },
      { name: "Chilly Loose Prawns (Dry)", price: "545", spicy: true },
      { name: "Red Hot Chilly Prawns (Dry)", price: "545", spicy: true },
      { name: "Hara Masala Prawns (Dry)", price: "545" },
      { name: "Goan Prawns (Dry)", price: "545" },
      { name: "Pepper Prawns (Dry)", price: "545" },
      { name: "Prawn Pakoda", price: "545", desc: "Minced prawn balls fried, hot garlic sauce." },
      { name: "Ginger Prawns (Dry/Wet)", price: "545", desc: "Prawns sautéed with exotic herbs & spices." },
      { name: "Schezwan Prawns (Dry/Wet)", price: "545", spicy: true },
      { name: "Golden Fried Prawns", price: "545" },
      { name: "Butter Garlic Prawns", price: "545" },
      { name: "Malai Prawns (Dry)", price: "575" },
      { name: "Prawns Tikka", price: "575" },
    ],
  },
  {
    id: "platters",
    title: "Grand Platters",
    sub: "For the Table",
    items: [
      { name: "Tandoori Platter", price: "3000", desc: "Assorted kebabs of mutton & chicken, mint chutney.", star: true },
      { name: "Seafood Platter", price: "3000", desc: "Any two fish & two prawns of your choice.", star: true },
    ],
  },
  {
    id: "biryani",
    title: "Biryani & Rice",
    sub: "Basmati Khazana",
    items: [
      { name: "Mutton Zafrani Biryani (Boneless)", price: "395", desc: "Basmati with lamb, exotic spices, ghee & saffron.", star: true },
      { name: "Chicken Zafrani Biryani", price: "350", desc: "Basmati with chicken, exotic spices, ghee & saffron.", star: true },
      { name: "Mak's Special Rice (Chicken/Veg/Mix)", price: "265", desc: "Half ginger-gravy rice with half fried rice." },
      { name: "Mixed Fried Rice", price: "275", desc: "With prawns, fish, chicken & vegetables." },
      { name: "Chicken Fried Rice", price: "265" },
      { name: "Chicken Schezwan Fried Rice", price: "265", spicy: true },
      { name: "Mixed Schezwan Fried Rice", price: "265", spicy: true },
      { name: "Fish Fried Rice", price: "285" },
      { name: "Prawns Fried Rice", price: "285" },
      { name: "Egg Fried Rice", price: "265" },
      { name: "Vegetable Fried Rice", price: "240", veg: true },
      { name: "Zeera Rice", price: "260", veg: true },
      { name: "Kaju Rice", price: "250", veg: true },
      { name: "Ghee Rice", price: "250", veg: true },
      { name: "Plain Rice", price: "180", veg: true },
    ],
  },
  {
    id: "breads",
    title: "Breads",
    sub: "Roti Ki Farmaish",
    items: [
      { name: "Tandoori Roti", price: "35", veg: true },
      { name: "Rumali Roti", price: "35", veg: true },
      { name: "Plain Naan", price: "40", veg: true },
      { name: "Tandoori Butter Roti", price: "40", veg: true },
      { name: "Laccha Parotha", price: "50", veg: true },
      { name: "Pudina Parotha", price: "50", veg: true },
      { name: "Butter Naan", price: "50", veg: true },
      { name: "Garlic Naan", price: "50", veg: true },
      { name: "Roghni Naan", price: "80", veg: true },
    ],
  },
  {
    id: "paneer",
    title: "Paneer",
    sub: "Paneer Ka Khazana",
    items: [
      { name: "Paneer Butter Masala", price: "425", veg: true, star: true },
      { name: "Palak Paneer", price: "425", veg: true },
      { name: "Shahi Paneer", price: "425", veg: true },
      { name: "Kadai Paneer", price: "425", veg: true },
      { name: "Paneer 65", price: "425", veg: true },
      { name: "Paneer Chatpat", price: "425", veg: true },
      { name: "Chilly Paneer (Dry/Wet)", price: "425", veg: true, spicy: true },
      { name: "Pepper Paneer", price: "425", veg: true },
      { name: "Paneer 99", price: "425", veg: true },
      { name: "Haramasala Paneer", price: "425", veg: true },
      { name: "Goan Paneer", price: "425", veg: true },
      { name: "Red Hot Chilly Paneer", price: "425", veg: true, spicy: true },
      { name: "Ginger Paneer (Dry/Wet)", price: "425", veg: true },
      { name: "Schezwan Paneer (Dry/Wet)", price: "425", veg: true, spicy: true },
      { name: "Paneer Machuria (Dry/Wet)", price: "425", veg: true },
      { name: "Methi Paneer", price: "425", veg: true },
      { name: "Paneer Kandhari", price: "425", veg: true },
    ],
  },
  {
    id: "veg",
    title: "Vegetarian",
    sub: "Delicacies & Baby Corn",
    items: [
      { name: "Dal Makhani", price: "300", veg: true, star: true },
      { name: "Dal Fry", price: "250", veg: true },
      { name: "Malai Kofta", price: "345", veg: true },
      { name: "Vegetable Kofta Curry", price: "345", veg: true },
      { name: "Vegetable 65", price: "345", veg: true },
      { name: "Aloo Mutter", price: "345", veg: true },
      { name: "Kadai Vegetable", price: "345", veg: true },
      { name: "Mix Vegetable Curry", price: "345", veg: true },
      { name: "Vegetable Kandhari", price: "345", veg: true },
      { name: "Vegetable Chatpat", price: "345", veg: true },
      { name: "Methi Vegetable", price: "345", veg: true },
      { name: "Achari Vegetable", price: "345", veg: true },
      { name: "Vegetable Machuria (Dry/Wet)", price: "345", veg: true },
      { name: "Ginger Vegetable (Dry/Wet)", price: "345", veg: true },
      { name: "Vegetable Chow-Chow", price: "290", veg: true },
      { name: "Paneer Baby Corn", price: "290", veg: true },
      { name: "Baby Corn 99", price: "280", veg: true },
      { name: "Haramasala Baby Corn", price: "280", veg: true },
      { name: "Goan Baby Corn", price: "280", veg: true },
      { name: "Red Hot Chilly Baby Corn", price: "280", veg: true, spicy: true },
      { name: "Ginger Baby Corn", price: "280", veg: true },
      { name: "Schezwan Baby Corn", price: "280", veg: true, spicy: true },
      { name: "Baby Corn Machuria", price: "280", veg: true },
      { name: "Pepper Mushroom", price: "290", veg: true },
      { name: "Mushroom 99", price: "290", veg: true },
      { name: "Haramasala Mushroom", price: "290", veg: true },
      { name: "Goan Mushroom", price: "290", veg: true },
      { name: "Red Hot Chilly Mushroom", price: "290", veg: true, spicy: true },
      { name: "Ginger Mushroom", price: "290", veg: true },
      { name: "Schezwan Mushroom", price: "290", veg: true, spicy: true },
      { name: "Mushroom Machuria", price: "290", veg: true },
    ],
  },
  {
    id: "salads",
    title: "Salads & Raita",
    sub: "On the Side",
    items: [
      { name: "Russian Salad", price: "200", veg: true },
      { name: "Maxican Green Salad", price: "100", veg: true },
      { name: "Mix Raita", price: "80", veg: true },
      { name: "Green Salad", price: "70", veg: true },
      { name: "Cucumber Salad", price: "70", veg: true },
      { name: "Curd", price: "70", veg: true },
      { name: "Onion Salad", price: "60", veg: true },
    ],
  },
  {
    id: "desserts",
    title: "Desserts & Drinks",
    sub: "The Sweet End",
    items: [
      { name: "Badam Ka Halwa", price: "225", veg: true, star: true },
      { name: "Turkish Milk Cake", price: "195", veg: true },
      { name: "Apricot Delight", price: "180", veg: true, star: true },
      { name: "Kashmiri Rabdi", price: "180", veg: true },
      { name: "Cream Fruit", price: "180", veg: true },
      { name: "Trifle Pudding", price: "180", veg: true },
      { name: "Double Ka Meetha", price: "160", veg: true },
      { name: "Qurbani Ka Meetha", price: "160", veg: true },
      { name: "Cold Drinks", price: "MRP", veg: true },
      { name: "Mineral Water", price: "MRP", veg: true },
    ],
  },
];

export const menuItemCount = menu.reduce((n, c) => n + c.items.length, 0);

/* ---------------- Gallery ------------- */
export const gallery = [
  { src: "/images/dishes/mixed-grill.webp", label: "Signature mixed grill", span: "wide" },
  { src: "/images/interior/alcove.webp", label: "Carved alcove seating" },
  { src: "/images/gallery/platter-3.webp", label: "Dressed celebration platter", span: "tall" },
  { src: "/images/dishes/tandoori-platter.webp", label: "Tandoori close-up" },
  { src: "/images/interior/green-arches.webp", label: "Arched dining nook" },
  { src: "/images/gallery/platter-1.webp", label: "Kebab platter with dips", span: "wide" },
  { src: "/images/dishes/thread-chicken.webp", label: "Thread chicken", span: "tall" },
  { src: "/images/interior/warm-hall.webp", label: "The main hall" },
  { src: "/images/gallery/platter-2.webp", label: "Rolls, tandoori & mint" },
  { src: "/images/dishes/naan.webp", label: "Fresh from the tandoor" },
  { src: "/images/interior/partitions.webp", label: "Laser-cut partitions" },
  { src: "/images/gallery/kebab-close.webp", label: "Kebab, up close", span: "tall" },
];

/* ---------------- Experience (interior) ------------- */
export const experience = {
  eyebrow: "The Room",
  title: "Dinner, framed by arches and gold",
  body: "Carved mihrab arches, globe chandeliers and a separate family section — Mak's Kitchen was designed so the room feels as considered as the food. Book a booth by the window or gather the whole family in the main hall.",
  images: [
    "/images/interior/booth-arches.webp",
    "/images/interior/private-dining.webp",
    "/images/interior/hall-arches.webp",
    "/images/interior/ceiling-hall.webp",
  ],
};

/* ---------------- Stats ------------- */
export const stats = [
  { value: 3171, suffix: "+", label: "Happy Guests" },
  { value: 4.2, suffix: "★", label: "Google Rating", decimals: 1 },
  { value: menuItemCount, suffix: "+", label: "Dishes on the Menu" },
  { value: 12, suffix: "AM", label: "Open Till Midnight", raw: true },
];

/* ---------------- Reviews (illustrative demo excerpts) -----------------
   Numbers (4.2 / 3,171) reflect the venue's real Google rating.
   Excerpt text below is representative demo copy for the pitch, not
   verbatim Google reviews — swap in live reviews before launch.        */
export const reviews = [
  {
    name: "Afreen S.",
    text: "The Zafrani biryani is the real deal — saffron, ghee, tender mutton. Ambience is gorgeous for a family dinner.",
    stars: 5,
  },
  {
    name: "Rahul K.",
    text: "Thread chicken and the tandoori platter were the stars. Portions are huge and plating is genuinely restaurant-grade.",
    stars: 5,
  },
  {
    name: "Sana M.",
    text: "Loved the separate family section and how quick the service was even when it was busy. Rabdi to finish was perfect.",
    stars: 4,
  },
  {
    name: "Vikram R.",
    text: "Came for the seafood — Apollo fish and butter garlic prawns did not disappoint. Will be back for the platters.",
    stars: 5,
  },
  {
    name: "Priya N.",
    text: "Beautiful interiors, warm lighting, and paneer dishes that veg guests actually raved about. Great value too.",
    stars: 4,
  },
];

/* ---------------- FAQ ------------- */
export const faqs = [
  {
    q: "Where exactly is Mak's Kitchen?",
    a: "We're on the 4th floor at 10-3-76, above KFC, opposite Pillar No. 3 on the PVNR Expressway, Mehdipatnam Road, Humayun Nagar, Hyderabad — 500028.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open daily and serve right through until 12:00 AM (midnight).",
  },
  {
    q: "Do you have a family section?",
    a: "Yes. There's a dedicated separate family section, so it's an easy, comfortable choice for family gatherings and celebrations.",
  },
  {
    q: "Do you offer take-away and delivery?",
    a: "Yes — take-away is available in-house, and you can order online through the delivery partners linked on this page.",
  },
  {
    q: "Is there a good vegetarian selection?",
    a: "Absolutely. Alongside our non-veg specialities we have an extensive paneer, mushroom, baby corn and Indian veg menu.",
  },
  {
    q: "How do I reserve a table?",
    a: "Call us on +91 90302 01028, or use the reservation form on this page. (The form on this demo is for preview only.)",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Signatures", href: "#signatures" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];
