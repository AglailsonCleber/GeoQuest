import { NextApiRequest, NextApiResponse } from 'next';
import { getQuestions } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const question = await getQuestions();
        if (!question) {
            return res.status(404).json({ success: false, message: 'Question not found' });
        }
        res.status(200).json({ success: true, data: question });
        // res.status(200).json( question );
    } catch (error: unknown) {
        console.error('Error fetching question:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
}
