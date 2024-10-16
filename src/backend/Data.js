export const categories = [
    {
        name: 'category1',
        color: '#EAECF1'
    },
    {
        name: 'category2',
        color: '#CEE3F7'
    },
    {
        name: 'category3',
        color: '#FFD4D1'
    },
    {
        name: 'category4',
        color: '#F4FFBB'
    }
];

export const products = {
    category1: [],
    category2: [],
    category3: [],
    category4: [],
};

function generateRandomDescription(productName) {
    const descriptions = [
        "Elevate your style with this timeless piece.",
        "The perfect blend of form and function.",
        "Stay organized and look great doing it.",
        "Crafted for those who demand quality and style.",
        "A versatile product that fits your everyday needs.",
        "Designed with durability and comfort in mind.",
        "The ideal choice for anyone who loves practicality.",
        "Bring a touch of elegance to your daily routine.",
        "Built to last, even in the toughest conditions.",
        "Treat yourself to something special today.",
        "An essential addition to your collection.",
        "Enjoy unmatched performance and convenience.",
        "A stylish and reliable companion for any occasion.",
        "Experience premium quality at an affordable price.",
        "Lightweight, durable, and ready to go anywhere.",
        "The ultimate solution for on-the-go convenience.",
        "Your daily essential just got an upgrade.",
        "Engineered to meet the highest standards.",
        "Perfect for travel, work, or play.",
        "Designed to make your life easier and more enjoyable.",
        "Craftsmanship that you can feel in every detail.",
        "A practical and stylish choice for everyday use.",
        "Sleek, modern, and made to impress.",
        "Compact, yet packed with functionality.",
        "The perfect blend of simplicity and sophistication.",
        "Upgrade your essentials with this modern take.",
        "Made to fit seamlessly into your lifestyle.",
        "A smart and stylish solution for your needs.",
        "Built for adventure and made to last.",
        "A bold statement piece that won’t go unnoticed.",
        "Treat yourself to a little luxury.",
        "Experience the difference with superior craftsmanship.",
        "Perfect for staying on top of your game.",
        "A durable and elegant option for any occasion.",
        "Functional, fashionable, and made for you.",
        "Designed to keep up with your busy lifestyle.",
        "Your go-to for convenience and style.",
        "Made to exceed your expectations in every way.",
        "Compact design, big on functionality.",
        "A must-have for trendsetters and go-getters.",
        "Engineered for both style and performance.",
        "A perfect balance of practicality and elegance.",
        "Durability and style that you can count on.",
        "The perfect companion for your daily adventures.",
        "A thoughtful gift for someone special.",
        "The ultimate accessory for any wardrobe.",
        "Simplicity meets sophistication in this design.",
        "Add a touch of class to your routine.",
        "Perfect for those who value both style and functionality.",
        "A sleek and stylish choice for everyday use."
    ];


    let randomIndex = Math.floor(Math.random() * descriptions.length);
    return descriptions[randomIndex].replace(/any/g, productName.toLowerCase());
}

function generateRandomProduct(categoryId, startId) {
    const productNames = [
        "T-Shirt",
        "Sweatshirt",
        "Hat",
        "Mug",
        "Phone Case",
        "Laptop Sleeve",
        "Water Bottle",
        "Backpack",
        "Wallet",
        "Watch",
        "Shoes",
        "Sunglasses",
        "Jewelry",
        "Speaker",
        "Headphones",
        "Charger",
        "Power Bank",
        "Desk Lamp",
        "Notebook",
        "Pen",
        "Book",
        "Toy",
        "Pet Accessory",
        "Plant",
        "Decoration",
        "Tool",
        "Tote Bag",
        "Keychain",
        "Umbrella",
        "Scarf",
        "Gloves",
        "Travel Pillow",
        "Mouse Pad",
        "Blanket",
        "Poster",
        "Puzzle",
        "Calendar",
        "Coffee Grinder",
        "Fridge Magnet",
        "Coaster",
        "Candle",
        "Wristband",
        "Luggage Tag",
        "Waterproof Bag",
        "Thermos",
        "Lunch Box",
        "Socks",
        "Belt",
        "Tie",
        "Bow Tie",
        "Shoe Laces",
        "Clutch",
        "Sewing Kit",
        "Phone Stand",
        "Tablet Case",
        "Ring Light",
        "Tripod",
        "Fitness Tracker",
        "Yoga Mat",
        "Dumbbells",
        "Jump Rope",
        "Resistance Bands",
        "Foam Roller",
        "Travel Mug",
        "Bottle Opener",
        "Plush Toy",
        "Notebook Case",
        "Eye Mask",
        "Lip Balm",
        "Face Mask",
        "Hand Sanitizer",
        "Luggage",
        "Passport Holder",
        "Wallet Chain",
        "Bluetooth Tracker",
        "Phone Holder",
        "Bike Light",
        "Action Camera",
        "Gaming Mouse",
        "Keyboard",
        "Monitor Stand",
        "Tablet Stand",
        "Cable Organizer",
        "Multi-tool",
        "Portable Fan",
        "Smart Light Bulb",
        "Projector",
        "Stylus Pen",
        "Screen Protector",
        "VR Headset",
        "Portable Blender",
        "Smartwatch Band",
        "Phone Grip",
        "Card Holder",
        "Portable Speaker",
        "Sunglasses Case",
        "Travel Adapter",
        "Footwear Cleaner",
        "Hair Brush",
        "Makeup Bag",
        "Skincare Set",
        "Essential Oil Diffuser",
        "Picnic Blanket",
        "Portable Grill"
    ];


    let id = startId;
    let randomIndex = Math.floor(Math.random() * productNames.length);
    let name = productNames[randomIndex];
    let price = Math.floor(Math.random() * (200 - 50) + 50) + "KM";
    let oldPrice = Math.floor(Math.random() * (200 - 50) + 50) * 2 + "KM";
    let rating = (Math.random() * 5).toFixed(1);

    // List of images to choose from
    const images = [
        'https://i.ibb.co/5kv5fv4/product1-Png.png',
        'https://i.ibb.co/jV7zyg8/product2-Png.png',
        'https://i.ibb.co/ZJswLmG/product3-Png.png',
        'https://i.ibb.co/gWhRpn1/product4-Png.png'
    ];

    // Randomly assign the same image to all image properties
    let randomImageIndex = Math.floor(Math.random() * images.length);
    let selectedImage = images[randomImageIndex];

    let color = randomColor();
    let description = generateRandomDescription(name);

    let product = {
        id: id++,
        name: name,
        price: price,
        oldPrice: oldPrice,
        rating: rating,
        image: selectedImage,
        image2: selectedImage,
        previewImg: selectedImage,
        color: color,
        description: description,
    };

    // Randomly assign sellOfDay to one product
    if (Math.random() < 0.1) {
        product.sellOfDay = true;
    }

    return product;
}

function randomColor() {
    const colors = ["#F4FFBB", "#CEE3F7", "#FFD4D1", "#EAECF1"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Generate products for each category
let totalProducts = 0;
while (totalProducts < 1000) {
    for (let i = 0; i < 250; i++) { // Adjust number of products per category to reach 150 total
        let category = Object.keys(products)[Math.floor(Math.random() * Object.keys(products).length)];
        let product = generateRandomProduct(category, totalProducts + 1);
        products[category].push(product);
        totalProducts++;
    }
}

console.log(products); // This line can be removed to avoid printing the data in the console
