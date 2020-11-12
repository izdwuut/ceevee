-- migrate:up
CREATE TABLE cvs (
    id UUID PRIMARY KEY,

    details_id UUID NOT NULL
)
-- migrate:down
DROP TABLE cvs
