const posts = require("../model/posts")

function postInfo(req, res) {
        const newId = posts.length + 1;
        const newpost = {
            id: newId,
            title: req.body.title,
            content: req.body.content,
            author: req.body.content,
            date: new Date(),
        }
        posts.push(newpost);
        res.json(newpost);
    }

    module.exports = {
        postInfo,
    }