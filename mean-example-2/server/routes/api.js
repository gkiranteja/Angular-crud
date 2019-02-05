const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/user');

const mongoose = require('mongoose');
// const db = "mongodb://kirantj26:kirantj26@ds163164.mlab.com:63164/eventsdb"
const db = "mongodb://kirantj26:kirantj26@ds163984.mlab.com:63984/users"

mongoose.connect(db, err => {
     if(err){
         console.error('Error: ' + err);
     }
     else{
        console.log('Connected to mongodb');
     }
})

function verifyToken(req, res, next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorized request')      
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretkey')
    if(!payload){
         return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/', (req, res) => {
     res.send('From API route');
})


router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registerUser) => {
        if(error) {
            console.log(error);
        } else {
            let payload = { subject: registerUser._id }
            let token = jwt.sign(payload, 'secretkey')
            res.status(200).send({token})
        }
    }) 
})


router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
         if(error){
             console.log(error);
         } else {
              if(!user){
                  res.status(401).send('Invalid Email')
              } else {
                  if(user.password !== userData.password){
                      res.status(401).send('Invalid Password');
                  } else {
                      let payload = { subject: User._id }
                      let token = jwt.sign(payload, 'secretkey')
                       res.status(200).send({token});
                  }
              }
         }
    })
})




router.get('/events', (req, res) => {
    let events = [
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
    ]
       res.json(events)
})


router.get('/special', verifyToken, (req, res) => {
    let events = [
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
        {
            "id": "1",
            "name": "Auto Expo",
            "description": "Iorem ipsum",
            "date": "2012-04-23t18:25:43.511z"
        },
    ]
       res.json(events)
})




  
module.exports = router