const express = require('express');
const categoryRoute = require('./routes/category.routes');
const loginRouter = require('./routes/login.routes');
const postRoute = require('./routes/post.routes');
const userRoute = require('./routes/users.routes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/post', postRoute);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
