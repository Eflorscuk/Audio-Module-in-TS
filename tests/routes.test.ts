import request from 'supertest';
import app from '../src/index';

describe('Testando a rota /', () => {
  it('Deve retornar status 200 e a mensagem "Está funcionando"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Está funcionando");
  });
});

describe('Testando a rota /play_sound', () => {
  it('Deve retornar status 200 e a mensagem "Áudio tocando!"', async () => {
    const response = await request(app).post('/api/play_sound');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Áudio tocando!");
  });
});
