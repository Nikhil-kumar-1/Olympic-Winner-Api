const mongoose = require("mongoose");

const menSchema = new mongoose.Schema({
    ranking: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    dob: {
        type: Date,
        required: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    score: {
        type: Number,
        required: true
    },
});

const MensRanking = mongoose.model("MensRanking", menSchema);
module.exports = MensRanking;
