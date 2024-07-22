import { Request, Response } from 'express';
import path from 'path';
import { exec } from 'child_process';
import fs from 'fs';
import util from 'util';

const execPromise = util.promisify(exec)

const uploadAudio = async (req: Request, res: Response): Promise<void> => {
    try {
        if(!req.file) {
            res.status(400).send('Sem arquivo');
            return;
        }
        const filePath = req.file.path;
        const tempPath = path.join('/tmp', req.file.originalname);

        // Rename the file to a consistent name
        fs.renameSync(filePath, tempPath);

        // Play the file using VLC command line
        await execPromise(`cvlc --no-xlib ${tempPath} --play-and-exit`);

        // Remove the temporary file
        fs.unlinkSync(tempPath);

        res.status(200).send('Sound playing successfully!');
    } catch(error) {
        res.status(500).send((error as Error).message);
    }
};

export default uploadAudio;