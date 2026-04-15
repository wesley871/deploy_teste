import express, { json, urlencoded, static as static_} from 'express';
import { resolve } from 'node:path';
import { renderFile } from 'ejs';
import { serve, setup } from "swagger-ui-express";
import fs from 'node:fs';
import swaggerFile from './swaggerFile.js';
import routers from './controllers/routers/routers.js'

const socketPath = "/tmp/express-app.sock";
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(static_(resolve('./src/public')));
app.set('view engine', 'html');
app.set('views', resolve('./src/views'));
app.engine('.html', renderFile);

app.use("/docs", serve, setup(swaggerFile));
app.use(routers);

if (fs.existsSync(socketPath)) {
    fs.unlinkSync(socketPath);
}

app.listen(socketPath, () => {
    console.log(`Servidor rodando no socket: ${socketPath}`);
    // Ajusta as permissões para que outros processos (como o Nginx) possam ler/escrever
    fs.chmodSync(socketPath, '0777');
});


/**
 * Pergunta do git 
 * git config --global user.name ""
 * git config --global user.email ""
 * 
 * Pergunta onde você é o responsavel pela infra-estrutura
 * 
 */