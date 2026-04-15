import { Router } from 'express';
import indexRouter from './index.js';
import usersRouter from './users.js';
import errorRouter from './error.js';

const routers = Router();

routers.use(usersRouter);
routers.use(indexRouter);
routers.use(errorRouter);

export default routers;