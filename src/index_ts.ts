import express from 'express';
import CreateUSer from './services/CreateUser';

const user = CreateUSer({
    email: 'alyssonr.1993@gmail.com',
    password: '123456'
});

const app = express();

app.listen(3333);