const Joi = require('joi');

const express = require('express');
const app = express();

app.use(express.json());

// Data array
const posts = [
    {id: 1, title: 'Post 1',description : 'Post Description'},
    {id: 2, title: 'Post 2',description : 'Post Description'},
    {id: 3, title: 'Post 3',description : 'Post Description'},
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

// To get a specific data
// The URI should be like : /api/teacher/nata
app.get('/posts/:id', (req, res) => {
    const post = posts.find((element) => element.id === parseInt(req.params.id));
    if(!post) {
        res.status(404).send('The data is not found');
        return;   
    }
    
    res.send(post);
});


app.post('/posts',(req,res) => {
    const post = {
        id : posts.length + 1,
        title: req.body.title,
        description: req.body.description,
    };
    
    posts.push(post);
    res.send(post);
});



app.put('/posts/:id', (req,res) => {
    // Look up the data
    // If not existing, return 404
    const post = posts.find((element) => element.id === parseInt(req.params.id));
    if(!post) {
        res.status(404).send('The data is not found');
        return;   
    }
    
    // Update data
    // Return the updated data to the client
    post.title = req.body.title;
    res.send(post);
});

app.delete('/posts/:id', (req,res) => {
    // Look up for the data with given id
    const post = posts.find((element) => element.id === parseInt(req.params.id));
    if(!post) {
        res.status(404).send('The data is not found');
        return;   
    }

    // Delete data
    const index = posts.indexOf(post);
    posts.splice(index, 1);

    // Return the data
    res.send(post);
});

// PORT
const port = 5000;

// Creating a port listener using express.js
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});