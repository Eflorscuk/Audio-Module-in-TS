import { VLC } from '@richie903/vlc';

export class VLCPlayer {
    private vlcInstance: VLC;

    constructor() {
        this.vlcInstance = new VLC();
    }

    play(filePath: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.vlcInstance.play(filePath, (err: any) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}