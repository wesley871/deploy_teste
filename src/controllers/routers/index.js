import { Router } from 'express';
import { indexController } from '../index/indexController.js'

const indexRouter = Router();

indexRouter.get('/', indexController);

export default indexRouter;