const express = require('express');
const app = express();

app.use(express.json());

// Data array
// This data will act like a database
const posts = [
    {id: 1, title: 'Post 1',description : 'Post Description 1'},
    {id: 2, title: 'Post 2',description : 'Post Description 2'},
    {id: 3, title: 'Post 3',description : 'Post Description 3'},
];

app.get('/', (req, res) => {
    // You can give response in html format
    res.send('<h1>Hello World!</h1><p>This is a project using Express JS</p>');
});

app.get('/posts', (req, res) => {
    res.send(posts);
});

// This route will get one specific data and show it, if the data is not found it will show error 404, data is not found
// The URI should be like : /posts/1
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