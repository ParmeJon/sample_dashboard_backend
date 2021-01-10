/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
require('dotenv').config();
const seeder = require('mongoose-seed');
const seedData = require('./accounts');

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
const dbname = process.env.DBNAME;

const mongoURI = `mongodb+srv://${username}:${password}@sample-dashboard.kolop.mongodb.net/${dbname}?retryWrites=true&w=majority`;

const modifiedCreatedSeedData = seedData.map((obj) => {
  obj.seedId = obj.id;
  delete obj.id;
  obj.createdAt = obj.created;
  delete obj.created;
  return obj;
});

const data = [
  {
    model: 'Account',
    documents: modifiedCreatedSeedData,
  },
];

seeder.connect(mongoURI, () => {
  seeder.loadModels([
    `${__dirname}/../models/Account`,
  ]);

  seeder.clearModels(['Account'], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) {
        return console.log('Seed Error: ', err);
      }
      if (done) {
        return console.log('Seed Finished', done);
      }
      return seeder.disconnect();
    });
  });
});
