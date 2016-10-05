var User = require("./user.model");
var Controller = {
    register: function(req, res, next) {
        var body = req.body;
        var newUser = new User({
            name: body.name,
            email: body.email,
            username: body.username,
            password: body.password
        });

        User.createUser(newUser, function(err, user) {
            if (err) {
                next(err);
            } else {
                res.redirect('/users/login');
            }
        });
    },

    getRegister: function(req, res) {
        res.render('register');
    },

    login: function(req, res) {
       res.status(200).json(req.user);
    },

    logout: function(req, res) {
        req.logout();
        res.redirect('/users/login');
    },

    dashboard: function(req, res) {
        res.render('dashboard');
    },

    todoapp: function(req, res) {
        res.render('todoapp');
    }
};

module.exports = Controller;