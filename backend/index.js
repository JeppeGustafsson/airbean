const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const port = 3001;
const User = require('./User');
const MenuRouter = require('./Menu');
const { db } = require('./User');

//Middlewares
app.use(cors()); 
app.use(express.json({ extended: true}));
app.use(express.urlencoded({ extended: true })); 

app.use('/menu/api', MenuRouter);

app.get('/users', async (req, res) => {
   await db.collection('users').find().toArray()
        .then(results => {
            res.send(results);
        })
        .catch(error => console.error(error));
});

app.get('/users/:postId', async (req, res) => {
    try {
        const user = await User.findById(req.params.postId);
        res.send(user);
    } catch (err) {
        res.json({ message: err });
    }
});

app.patch('/users/:postId', async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.postId }, 
            { $set: { 
                orders: req.body.orders 
            } 
        });
        res.send(updatedUser);
    } catch (err) {
        res.json({ message: err });
    }
});

app.get('/menu', (req, res) => {
   db.collection('menu').find().toArray()
   .then(results => {
       res.send(results);
   })
   .catch(error => console.log(error));
});

app.post('/users', async (req, res) => {
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        orders: req.body.orders
    });
    res.redirect('/login');
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({ message: err })
    }
});

//db.collection('menu').insertOne({menuList});

//DATABASE
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useUnifiedTopology: true,
        useNewUrlParser: true }, 
    () => {
        console.log('Connected to database!');
});

app.listen(port);