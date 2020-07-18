const router = require('express').Router();
const postsCtrl = require('../../controllers/posts');

router.get('/', postsCtrl.index);
router.post('/', postsCtrl.create);
router.delete('/:id', postsCtrl.delete);

module.exports = router;