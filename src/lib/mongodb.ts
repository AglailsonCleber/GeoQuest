import { MongoClient, ServerApiVersion, Db, InsertOneResult } from "mongodb";
import { Question, QuizResult } from "../types/quiz";


if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client: MongoClient;

if (process.env.NODE_ENV === "development") {
    const globalWithMongo = global as typeof globalThis & {
        _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new MongoClient(uri, options);
    }
    client = globalWithMongo._mongoClient;
} else {
    client = new MongoClient(uri, options);
}

export default client;

let db: Db | null = null;

// Conexão com o banco de dados
async function connectToDatabase(): Promise<Db> {
    if (!db) {
        await client.connect();
        db = client.db('GeoQuest');
    }
    return db;
}

// Função para buscar uma questão específica
export async function getQuestionById(questID: number): Promise<Question | null> {
    console.log('getQuestionById');
    const db = await connectToDatabase();
    const question = await db.collection<Question>('Quiz').findOne({ questID });
    return question;
}

// Função para buscar todas as questões
export async function getQuestions(): Promise<Question[]> {
    console.log('getQuestions');
    const db = await connectToDatabase();
    const question = await db.collection<Question>('Quiz').find({}).toArray();
    return question;
}

// Função para salvar o resultado do quiz
export async function saveResult(quizResult: QuizResult): Promise<InsertOneResult<QuizResult>> {
    console.log('saveResult');
    const db = await connectToDatabase();
    const result = await db.collection<QuizResult>('QuizResult').insertOne(quizResult);
    return result;
}

// Função para buscar o resultado do quiz
export async function getResult(userID: string): Promise<QuizResult[]> {
    console.log('getResult');
    const db = await connectToDatabase();
    const result = await db.collection<QuizResult>('QuizResult').find({ userID }).toArray();
    return result;
}

// Função para salvar as questões
export async function saveQuestion(question: Question): Promise<InsertOneResult<Question>> {
    console.log('saveQuestion');
    const db = await connectToDatabase();
    const result = await db.collection<Question>('Quiz').insertOne(question);
    return result;
}