const control = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const express = require("express");
const router = express.Router();

router.get("/character/:id", (req,res)=>{
    control.getCharById(req,res)
});

router.get("/login",(req,res)=>{
    // console.log("ingresa a router.get")
    login(req,res)
});

router.post("/fav",(req,res)=>{
    // console.log("ingresa a router.post /fav")
    // console.log("req:", req.body)
    postFav(req,res)
});

router.delete("/fav/:id",(req, res)=>{
    console.log("entra a router.delete - /fav/:id :")
    console.log(req.params)
    deleteFav(req,res)
});

module.exports = router;