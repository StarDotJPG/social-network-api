const { Schema, model } = require('mongoose');

const reactionId = new Schema({
    pizzaName: {
        type: Schema.Types.ObjectId,
        default: Schema.Types.ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        max: 280
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// create the model using the Schema
const Reaction = model('Reaction', ReactionSchema);

// export the model
module.exports = Reaction;