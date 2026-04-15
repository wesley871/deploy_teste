import { Router } from 'express';

const errorRouter = Router();

errorRouter.use((req, res)=>{
    res.render('error', { 
        message: "Pagina não encnotrada",
        error: {
            status: 404,
            stack: 1
        }
    });
});

export default errorRouter;