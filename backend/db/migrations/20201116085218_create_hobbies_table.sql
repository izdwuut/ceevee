-- migrate:up
CREATE TABLE hobbies (
    id UUID PRIMARY KEY,
    hobby varchar(255),

    cv_id UUID NOT NULL
)
-- migrate:down
DROP TABLE hobbies
