import express, { Request, Response } from 'express';
import multer from 'multer';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send("Está funcionando");
})

router.get('/play_sound', (req: Request, res: Response) => {
    res.send("Áudio tocando!");
});

export default router;