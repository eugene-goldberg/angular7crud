const express = require('express');
const app = express();
const indexRoutes = express.Router();

// Require Business model in our routes module
let Index = require('../models/Index');

const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

// Defined store route
indexRoutes.route('/add').post(function (req, res) {
  let index = new Index(req.body);
  index.save()
    .then(index => {
      res.status(200).json({'index': 'index in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
indexRoutes.route('/').get(function (req, res) {
  client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });
});

// Defined edit route
indexRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Index.findById(id, function (err, index){
      res.json(index);
  });
});

//  Defined update route
indexRoutes.route('/update/:id').post(function (req, res) {
    Index.findById(req.params.id, function(err, index) {
    if (!index)
      return next(new Error('Could not load Document'));
    else {
        index.person_name = req.body.person_name;
        index.business_name = req.body.business_name;
        index.business_gst_number = req.body.business_gst_number;

        index.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
indexRoutes.route('/delete/:id').get(function (req, res) {
    Index.findByIdAndRemove({_id: req.params.id}, function(err, index){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = indexRoutes;
