import { Router } from 'express';

const errorRouter = Router();

errorRouter.use((req, res)=>{
    const options = {
        message: "Pagina não encnotrada",
        error: {
            status: 404
        }
    }
    res.render('error', options, (erro, html) => {
        if(erro) {
            res.end("Erro ao exibir a página de erro.");
            return;
        }
        res.status(404);
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.end(html);
    });
});

export default errorRouter;