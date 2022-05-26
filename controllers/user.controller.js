const {userService} = require("../service");
const {User} = require("../database");

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await userService.getAllUsers(req.query);
            console.log("after")
            res.json(users);
        } catch (e) {
            next(e);
        }
    },

    addUser : async (req, res, next) => {
        try {
            const newUser = await User.createUser(req.body);
            res.json(newUser);
        } catch (e) {
            next(e);
        }
    }
}