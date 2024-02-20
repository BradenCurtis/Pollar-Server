const express = require('express')
const router = express.Router()
const {Posts, Vote1, Vote2} = require('../models');
const { validateToken } = require('../middlewares/Authentication');


router.get("/", async (reg, res) => {
    const postList = await Posts.findAll({include: [Vote1, Vote2]});
    res.json(postList);
});

router.post("/", validateToken, async (req, res) => {
    const post = req.body; 
    const username = req.user.username;
    post.username = username;
    await Posts.create(post);
    res.json(post);
    });


router.delete("/", validateToken, async (req, res) => {
    const PostId = req.body.PostId;
    await Posts.destroy({
        where: {
            id: PostId,
        }
    })

    res.json("Post Deleted");

});

module.exports = router