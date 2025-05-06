const express = require('express')
const router = express.Router()
const controllerForThatRouter = require('../controllers/exampleOfAController')

// для каждого метода часто своя логика и следовательно нужна отдельная функция в контроллере, но если логика одна - можно использовать одну функцию с такой же логикой, тут просто пример как добавлять функции в маршрут (роутер)
router.route('/').get(controllerForThatRouter.aFunctionToHandleQuariesToTheServer)
.post(controllerForThatRouter.aFunctionToHandleQuariesToTheServer)

// тут маршрут с параметром id 
router.route('/:id').get(controllerForThatRouter.aFunctionToHandleQuariesToTheServer)
.put(controllerForThatRouter.aFunctionToHandleQuariesToTheServer)
.delete(controllerForThatRouter.aFunctionToHandleQuariesToTheServer)

module.exports = router