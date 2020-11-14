-- migrate:up
CREATE TABLE cvs (
    id UUID PRIMARY KEY,
)
-- migrate:down
DROP TABLE cvs
