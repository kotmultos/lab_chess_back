const {User} = require('../database')

module.exports = {
    getAllUsers: (query = {}) => {
        const findObject = {};
        return User
            .find(findObject)
    }
}
