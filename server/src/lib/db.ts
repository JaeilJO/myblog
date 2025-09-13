import { Pool } from "pg";

const pool = new Pool({
  user: "myblog",      // PostgreSQL 사용자
  host: "db",   // Docker라면 컨테이너 이름(db)
  database: "myblog",  // db.sql에서 만든 DB 이름
  password: "myblog",  // PostgreSQL 비밀번호
  port: 5432,
});

export default pool;
