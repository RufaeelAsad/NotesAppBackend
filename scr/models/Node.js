const mongoose = require("mongoose");

const noteschema = mongoose.Schema({


    userid: {
        type: String,
        unique: true,
        required: true
    },

    tittle: {
        type: String,
    },

    content: {
        type: String,

    },
});


module.exports = mongoose.model("Node", noteschema);