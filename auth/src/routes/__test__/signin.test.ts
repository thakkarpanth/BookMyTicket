import request from 'supertest' ;
import {app} from '../../app'; 

it('fails when a email that does not exist' , async () => {
    await request(app).post('/api/users/signin').send({
        email : "test@test.com" , 
        password : "123456", 
    }).expect(400) ;
});

it('fails when incorrect password is supply' , async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: "password",
    }).expect(201);

    return request(app).post('/api/users/signin').send({
        email: "test@test.com",
        password: "abdsfknjdf",
    }).expect(400);
});

it('gives back jwt token' , async () => {
    await request(app).post('/api/users/signup').send({
        email: "test@test.com",
        password: "password",
    }).expect(201);

    const response = await request(app).post('/api/users/signin').send({
        email: "test@test.com",
        password: "password",
    }).expect(200);

    expect(response.get('Set-Cookie')).toBeDefined();
});