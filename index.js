
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static('public'));

let blogPosts = [];

app.get('/api/posts', (req, res) => {
  res.json(blogPosts);
});

app.post('/api/posts', (req, res) => {
  const { title, content } = req.body;
  const post = {
    id: Date.now(),
    title,
    content,
    date: new Date().toLocaleDateString()
  };
  blogPosts.push(post);
  res.json(post);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Blog server running at http://0.0.0.0:${port}`);
});
