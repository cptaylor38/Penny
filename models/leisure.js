const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const LeisureSchema = new Schema({
    title: {
        type: String
    },
    details: {
        type: String,
        leisure: { type: Schema.Types.ObjectId, ref: 'User' }
    },
    amount: { type: Number },
    date: { type: Date, default: Date.now }
});

const Leisure = mongoose.model("Leisure", LeisureSchema);

module.exports = Leisure;