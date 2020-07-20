const router = require('express').Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', checkAuth, postsCtrl.index);
router.get('/id/comments', checkAuth, postsCtrl.commentsIndex);
router.post('/comment', checkAuth, postsCtrl.createComment);
router.post('/', checkAuth, postsCtrl.create);
router.delete('/:id', checkAuth, postsCtrl.delete);
router.delete('/comment/:id', checkAuth, postsCtrl.deleteComment)

function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(501).json({msg: 'NO NO'})
}

module.exports = router;