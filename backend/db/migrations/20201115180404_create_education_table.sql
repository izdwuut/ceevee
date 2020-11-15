-- migrate:up
CREATE TABLE education (
    id UUID PRIMARY KEY,
    course varchar(255),
    school varchar(255),
    title varchar(255),
    city varchar(255),
    country varchar(255),
    from_date date,
    to_date date,
    description text,

    cv_id UUID NOT NULL
)
-- migrate:down
DROP TABLE education
