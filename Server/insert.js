
const express = require('express');

const app = express();

const cors = require('cors');

const dotenv = require('dotenv');

dotenv.config();

const connection = require('../server/dbService');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended : false }));


app.listen(process.env.PORT, () => console.log('app is running'));


//Display All Users

app.get('/users', (request, response) => {
    connection.query('SELECT * FROM patient_records', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/users1', (request, response) => {
    connection.query('SELECT * FROM treatment', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});

app.get('/users2', (request, response) => {
    connection.query('SELECT * FROM expenditure', (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});


//Display a Single User by ID

app.get('/users/:id', (request, response) => {
    const id = request.params.id;
 
    connection.query('SELECT * FROM patient_records WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send(result);
    });
});


//Add a New User

app.post('/users', (request, response) => {
    connection.query('INSERT INTO patient_records SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(201).send(`User added with ID: ${result.insertId}`);
    });
});

app.post('/users1', (request, response) => {
    connection.query('INSERT INTO treatment SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(202).send(`Data added with ID: ${result.insertId}`);
    });
});

app.post('/users2', (request, response) => {
    connection.query('INSERT INTO expenditure SET ?', request.body, (error, result) => {
        if (error) throw error;
 
        response.status(202).send(`Head added with ID: ${result.insertId}`);
    });
});


//Delete a User

app.delete('/users/:id', (request, response) => {
    const id = request.params.id;
 
    connection.query('DELETE FROM patient_records WHERE id = ?', id, (error, result) => {
        if (error) throw error;
 
        response.send('User deleted.');
    });
});



