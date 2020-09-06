const pool = require('../index.js');
const reviewsETL = require('./reviewsETL.js');
const characteristicsETL = require('./characteristicsETL');
const characteristicReviewsETL = require('./characteristicReviewsETL');
const photosETL = require('./photosETL');

console.log('starting reviews ETL');
reviewsETL()
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
        console.log('finished ETL')
    })
    .catch(err => console.log('ETL error: ', err));