import pool from '../db';

export default async function getPost(postId:string){
    const result = await pool.query(
        "SELECT * FROM posts WHERE id = $1",[parseInt(postId, 10)]
    )

    return result.rows
}
