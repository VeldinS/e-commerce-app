import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://veldinsalcinovic123:e9KT8uKLUFl1vRLC@productscluster.8pp1ipt.mongodb.net/?retryWrites=true&w=majority&appName=ProductsCluster";

export async function GET(request) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        },
    });

    try {
        await client.connect();
        const db = client.db("EV-goods-data");
        const productsCollection = db.collection("Products");

        // Get and parse the filter from the query string
        let filter = {};
        if (request.nextUrl.searchParams.has('filter')) {
            const rawFilter = request.nextUrl.searchParams.get('filter');
            try {
                filter = JSON.parse(rawFilter);
            } catch (parseError) {
                console.error('Error parsing filter:', parseError);
                return new Response(JSON.stringify({ error: 'Invalid filter format' }), { status: 400 });
            }
        }

        const products = await productsCollection.find(filter).toArray();


        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'content-type': 'application/json' },
        });

    } catch (error) {
        console.error("Error fetching products:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
    } finally {
        await client.close();
    }
}

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
        const response = await fetch(`/api/products?filter=${encodeURIComponent(JSON.stringify({ [parameterName]: parameterValue }))}`);
        return await response.json();
    } catch (err) {
        console.error(`Error fetching products with ${parameterName}=${parameterValue}:`, err);
        throw err;
    }
};

export const fetchProductById = async (parameterName, parameterValue = '') => {
    try {
        const response = await fetch(`/api/products?filter=${encodeURIComponent(JSON.stringify({ [parameterName]: parameterValue }))}`);
        return await response.json();
    } catch (err) {
        console.error(`Error fetching products with ${parameterName}=${parameterValue}:`, err);
        throw err;
    }
};











