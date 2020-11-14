-- migrate:up
CREATE TABLE experience (
    id UUID PRIMARY KEY,
    position varchar(255),
    company varchar(255),
    city varchar(255),
    country varchar(255),
    from date,
    to date,
    description text

    cv_id UUID
)
-- migrate:down
DROP TABLE experience
