'use strict';

var mongoose = require('mongoose');

var objectSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    completed: Boolean,
    note: String,
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Object',objectSchema);
