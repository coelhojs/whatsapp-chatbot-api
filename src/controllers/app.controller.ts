import { Request, Response } from 'express';


export const healthCheck = async (req: Request, res: Response): Promise<Response> => {
    return res.status(200).send('WhatsApp Chatbot API is healthy!');
}

