const fs = require('fs');
const path = require('path');
const Data = requre('./../db/mongo/mock-data.js');

const apiController = {};

apiController.search = (req, res, next) => {
  Data.find({})
}