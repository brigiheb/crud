CREATE database perncrud;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    jobcategory VARCHAR(255),
    experience INTEGER
);