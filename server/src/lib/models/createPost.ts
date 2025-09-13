import pool from '../db';

export default async function createPost(title: string, content: string, tagId: string){
    const result = await pool.query(
        "INSERT INTO posts (title,content,tag_id) VALUES ($1,$2,$3) RETURNING *",[title, content, tagId]
    )

    return result.rows[0] || null
}
