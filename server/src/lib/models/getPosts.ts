import pool from '../db';

export default async function getPosts(){
    const result = await pool.query(
        "SELECT * FROM posts"
    )

    return result.rows
}
