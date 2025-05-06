const db = require('../db')

class PostController{

   async getAllPosts(request, response){
      try {
         const postsFromDb = await db.query('SELECT * FROM posts')
         response.status(200).json(postsFromDb.rows) 
      } catch (err) {
         response.status(500).json({message: err.message})
      }
   }


   async deletePost(request,response){
      try {
         const postId = request.params.postId // из строки запроса берем id поста который нужно удалить 
         const deletedPost = await db.query(`DELETE FROM posts WHERE id = $1 RETURNING *`,[postId])
         

         if(!deletedPost.rows[0]){
            response.status(404).json({message: `пользователя с переданным id: '${postId}' не существует`})
            return
         }

         response.status(200).json(deletedPost.rows[0]) // отправляем только удаленный пост без ненужной инфы
      } catch (err) {
         response.status(500).json({message: err.message})
      }
   }


   async createANewPost(request,response){
      try {
         const { title, post_content } = request.body
         const createdPost = await db.query(`INSERT INTO posts (title , post_content) VALUES ($1, $2) RETURNING *`,[title,post_content])

         response.status(200).json(createdPost.rows[0])

      } catch (err) {
         response.status(500).json({message: err.message})
      }
   }
}

module.exports = new PostController()