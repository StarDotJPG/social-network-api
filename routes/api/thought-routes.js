const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller.js');

// Set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

//for reactions
router
    .route('/:thoughtId')
    .put(addReaction)
    .delete(removeReaction)

// Set up GET one, PUT, and DELETE at /api/thought/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;