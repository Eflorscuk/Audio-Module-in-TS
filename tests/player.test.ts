import request from 'supertest';
import app from '../src/index';
import { VLCPlayer } from '../src/vlcPlayer';

jest.mock('../src/vlcPlayer');

describe('VLCPlayer', () => {
    let vlcPlayerMock: jest.Mocked<VLCPlayer>;

    beforeEach(() => {
        vlcPlayerMock = new VLCPlayer() as jest.Mocked<VLCPlayer>;
    });

    it('Toque um arquivo de aúdio de uma requisição POST', async () => {
        const audioBuffer = Buffer.from('Test audio data');
        const response = await request(app)
            .post('/play_sound')
            .attach('file', audioBuffer, 'corona.wav');

        expect(response.status).toBe(200);
        expect(response.text).toBe('Áudio tocado com sucesso!');
        expect(vlcPlayerMock.play).toHaveBeenCalledWith(expect.any(String));
    });
});
