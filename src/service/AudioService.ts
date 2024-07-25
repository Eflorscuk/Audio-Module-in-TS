import { IAudioService } from '../interface/IAudioService';
import path from 'path';
import { exec } from 'child_process';
import fs from 'fs';
import util from 'util';

const execPromise = util.promisify(exec);

export class AudioService implements IAudioService {
    private tempDir: string;

    constructor() {
        this.tempDir = '/tmp'; // Diretório temporário
    }

    async playAudio(filePath: string): Promise<void> {
        try {
            const tempPath = path.join(this.tempDir, path.basename(filePath));

            // Renomeia o arquivo para um nome consistente
            fs.renameSync(filePath, tempPath);

            // Executa o arquivo usando o comando VLC
            await execPromise(`cvlc --no-xlib ${tempPath} --play-and-exit`);

            // Remove o arquivo temporário
            fs.unlinkSync(tempPath);
        } catch (error) {
            throw new Error(`Erro ao tocar o áudio: ${(error as Error).message}`);
        }
    }
}
