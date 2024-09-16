const Record = require('../models/recordModel');

// Create a new record
exports.createRecord = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newRecord = new Record({ name, description });
    await newRecord.save();
    res.status(201).json(newRecord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all records
exports.getRecords = async (req, res) => {
  try {
    const records = await Record.find();
    res.status(200).json(records);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a record
exports.updateRecord = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedRecord = await Record.findByIdAndUpdate(id, { name, description }, { new: true });
    res.status(200).json(updatedRecord);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a record
exports.deleteRecord = async (req, res) => {
  const { id } = req.params;
  try {
    await Record.findByIdAndDelete(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
