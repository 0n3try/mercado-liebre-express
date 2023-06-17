const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
const userRouter = require('./routes/userRoutes');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");



app.listen(3000, () => {
    console.log('servidor corriendo');
});

app.use(mainRoutes);
app.use('/user', userRouter);

