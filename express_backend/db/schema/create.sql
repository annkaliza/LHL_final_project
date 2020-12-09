  DROP TABLE IF EXISTS users CASCADE;
  DROP TABLE IF EXISTS messages CASCADE;
  DROP TABLE IF EXISTS milestones CASCADE;
  DROP TABLE IF EXISTS goals CASCADE;
  DROP TABLE IF EXISTS categories CASCADE;
  DROP TABLE IF EXISTS tasks CASCADE;
  
  CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    password VARCHAR(200) NOT NULL,
    email VARCHAR(30) NOT NULL
  );
  
  CREATE TABLE messages(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT NOT NULL, 
    date VARCHAR(250) NOT NULL,
    fromUser INTEGER REFERENCES users(id) ON DELETE CASCADE,
    toUser INTEGER REFERENCES users(id) ON DELETE CASCADE
  );

  CREATE TABLE milestones (
    id SERIAL PRIMARY KEY NOT NULL,
    milestone VARCHAR(150) NOT NULL,
    deadline VARCHAR(100) NOT NULL,
    completed_at VARCHAR(100) DEFAULT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    goal_id INTEGER REFERENCES milestones(id) ON DELETE CASCADE
  );

  CREATE TABLE goals ( 
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    goal VARCHAR(140) NOT NULL,
    deadline VARCHAR(100) NOT NULL
  );

  CREATE TABLE categories (
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL
  );
  
  CREATE TABLE tasks (
    id SERIAL PRIMARY KEY NOT NULL,
    task VARCHAR(100) NOT NULL,
    score FLOAT,
    score_date VARCHAR(100),
    completed BOOLEAN DEFAULT false,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
  );
  
  

