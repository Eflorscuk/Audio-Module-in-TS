import express, { Request, Response } from 'express';
import multer from 'multer';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Está funcionando");
})

export default router;