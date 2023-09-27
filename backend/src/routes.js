import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import SurgeryController from './app/controllers/SurgeryController';
import PatientsController from './app/controllers/PatientsController';
import DoctorController from './app/controllers/DoctorController';
import RoomController from './app/controllers/RoomController';
import RoleController from './app/controllers/RoleController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/roles', RoleController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/surgeries', SurgeryController.store);
routes.get('/surgeries', SurgeryController.index);
routes.put('/surgeries/:id', SurgeryController.update);
routes.delete('/surgeries/:id', SurgeryController.delete);

routes.post('/patients', PatientsController.store);
routes.get('/patients', PatientsController.index);
routes.put('/patients/:id', PatientsController.update);
routes.delete('/patients/:id', PatientsController.delete);

routes.post('/doctors', DoctorController.store);
routes.get('/doctors', DoctorController.index);
routes.put('/doctors/:id', DoctorController.update);
routes.delete('/doctors/:id', DoctorController.delete);

routes.post('/rooms', RoomController.store);
routes.get('/rooms', RoomController.index);
routes.put('/rooms/:id', RoomController.update);
routes.delete('/rooms/:id', RoomController.delete);

routes.put('/users', UserController.update);
routes.get('/users', UserController.index);

export default routes;
