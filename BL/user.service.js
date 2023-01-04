// const userDL = require('../DL/user.controller')
const auth = require('../auth')
const user = {
    username: 'a@a',
    password: 123
};

async function login(data) {

    if (!user.username==data.username  ||
         user.password !== data.password) throw { msg: 'Login failed', code: 401 }

    let token = auth.createToken(data)
    return token;
}

async function getAllUsers() {
    // return await userDL.read({})
}


module.exports = { login, getAllUsers }