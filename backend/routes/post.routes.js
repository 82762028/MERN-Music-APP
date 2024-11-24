
const express = require('express');
const {getArtist,getPosts,setPosts,editPost,deletePost,likePost,dislikePost,getCharts}= require("../controllers/post.controller")
const router = express.Router();


//classement par popularité mondiale
router.get("/charts/world",getCharts)
//Affichage d'un compte
router.get("/artist/:id",getArtist)

router.get("/",getPosts)
router.post("/",setPosts)

router.put("/",editPost)
router.delete("/:id",deletePost)
router.patch("/like-post/:id",likePost)
router.patch("/dislike-post/:id",dislikePost)

module.exports = router;


