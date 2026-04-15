import { Router } from 'express';
import { usersController, findUsersById, registerUser } from '../users/usersController.js'

var usersRouter = Router();

usersRouter.get('/users/:id', findUsersById)
usersRouter.get('/users', usersController);
usersRouter.post('/users', registerUser)


export default usersRouter;
