const router = require('express').Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);

module.exports = router;