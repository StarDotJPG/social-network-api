const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        trim: true,
        min: 1,
        max: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reactionSchema'
        }
    ]
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.reduce((total, reaction) => total + reaction.length + 1, 0);
});

// create the model using the Schema
const Thought = model('Thought', ThoughtSchema);

// export the model
module.exports = Thought;