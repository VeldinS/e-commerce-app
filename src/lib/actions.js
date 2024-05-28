export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');
        return await response.json();
    } catch (err) {
        console.error("Error fetching products:", err);
        throw err;
    }
};

export const fetchSpecificProducts = async (parameterName, parameterValue = true) => {
    try {
        const response = await fetch(`/api/products?${parameterName}=${parameterValue}`);
        return await response.json();
    } catch (err) {
        console.error(`Error fetching products with ${parameterName}=${parameterValue}:`, err);
        throw err;
    }
};



