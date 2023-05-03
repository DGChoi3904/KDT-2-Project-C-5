import mariaDB from "mariaDB";

async function main() {
  let conn;
  try {
    conn = await mariaDB.createConnection({
      host: "localhost",
      user: "root",
      password: "xxia1215@@",
      database: "login",
    });
    const rows = await conn.query("SELECT * FROM user");
    console.log(rows);
  } catch (err) {
    throw err;
  } finally {
    if (conn) {
      conn.end("연결성공");
    }
  }
}

main();
