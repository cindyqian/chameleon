DROP DATABASE
IF EXISTS chameleon;

CREATE DATABASE chameleon;

CREATE USER root
WITH ENCRYPTED PASSWORD 'password';
\c chameleon;

CREATE TABLE photographers
{
    id SERIAL PRIMARY KEY,
    profilePic VARCHAR,
    name VARCHAR,
    location VARCHAR,
    rate VARCHAR,
    phone VARCHAR,
    email VARCHAR,
    website VARCHAR,
    description VARCHAR
    tags text[]
};