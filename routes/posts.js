const express = require("express");
const { postInfo,specificPost,editSpecificPost,deletePost } = require("../controler/posts")


let lastId = 3;




const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.json(posts);
    })
    .post(postInfo);

router.route("/:id")
    .get(specificPost)
    .patch(editSpecificPost)
    .delete(deletePost);

module.exports = router;