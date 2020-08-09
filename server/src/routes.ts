import express, { response } from 'express';
import ClassesControler from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router()
const classesControlles = new ClassesControler();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControlles.index);
routes.post('/classes', classesControlles.create);

routes.get('/connections', connectionsController.index)
routes.post('/connections', connectionsController.create);

export default routes;
