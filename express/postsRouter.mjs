import express from 'express';
import {
  createSinglePost,
  deleteSinglePost,
  getAllPost,
  getSinglePost,
  updateSinglePost,
} from './postController.mjs';
const router = express.Router();

// example.com/posts GET
router.get('/', getAllPost);

// example.com/posts/:postId GET
router.get('/:postId', getSinglePost);

// example.com/posts POST
router.post('/', createSinglePost);

// example.com/posts PUT
router.put('/:postId', updateSinglePost);

// example.com/posts DELETE
router.delete('/:postId', deleteSinglePost);

export default router;
