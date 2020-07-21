const router = require('express').Router();
const commentsCtrl = require('../../controllers/comments');

router.delete('/', commentsCtrl.deleteComment)
router.post('/', commentsCtrl.createComment);

module.exports = router;