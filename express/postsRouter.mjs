import express from 'express';
const router = express.Router();

// example.com/posts GET
router.get('/', (req, res) => {
  res.send('<h1>Rendered All posts</h1>');
});

// example.com/posts/:postId GET
router.get('/:postId', (req, res) => {
  res.send(`<h1>I am post ${req.params.postId}</h1>`);
});

// example.com/posts POST
router.post('/', (req, res) => {
  res.send(`<h1>A post is created</h1>`);
});

// example.com/posts PUT
router.put('/:postId', (req, res) => {
  res.send(`<h1>${req.params.postId} post is updated</h1>`);
});

// example.com/posts DELETE
router.delete('/:postId', (req, res) => {
  res.send(`<h1>${req.params.postId} post is deleted</h1>`);
});

export default router;
