-- migrate:up
CREATE TABLE details (
    id UUID PRIMARY KEY,
    email boolean NOT NULL DEFAULT FALSE,
    first_name boolean NOT NULL DEFAULT FALSE,
    middle_name boolean NOT NULL DEFAULT FALSE,
    last_name boolean NOT NULL DEFAULT FALSE,
    mobile boolean NOT NULL DEFAULT FALSE,
    country boolean NOT NULL DEFAULT FALSE,
    city boolean NOT NULL DEFAULT FALSE,
    driving_license boolean NOT NULL DEFAULT FALSE,
    birth_date boolean NOT NULL DEFAULT FALSE,
    position varchar(255)
)
-- migrate:down
DROP TABLE details