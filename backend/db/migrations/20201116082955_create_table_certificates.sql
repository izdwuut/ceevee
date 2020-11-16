-- migrate:up
CREATE TABLE certificates (
    id UUID PRIMARY KEY,
    certificate varchar(255),
    issuer varchar(255),
    valid_until date,

    cv_id UUID NOT NULL
)
-- migrate:down
DROP TABLE certificates
