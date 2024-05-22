const express = require("express");
const { postInfo } = require("../controler/posts")


let lastId = 3;




const router = express.Router();

router
    .route("/")
    .get((req, res) => {
        res.json(posts);
    })
    .post(postInfo);

router.route("/:id")
    .get((req, res) => {
        const id = parseInt(req.params.id);
        const vlog = posts.find(elm => elm.id === id);
        if (vlog) {
            res.json(vlog);
        } else {
            res.status(404).json({ error: 'Post not found' });
        }
    })
    .patch((req, res) => {
        const id = parseInt(req.params.id);
        const postId = posts.findIndex(elem => elem.id === id);
        posts[postId].title = req.body.title || posts[postId].title;
        posts[postId].content = req.body.content || posts[postId].content;
        posts[postId].author = req.body.author || posts[postId].author;
        res.json(posts[postId]);
    })
    .delete((req, res) => {
        const id = parseInt(req.params.id);
        const postId = posts.findIndex(elem => elem.id === id);
        console.log(postId);
        posts.splice(postId, 1);
        res.json(posts);
    });

module.exports = router;