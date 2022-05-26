const {userController} = require("../controllers");
const router = require('express').Router();

router.get('/', userController.getUsers);
router.post('/', userController.addUser);

module.exports = router;