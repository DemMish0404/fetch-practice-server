require('dotenv').config() //  импортируем библиотеку чтобы работать с переменными в файле окружения (env)
const cors = require('cors') //* библиотека работающая с корсами ( доступом к серверу другими ресурсами в интернете. по-умолчанию только запросы разрешены оттуда где лежит сервер но можно разрешить всем отправлять запросы или только конкретным кому хотим то есть )



const express = require('express')
const app = express()
const PORT = process.env.PORT || 3005 // .PORT это переменная PORT в файле с расширением .env (если почему-то этой переменной нет, те она null или undefined , то используется 3005 порт)


app.use(express.urlencoded({extended: true})) // Middleware для парсинга данных из форм
app.use(express.json()) // с помощью встроенного в express миддлварэ учим сервер работать с json файлами

app.use(cors()) //* разрешаем всем ресурсам в интернете отправлять запросы к нашему серверу

//импортируем маршруты 
const exampleOfARouter = require('./routers/exampleOfAnRouter')
const postRouter = require('./routers/postRouter')
//подключаем маршруты, указывая ветку для них и обработчик этой ветки:
app.use('/example', exampleOfARouter)
app.use('/posts', postRouter)


// запускаем прослушивание сервера на порту и при запуске запуститься анонимная функция
app.listen(PORT, ()=>{
   console.log(`сервер запущен на порту ${PORT}`)   
})