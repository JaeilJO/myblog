import pool from '../db';

export default async function createTag(tagName:string){
    const result = await pool.query(
        "INSERT INTO tags (name) VALUES ($1) RETURNING *",[tagName]
    )

    return result.rows[0]?.id || null
}
