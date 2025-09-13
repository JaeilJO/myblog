import pool from '../db';

export default async function getTagId(tagName:string){
    const result = await pool.query(
        "SELECT id FROM tags WHERE name = $1",[tagName]
    )

    return result.rows[0]?.id || null
}
