var Todo = require('./todo.model');

var Controller = {

    getItems: function(req, res, next) {
        try {
            Todo.find({
                user_id: req.user.id
            }, function(err, todos) {
                if (err) {
                    next(err);
                } else {
                    res.status(200).json(todos);
                }
            });
        } catch (e) {
            var error = new Error(e);
            error.message = "req.user does not exist.";
            next(error);
        }
    },

    addItem: function(req, res, next) {
        Todo.create({
            user_id: req.user._id,
            todo: req.body.todo
        }, function(err) {
            if (err) {
                next(err);
            } else {
                res.status(201).end();
            }
        });

    },

    updateItem: function(req, res) {

    },

    deleteItem: function(req, res) {

    }

};

module.exports = Controller;