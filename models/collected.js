const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const collectedSchema = new Schema(
    {
        comic: {
            type: Object

        },

        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Collected = mongoose.model('Collected', collectedSchema);

module.exports = Collected;
