const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller.js');

// Set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

//for friends
router
.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend)


// Set up GET one, PUT, and DELETE at /api/user/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;