\c todos_dev;

CREATE TABLE IF NOT EXISTS todos (
  id SERIAL PRIMARY KEY,
  title TEXT,
  status VARCHAR(255),
  category VARCHAR(255)
);
