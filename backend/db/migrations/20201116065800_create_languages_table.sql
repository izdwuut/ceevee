-- migrate:up
CREATE TABLE languages (
    id UUID PRIMARY KEY,
    language varchar(255),

    cv_id UUID NOT NULL
)
-- migrate:down
DROP TABLE languages
