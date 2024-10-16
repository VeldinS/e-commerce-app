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
        "A must-have for any household.",
        "This is the perfect gift for any occasion.",
        "Get yours today and experience the difference!",
        "Made with high-quality materials and built to last.",
        "Don't miss out on this amazing product!",
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
while (totalProducts < 150) {
    for (let i = 0; i < 37; i++) { // Adjust number of products per category to reach 150 total
        let category = Object.keys(products)[Math.floor(Math.random() * Object.keys(products).length)];
        let product = generateRandomProduct(category, totalProducts + 1);
        products[category].push(product);
        totalProducts++;
    }
}

console.log(products); // This line can be removed to avoid printing the data in the console
