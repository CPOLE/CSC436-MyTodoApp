var express = require("express");
var router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const privateKey = process.env.JWT_PRIVATE_KEY;

const saltRounds = 10;
router.use(function(req, res, next) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            req.hashedPassword = hash;
            next();
        });
    });
})

//  function needs to be marked "async" as we utilize await by chaining then/result
router.post("/login", async function(req, res, next) {
    //  perform credential validation
    if (req.body.username && req.body.password) {
        const user = await User.findOne().where("username").equals(req.body.username).exec();
        if (user) {
            return bcrypt.compare(req.body.password, user.password)
            .then(result => {
                if (result === true) {
                    const token = jwt.sign({id: user._id}, privateKey, {algorithm: "RS256"} );
                    return res.status(200).json({"access_token": token});
                } else {
                    return res.status(401).json({"error": "Invalid credentials"});
                }
            })
            .catch(error => {
                return res.status(500).json({"error": error.message});
            });
        } else {
            return res.status(401).json({"error": "Invalid credentials"});
        }
    } else {
        return res.status(400).json({"error": "Username or password missing"});
    }
});

//  include todo count
router.get("/users", async function(req, res, next) {
    const users = await User.findAll().exec();
    return res.status(200).json( {"users": users} );
});

//  async function?
router.post("/register", async function(req, res, next) {
    if (req.body.username && req.body.password && req.body.passwordRepeat) {
        console.log("username password & repeat...");
        if (req.body.password === req.body.passwordRepeat) {
            const user = new User({
                "username": req.body.username,
                "password": req.hashedPassword
            });
        //  await?
       return await user.save()
            .then(savedUser => {
                return res.status(201).json({
                    "id": savedUser._id,
                    "username": savedUser.username
                })
            }).catch(error => {
                return res.status(500).json({"error": error.message})
            });
        } else {
            return res.status(400).json({"error": "Password and repeated password don\"t match"});
        }
    } else {
        console.log(req.body.username+", "+req.body.password);
        return res.status(400).json({"error": "Username or password missing"});
    }
});

module.exports = router;