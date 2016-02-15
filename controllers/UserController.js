module.exports = {
    getUserList: function (req, res, next) {
        Users.forge()
        .fetch()
        .then(function (collection){
            res.json({
                success: true,
                data: collection.toJSON()
            })
        })
        .catch(function (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    },

    getSpecificUser: function (req, res, next) {
        User.forge({id: req.params.id})
        .fetch()
        .then(function (user) {
            if (!user) {
                res.status(404).json({
                    success: false,
                    data: {}
                });
            }
            else {
                res.json({
                    success: true,
                    data: user.toJSON()
                });
            }
        })
        .catch(function (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    },

    createUser: function (req, res, next) {
        User.forge({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            gender: req.body.gender
        })
        .save()
        .then(function (user) {
            res.json({
                success: true,
                data: {id: user.get('id')}
            });
        })
        .catch(function (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    },

    editUser: function (req, res, next) {
        User.forge({
            id: req.params.id
        })
        .fetch({require: true})
        .then(function (user) {
            user.save({
                first_name: req.body.firstname || user.get('first_name'),
                last_name: req.body.lastname || user.get('last_name'),
                email: req.body.email || user.get('email'),
                gender: req.body.gender || user.get('gender')
            })
            .then(function () {
                res.json({
                    success: true,
                    message: 'Succeesfully update data of the user'
                });
            })
            .catch(function (err) {
                res.status(500).json({
                    success: false,
                    message: err.message
                });
            })
        })
        .catch(function (err) {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
    },

    deleteUser: function (req, res, next) {
        User.forge({id: req.params.id})
        .fetch({require: true})
        .then(function (user) {
            user.destroy()
            .then(function () {
                res.json({
                    success: true,
                    message: 'Succeesfully deleted a user'
                });
            })
            .catch(function (err) {
                res.status(500).json({
                   success: false,
                   message: err.message 
                })
            })
        })
        .catch(function (err) {
            res.status(500).json({
               success: false,
               message: err.message 
            })
        });
    }
}