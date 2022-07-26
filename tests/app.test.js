const supertest = require('supertest');
const app = require('../index');
const api = supertest(app);

const ipTest = '181.13.173.3';
const cityTest = 'Villa Angela';

test('location returned as json', async () => {
    await api
        .get('/v1/location')
        .set('Accept', 'application/json')
        .expect('Content-Type', /application\/json/)
        .expect(200)
});


test('response IP and valid city', async () => {
    const response = await api.get('/v1/location')
      .set('Accept', 'application/json')
      .set('x-forwarded-for' , '181.13.173.3')
      expect(response.body.data.query).toEqual(ipTest)
      expect(response.body.data.city).toEqual(cityTest)
});


test('responds with current weather by city', async () => {
    const response = await api.get('/v1/current/'+cityTest)
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(200)
});


test('responds with week weather by city', async () => {
    const response = await api.get('/v1/forecast?city=Villa Angela')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(200)
});




