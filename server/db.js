const Pool = require('pg').Pool
const pool = new Pool({
   user: 'postgres',
   password: '1234567890', 
   host: 'localhost', 
   port: 5432, // обычно это стандарт в постгрэс , но если изменял - то тогда больше не 5432 
   database: "simple db to practice fetch " // там в конце пробел у  имени бд
})

//подключаемся к бд и эккспортируем чтобы можно было использовать бд в других файлах
//потом когда будешь использовать бд нужно в этом файле где это применяется импортировать это
module.exports = pool