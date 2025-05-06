
const dataFromServer = {
   posts: [] 
}

fetch(`http://localhost:3000/posts`).then(res=> res.json()).then(posts => {
   console.log(posts)
   
   dataFromServer.posts = posts

   //на страницу все посты выгружаем
   dataFromServer.posts.forEach((element,index) => {

      const newPostDomElement = createPostForPage(element)
      console.log(newPostDomElement)
      displayPostOnThePage(newPostDomElement)


      // const postTemplate = document.getElementById('post-template').content
      // const postElem = postTemplate.cloneNode(true) //копируем все что вложено в образец
      // const titleBlock = postElem.querySelector('.post__title')
      // const paragraphBlock = postElem.querySelector('.post__paragraph')
      // const deleteBtn = postElem.querySelector('button.post__delete-btn')
  
      
      // //записываем в дата атрибут id карточки
      // const postDiv = postElem.querySelector('.post'); // получаем элемент .post ( проблема в том что фрагменту нельзя ставить dataset, его можно ставить только блокам/тегам как div, span и тп )
      // postDiv.dataset.postId = element.id

   


      // // вещаем на кнопку удаления функицию которая удаляет пост навсегда
      // deleteBtn.addEventListener('click',()=> deletePostForGood(postDiv))


      // titleBlock.textContent = element.title
      // paragraphBlock.textContent = element.post_content   
   
      // containerForPosts.append(postElem)
   });

   
}).catch(err =>{
   console.error(err)
   
})


const containerForPosts = document.querySelector('.posts') 
const createPostForm = document.getElementById('create-a-post-form')
const titleInput = createPostForm.querySelector('#title-input')
const postContentInput = createPostForm.querySelector('#content-textarea')

createPostForm.addEventListener('submit',(event)=>{
   event.preventDefault() // 
   
   if(titleInput.value.trim().length !== 0 && postContentInput.value.trim().length !== 0 ){
      console.log('поля непустые')

      const title = titleInput.value.trim()
      const post_content = postContentInput.value.trim()

      fetch(`http://localhost:3000/posts`, {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         }  ,
         body: JSON.stringify({
            title,
            post_content
         })
      }).then(res => res.json()).then(newPost => {
         console.log(newPost)
         const newPostDomElement = createPostForPage(newPost)
         displayPostOnThePage(newPostDomElement)


         //очищаем инпуты при успешном создании нового поста
         titleInput.value = ''
         postContentInput.value = ''
      })


   }


})






function createPostForPage(postElement){
   
      const postTemplate = document.getElementById('post-template').content
      const postElem = postTemplate.cloneNode(true) //копируем все что вложено в образец
      const titleBlock = postElem.querySelector('.post__title')
      const paragraphBlock = postElem.querySelector('.post__paragraph')
      const deleteBtn = postElem.querySelector('button.post__delete-btn')
  
      
      //записываем в дата атрибут id карточки
      const postDiv = postElem.querySelector('.post'); // получаем элемент .post ( проблема в том что фрагменту нельзя ставить dataset, его можно ставить только блокам/тегам как div, span и тп )
      postDiv.dataset.postId = postElement.id

   


      // вещаем на кнопку удаления функицию которая удаляет пост навсегда
      deleteBtn.addEventListener('click',()=> deletePostForGood(postDiv))


      titleBlock.textContent = postElement.title
      paragraphBlock.textContent = postElement.post_content   
   
     return postElem
   
}


function displayPostOnThePage(postDomElement){
   containerForPosts.append(postDomElement)
}







//! удалаяем пост под id которое является числом
// fetch(`http://localhost:3000/posts/8`,{
//    method: 'DELETE'
// }).then(res=> res.json()).then(posts => {
//    console.log(posts)
// }).catch(err =>{
//    console.error(err)
// })


function deletePostForGood(postDomElement){
   const postId = postDomElement.dataset.postId 
   fetch(`http://localhost:3000/posts/${postId}`,{
   method: 'DELETE'
}).then(res=> res.json()).then(posts => {
   console.log(posts)
   postDomElement.remove()
}).catch(err =>{
   console.error(err)
})
}