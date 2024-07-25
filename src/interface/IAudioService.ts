export interface IAudioService{
    playAudio(filePath: string): Promise<void>;
}