-- migrate:up
CREATE TABLE cvs (
    id UUID PRIMARY KEY,

    user_id UUID NOT NULL,
    details_id UUID NOT NULL
)
-- migrate:down
DROP TABLE cvs
