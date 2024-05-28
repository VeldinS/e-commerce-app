// app/api/products/route.js
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://veldinsalcinovic123:e9KT8uKLUFl1vRLC@productscluster.8pp1ipt.mongodb.net/?retryWrites=true&w=majority&appName=ProductsCluster";

export async function GET(request) {
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        const db = client.db("your_database_name");
        const productsCollection = db.collection("Products");
        const products = await productsCollection.find({}).toArray();

        return new Response(JSON.stringify(products), {
            status: 200,
            headers: { 'content-type': 'application/json' }
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        return new Response(JSON.stringify({ error: 'Failed to fetch products' }), { status: 500 });
    } finally {
        await client.close();
    }
}
