const reviewsETL = require('./reviewsETL.js');
const characteristicsETL = require('./characteristicsETL');
const characteristicReviewsETL = require('./characteristicReviewsETL');
const photosETL = require('./photosETL');
const createSchema = require('./schema.js');
const transformDB = require('./transform.js');
const pool = require('./index.js');

createSchema()
    .then((data) => {
        console.log(data);
        console.log('starting reviews ETL');
        return reviewsETL();
    })
    .then((data) => {
        console.log(data);
        console.log('starting characteristics ETL');
        return characteristicsETL();
    })
    .then((data) => {
        console.log(data);
        console.log('starting characteristic reviews ETL');
        return characteristicReviewsETL();
    })
    .then((data) => {
        console.log(data)
        console.log('starting photos ETL');
        return photosETL();
    })
    .then((data) => {
        console.log(data);
        console.log('transforming database');
        return transformDB();
    })
    .then((data) => {
        console.log(data);
        console.log('ETL complete');
        pool.end();
        return data;
    })
    .catch(err => console.log('ETL error: ', err));