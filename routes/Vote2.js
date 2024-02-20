const express = require('express')
const router = express.Router()
const {Vote2} = require('../models');
const { validateToken } = require('../middlewares/Authentication');

router.get("/", async (reg, res) => {
    const postList = await Vote2.findAll();
    res.json(postList);
});

router.post("/", validateToken, async (req, res) =>{
    const { PostId } = req.body;
    const UserId = req.user.id;
    const found = await Vote2.findOne({
        where: { PostId: PostId, UserId: UserId },
    });

    if (!found) {
        await Vote2.create({PostId: PostId, UserId: UserId });
        res.json({voted: true});
    }
    else {
        await Vote2.destroy({
            where: { PostId: PostId, UserId: UserId },
        });
        res.json({voted: false});
    }
});





module.exports = router