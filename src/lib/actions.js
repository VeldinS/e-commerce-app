export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');
        const data = await response.json();
        return data;  // Return the fetched data
    } catch (err) {
        console.error("Error fetching products:", err);
        throw err;    // Re-throw the error for handling in the component
    }
};
