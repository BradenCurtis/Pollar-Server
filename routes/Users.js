const express = require('express')
const router = express.Router()
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')

router.post("/register", async (req, res) => {
    const {username, password} = req.body; 

    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash,
        });
        res.json("User Created");
    });
});

router.post("/login", async (req, res) => {
    const {username, password} = req.body;

    const user = await Users.findOne({where: {username: username}});

    if (!user) {res.json({error: "User not found"});}
    else{
        bcrypt.compare(password, user.password).then(async (match) => {
            if (!match) {res.json({error: "Username and Password do not match"})}
            else {
                const accessToken = sign({username: user.username, id: user.id}, "9Ouf5XHcHDOQ8n01lKae");
                res.json(accessToken);
            }
        })
    }
})

module.exports = router