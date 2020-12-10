/*
    @author: Karoon Khatiwada
    @date: 12/09/2020
*/

// imports
import express from 'express';
import { router } from './routes';

// express definition
const app = express();
const port = 3000;

// middleware configuration
app.use('/', router);

// server information
app.listen(port, () => {  
    return console.log(`server is listening on ${port}`);
});