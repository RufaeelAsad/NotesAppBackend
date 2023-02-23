const mongoose = require("mongoose");

const noteschema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },

    userid: {
        type: String,
        required: true,
    },

    tittle: {
        type: String,
        required: true,
    },

    content: {
        type: String,
    
    },

    dateAdded: {
        type: Date,
        default: Date.now,

    }
});

module.exports = mongoose.model("Note", noteschema);