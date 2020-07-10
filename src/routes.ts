import { Request, Response } from 'express';

export function helloWorld(request: Request, respose: Response) {
    return respose.json({ message: 'Hello World' });
}