const app = require('express') ()
const userRouter = require('./app/user.routes.js')
const itemsRouter = require('./app/items.routes.js')
const listRouter = require('./app/list.routes.js')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.json())

app.use('/app/user.routes.js', userRouter)
app.use('/app/items.routes.js', itemsRouter)
app.use('/app/list.routes.js', listRouter)

app.get('/', (req, res) => {
    res.json({"message": "Application CRUD"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

function loggerMiddleware(req, res, next) {
    console.log(`New request received :
   <== [${req.method}] ${req.originalUrl}`)
    next()
   }