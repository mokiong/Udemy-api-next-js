import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            return res.status(422).json({ message: 'Invalid email address' });
        }

        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.an94b.mongodb.net/test?retryWrites=true&w=majority`
        );
        const db = client.db();

        await db.collection('emails').insertOne({ email: userEmail });

        client.close();

        res.status(201).json({ message: 'Signed up!' });
    }
}

export default handler;
