const db = require('../models');
const router = require('express').Router();
const isAuthenticated = require('../utils/middleware').isAuthenticated;
/**
 * Collected - Read All
 */
router.get('/', isAuthenticated, function (req, res) {
    // we can pass in things in the query of a REST call!
    db.Collected.find({ user: req.user._id })
        .populate('user')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Collected - Read One
 */
router.get('/:id', isAuthenticated, function (req, res) {
    db.Collected.findById(req.params.id)
        .populate('user')
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Collected - Create
 * Notice how we are also taking in the User Id! Important!
 * We need the isAuthenticated middleware in the route to have a user in the request
 */
router.post('/', isAuthenticated, function (req, res) {
    db.Collected.find({
        user: req.user._id,
        'comic.id': req.body.comic.id,
    })
        .then(found => {
            console.log(found, req.body.comic.id);
            if (found.length) {
                res.status(404).send('Already in Collection');
            } else {
                db.Collected.create({
                    user: req.user._id,
                    ...req.body
                })
                    .then(dbModel => res.json(dbModel))
                    .catch(err => res.status(422).json(err));
            }
        });
});

/**
 * Collected - Update
 */
router.put('/:id', isAuthenticated, function (req, res) {
    db.Collected.findByIdAndUpdate(req.params.id, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

/**
 * Collected - Delete
 */
router.delete('/:id', isAuthenticated, function (req, res) {
    db.Collected.findByIdAndDelete(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
});

// Defining methods for the booksController
module.exports = router;
