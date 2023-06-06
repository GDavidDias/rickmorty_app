const control = require("../controllers/getCharById");
const {postFav, deleteFav} = require("../controllers/handleFavorites");
const login = require("../controllers/login");

const express = require("express");
const router = express.Router();
//const router = require("express").Router()  //tambien puede venir asi

// router.get("/character/:id", (req,res)=>{
//     control.getCharById(req,res)
// });
router.get("/character/:id", control.getCharById)

// router.get("/login",(req,res)=>{
//     // console.log("ingresa a router.get")
//     login(req,res)
// });
router.get("/login",login)

// router.post("/fav",(req,res)=>{
//     // console.log("ingresa a router.post /fav")
//     // console.log("req:", req.body)
//     postFav(req,res)
// });
router.post("/fav",postFav)


// router.delete("/fav/:id",(req, res)=>{
//     console.log("entra a router.delete - /fav/:id :")
//     console.log(req.params)
//     deleteFav(req,res)
// });
router.delete("/fav/:id",deleteFav)

module.exports = router;