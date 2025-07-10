import express from 'express';
import postsRouter from './postsRouter.mjs';
import userRouter from './userRouter.mjs';

const app = express();
const PORT = process.env.PORT || 5000;

// custom middleware
function customMiddleware(req, res, next) {
  if (req.url === '/about') {
    res.send('<h1>This page is blocked by admin</h1>');
    return;
  }
  next();
}

function tinnyLogger() {
  return (req, res, next) => {
    console.log(`${req.method} - ${req.url}`);
    next();
  };
}

const middleware = [tinnyLogger(), customMiddleware];

app.use(middleware);

app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.get('/products/:productId', (req, res) => {
  console.log(req.params);
  res.send(`<h1>I am listening ${req.params.productId}</h1>`);
});

app.get('/products/:productId/reviews/:reviewId', (req, res) => {
  res.send(`<h1>I am review comment ${req.params.reviewId}</h1>`);
});



// app.use(morgan('dev')); //middleware runs for every routes // 3rd party middlware

app.get('/', (req, res) => {
  res.send('<h1>Server is Running on deafult route</h1>');
});

// app.get('/about', morgan('dev'), (req, res) => {
//   //   res.send('<h1>This is about page</h1>');
//   res.json({
//     message: 'I am JSON response from about route',
//   });
// }); // middleware runs for only about route

app.get('/about', (req, res) => {
  //   res.send('<h1>This is about page</h1>');
  res.json({
    message: 'I am JSON response from about route',
  });
});

app.get('/contact', (req, res) => {
  res.send('<h1>This is contact page</h1>');
});

app.get('*', (req, res) => {
  res.send('<h1>404 not found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
