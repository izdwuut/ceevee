-- migrate:up
CREATE TABLE users (
    id UUID PRIMARY KEY,
    email varchar(255) UNIQUE NOT NULL,
    hashed_password varchar(255) NOT NULL,
    is_active boolean NOT NULL DEFAULT FALSE,
    is_superuser boolean NOT NULL DEFAULT FALSE,
    first_name varchar(255) NOT NULL,
    middle_name varchar(255),
    last_name varchar(255) NOT NULL,
    mobile varchar(255),
    country varchar(255),
    city varchar(255),
    driving_license varchar(255),
    birth_date varchar(255)
)
-- migrate:down
DROP TABLE users
