DROP DATABASE
IF EXISTS chameleon;

CREATE DATABASE chameleon;

/* CREATE USER root
WITH ENCRYPTED PASSWORD 'password';
\c chameleon; */

CREATE TABLE photographers
(
    id SERIAL PRIMARY KEY,
    profilePic VARCHAR,
    name VARCHAR,
    location VARCHAR,
    rate VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    website VARCHAR,
    description VARCHAR,
    /* idk how to do tags cause this cant be an array and jane said not to do a separate
    table for tags yet cause its hard aajdkfsl tags text [] */
);