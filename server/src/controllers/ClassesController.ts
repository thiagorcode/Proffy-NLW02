import { Request, Response, response } from 'express';

import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}
export default class ClassesControler {
  async index(req: Request, res: Response) {
    const filters = req.query;

    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;
    try {
      if (!week_day || !subject || !time) {
        return res.status(400).json({
          error: "Missing filters to search classes"
        })
      }
      const timeInMinutes = convertHourToMinutes(filters.time as string);

      const classes = await db('classes')
        .whereExists(function () {
          this.select('class_schedules.*')
            .from('class_schedules')
            .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
            .whereRaw('`class_schedules`.`week_day` = ??', [Number(week_day)])
            .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
            .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes])
        })
        .where('classes.subject', '=', subject)
        .join('users', 'classes.user_id', '=', 'users.id')
        .select(['classes.*', 'users.*']);

      return res.json(classes)
    } catch (error) {
      console.log(error)
    }


  }


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