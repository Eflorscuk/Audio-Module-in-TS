import express, { Request, Response } from 'express';
import multer from 'multer';

const router = express.Router();

router.post('/play_sound', (req: Request, res: Response) => {
    res.status(200).send("Áudio tocando!");
});

export default router;