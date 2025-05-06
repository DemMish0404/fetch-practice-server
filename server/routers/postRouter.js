const express = require('express')
const postRouter = express.Router()
const postController = require('../controllers/postController')

postRouter.route('/').get(postController.getAllPosts).post(postController.createANewPost)

postRouter.route('/:postId').delete(postController.deletePost)

module.exports = postRouter