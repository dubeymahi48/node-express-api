var express = require('express');
var noteController = require('../controller/noteController');

var router = express.Router();

// collecting notes route here
router.route('/notes').get(noteController.getNotes);
router.route('/notes').post(noteController.postNote);
router.route('/notes/:id').get(noteController.getNote);
router.route('/notes/update/:id').put(noteController.updateNote);
router.route('/notes/delete/:id').delete(noteController.deleteNote);

module.exports = router;