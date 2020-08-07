import express, { response } from 'express';
import ClassesControler from './controllers/classesController';


const routes = express.Router()
const classesControlles = new ClassesControler;


routes.post('/classes', classesControlles.create);


export default routes;
