import request from 'supertest';
import app from '../src/index';

describe('Testando a rota /', () => {
  it('Deve retornar status 200 e a mensagem "Está funcionando"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe("Está funcionando");
  });
});
