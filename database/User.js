const {Schema, model} = require("mongoose");

const userSchema = new Schema({
    url: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    experience : {
        type: Number,
        required: true,
    },
    gender : {
        type: String,
        required: true,
        trim: true
    },
    about: {
        type: String,
        trim: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

userSchema.statics = {
    async createUser(userObject) {
        return this.create(userObject);
    }
};

module.exports = model('user', userSchema);