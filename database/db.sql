
DROP DATABASE IF EXISTS greenfield_reviews;

CREATE DATABASE greenfield_reviews;

\c greenfield_reviews;

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  rating INTEGER,
  date timestamp,
  summary VARCHAR,
  body VARCHAR,
  recommend BOOLEAN,
  reported BOOLEAN DEFAULT FALSE,
  reviewer_name VARCHAR,
  reviewer_email VARCHAR,
  response VARCHAR DEFAULT '',
  helpfulness INTEGER DEFAULT 0
);

CREATE TABLE characteristics (
  id SERIAL PRIMARY KEY,
  product_id INTEGER,
  name VARCHAR
);

CREATE TABLE review_characteristic (
  id SERIAL PRIMARY KEY,
  characteristic_id INTEGER,
  review_id INTEGER,
  value INTEGER
);

CREATE TABLE photos (
  id SERIAL PRIMARY KEY,
  review_id INTEGER,
  url VARCHAR
);