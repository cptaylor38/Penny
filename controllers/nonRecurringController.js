const db = require('../models');

module.exports = {
  display: function (req, res) {
    let category = req.params.category;
    db.User.findOne({ _id: req.params.id })
      .populate('nonRecurring')
      .then((data) => {
        let filteredData = data.nonRecurring.filter((item) => {
          if (item.category.toLowerCase() === category) return item;
        });
        res.json(filteredData);
      });
  },

  create: function (req, res) {
    const NonRecurring = {
      category: req.body.category,
      title: req.body.title,
      purchase_date: req.body.purchase_date,
      amount: req.body.amount,
      purchase_location: req.body.purchase_location,
      url: req.body.url,
      description: req.body.description,
    };

    db.NonRecurring.create(NonRecurring)
      .then(function (dbNonRecurring) {
        return db.User.findOneAndUpdate(
          { _id: req.body.id },
          { $push: { nonRecurring: dbNonRecurring } },
          { new: true }
        );
      })
      .then(function (dbUser) {
        res.json(dbUser);
      })
      .catch(function (err) {
        res.json(err);
      });
  },

  update: function (req, res) {
    db.NonRecurring.findOneAndUpdate(
      { _id: req.body.id },
      {
        category: req.body.category,
        title: req.body.title,
        purchase_date: req.body.purchase_date,
        amount: req.body.amount,
        purchase_location: req.body.purchase_location,
        url: req.body.url,
        description: req.body.description,
      },
      { new: true }
    ).then((result) => res.json(result));
  },

  delete: function (req, res) {
    db.NonRecurring.findByIdAndDelete({ _id: req.params.id })
      .then((result) => res.json(result))
      .catch((err) => console.log(err));
  },

  create_multiple: async function (req, res) {
    try {
      let new_charges = await db.NonRecurring.insertMany(charges_array);
      let updated_profile = await db.User.findOneAndUpdate(
        { _id: req.body.id },
        { $push: { nonRecurring: new_charges } },
        { new: true }
      );
      res.json(updated_profile);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};
