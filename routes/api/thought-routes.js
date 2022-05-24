const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thought-controller.js');

// Set up GET all and POST at /api/user
router
    .route('/')
    .get(getAllThought)
    .post(createThought);

// Set up GET one, PUT, and DELETE at /api/user/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;