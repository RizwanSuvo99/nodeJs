// console.log(req.query); //to get query strings data
export const getAllPost = (req, res) => {
  res.send('<h1>Rendered All posts</h1>');
};

export const getSinglePost = (req, res) => {
  res.send(`<h1>I am post ${req.params.postId}</h1>`);
};

export const createSinglePost = (req, res) => {
  res.send(`<h1>A post is created</h1>`);
};

export const updateSinglePost = (req, res) => {
  res.send(`<h1>${req.params.postId} post is updated</h1>`);
};

export const deleteSinglePost = (req, res) => {
  res.send(`<h1>${req.params.postId} post is deleted</h1>`);
};
