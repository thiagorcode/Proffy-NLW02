import { Request, Response, response } from 'express'
import db from '../database/connection';

export default class ConnectionsController {
  async index(req: Request, res: Response) {
    const totalConnections = await db('connections').count('* as total');
    const { total } = totalConnections[0];

    return res.json({ total })
  }
  async create(req: Request, res: Response) {
    const { user_id } = req.body;
    try {
      await db('connections').insert({
        user_id
      })
      return res.status(201).send();
    } catch (error) {
      console.log(error)
      return res.status(400).send({ error: error })
    }

  }

}