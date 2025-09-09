-- Initialize database schema for myblog
-- This runs automatically on first container init (empty data dir)

CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Seed with a sample post
INSERT INTO posts (title, content)
VALUES ('Hello World', 'This is your first post from init.sql');


