import { Request, Response } from 'express';
import { AudioService } from '../service/AudioService';

const audioService = new AudioService();

const uploadAudio = async (req: Request, res: Response): Promise<void> => {
    try {
        if (!req.file) {
            res.status(400).send('Sem arquivo');
            return;
        }
        const filePath = req.file.path;

        // Usa o serviço de áudio para tocar o arquivo
        await audioService.playAudio(filePath);

        res.status(200).send('Sound playing successfully!');
    } catch (error) {
        res.status(500).send((error as Error).message);
    }
};

export default uploadAudio;
