const router = require('express').Router();
const db = require('../../models');

router.route('/:id').get((req, res) => {
  db.User.findOne({ _id: req.params.id })
    .populate('subscriptions')
    .populate('prescriptions')
    .populate('nonRecurring')
    .populate('utilities')
    .populate('loans')
    .exec((err, profile) => {
      if (err) throw err;
      res.json(profile);
    });
});

module.exports = router;
