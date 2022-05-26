const {userService} = require("../service");
const {User} = require("../database");

module.exports = {
    getUsers: async (req, res, next) => {
        try {
            // console.log(req)
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

    // getUsers: async (req, res, next) => {
    //     try {
    //         // console.log(req)
    //         const users = await userService.getAllUsers(req.query);
    //         console.log("after")
    //         const normalizedUsers = [];
    //
    //         users.forEach((user, index) => {
    //             normalizedUsers[index] = user.normaliseUser();
    //         });
    //
    //         res.json(normalizedUsers);
    //     } catch (e) {
    //         next(e);
    //     }
    // },
    //
    // addUser : async (req, res, next) => {
    //     try {
    //         const newUser = await User.createUserWithHashPassword(req.body);
    //
    //         const normalizedUser = newUser.normaliseUser();
    //
    //         res.json(normalizedUser);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}