export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');
        return await response.json();
    } catch (err) {
        console.error("Error fetching products:", err);
        throw err;
    }
};
