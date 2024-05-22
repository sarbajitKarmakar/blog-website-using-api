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

function specificPost (req, res){
    const id = parseInt(req.params.id);
    const vlog = posts.find(elm => elm.id === id);
    if (vlog) {
        res.json(vlog);
    } else {
        res.status(404).json({ error: 'Post not found' });
    }
}

function editSpecificPost (req, res) {
    const id = parseInt(req.params.id);
    const postId = posts.findIndex(elem => elem.id === id);
    posts[postId].title = req.body.title || posts[postId].title;
    posts[postId].content = req.body.content || posts[postId].content;
    posts[postId].author = req.body.author || posts[postId].author;
    res.json(posts[postId]);
}

function deletePost (req, res) {
    const id = parseInt(req.params.id);
    const postId = posts.findIndex(elem => elem.id === id);
    console.log(postId);
    posts.splice(postId, 1);
    res.json(posts);
}

module.exports = {
        postInfo,
        specificPost,
        editSpecificPost,
        deletePost
    }