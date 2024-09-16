const express = require('express');
const { createRecord, getRecords, updateRecord, deleteRecord } = require('../controllers/recordController');
const router = express.Router();

router.post('/', createRecord);
router.get('/', getRecords);
router.put('/:id', updateRecord);
router.delete('/:id', deleteRecord);

module.exports = router;
