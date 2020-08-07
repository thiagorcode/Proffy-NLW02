import { Request, Response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}
export default class ClassesControler {
  async create(req: Request, res: Response) {
    const {
      name,
      subject,
      avatar,
      cost,
      whatsapp,
      bio,
      schedule
    } = req.body;

    const trx = await db.transaction()
    try {

      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      })
      const user_id = insertedUsersIds[0];

      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
      const class_id = insertedClassesIds[0];
      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        const { week_day, from, to } = scheduleItem
        return {
          class_id,
          week_day,
          from: convertHourToMinutes(from),
          to: convertHourToMinutes(to)
        }
      });

      await trx('class_schedules').insert(classSchedule);

      await trx.commit();
      console.log("Meth Router - Post /classes");
      return res.status(201).send();
    } catch (err) {
      console.log(err);
      await trx.rollback;
      return res.status(400).json({
        error: err
      })
    }
  }
}