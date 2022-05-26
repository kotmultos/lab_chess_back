const {Schema, model} = require("mongoose");
// const {passwordService} = require("../service");

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
        required: true,
        trim: true
    }
}, {timestamps: true, toObject: {virtuals: true}, toJSON: {virtuals: true}});

// userSchema.methods = {
//     normaliseUser() {
//         const fieldsToRemove = [
//             'password',
//             '__v',
//             'id'
//         ];
//
//         const normalisedUser = this.toObject();
//
//         fieldsToRemove.forEach((field) => delete normalisedUser[field]);
//
//         return normalisedUser;
//     }
// };

// userSchema.statics = {
//     async createUserWithHashPassword(userObject) {
//         const hashedPassword = await passwordService.hash(userObject.password);
//
//         return this.create({...userObject, password: hashedPassword});
//     }
// };

userSchema.statics = {
    async createUser(userObject) {
        return this.create(userObject);
    }
};

module.exports = model('user', userSchema);