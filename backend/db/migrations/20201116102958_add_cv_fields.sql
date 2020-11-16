-- migrate:up
ALTER TABLE cvs ADD COLUMN gdpa text;
ALTER TABLE cvs ADD COLUMN name varchar(255);

-- migrate:down
ALTER TABLE cvs DROP COLUMN gdpa;
ALTER TABLE cvs DROP COLUMN name;

