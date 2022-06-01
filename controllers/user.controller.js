const {userService} = require("../service");
const {User} = require("../database");

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers(req.query);
            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    addUser : async (req, res, next) => {
        try {
            const newUser = await User.createUserWithHashPassword(req.body);
            res.json(newUser);
        } catch (e) {
            next(e);
        }
    }
}