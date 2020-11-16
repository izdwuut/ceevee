-- migrate:up
CREATE TABLE skills (
    id UUID PRIMARY KEY,
    skill varchar(255),
    description varchar(255),

    cv_id UUID NOT NULL
)
-- migrate:down
DROP TABLE skills
