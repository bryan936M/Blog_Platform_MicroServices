import { Response } from 'express';

export default function sendResponse (res: Response, results: unknown): void{
  try {
    
    if (!results){
      throw new Error('No results found');
    }

    if (results instanceof Error){
      throw new Error(results.message);
    }
    console.log('sendResponse...')
    res.send(results);
  
  } catch (error) {
    res.status(500).send('An error occurred');
  }
}
