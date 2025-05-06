const db = require('../db') // импортировали дб чтобы использовать ее при запросах к БД

// для каждого запроса часто нужна своя уникальная логика
class exampleOfAController {


   async aFunctionToHandleQuariesToTheServer(request, response,next){
      try {
         response.send('все работает')
      } catch (err) {
         
      }
   }

}

// экспортируем наш контроллер с логмикой запросов 
module.exports = new exampleOfAController()