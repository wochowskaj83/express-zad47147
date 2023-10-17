const User = require('../models/UserModel');

module.exports = {
    index: (req, res) => {
        User.find({})
        .lean()
        .then((users)=>{
            console.log(users)
            res.render('tableViews/table', {users: users});
        }).catch((err) => {
            res.send(err)
        })
    }
}

