import express, { json, urlencoded, static as static_} from 'express';
import { resolve } from 'node:path';
import ejs from 'ejs';
// import { serve, setup } from "swagger-ui-express";
// import fs from 'node:fs';
import swaggerFile from './swaggerFile.js';
import routers from './controllers/routers/routers.js'

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(static_(resolve('./src/public')));
app.set('view engine', 'html');
app.set('views', resolve('./src/views'));
app.engine('.html', ejs.renderFile);

// app.use("/docs", serve, setup(swaggerFile));
app.use(routers);

app.listen(3000);


/**
 * Pergunta do git 
 * git config --global user.name ""
 * git config --global user.email ""
 * 
 * Pergunta onde você é o responsavel pela infra-estrutura
 * 
 */