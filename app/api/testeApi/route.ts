const pg = require("pg")

const db = new pg.Client({
    user: `postgres`,
    database: `mais_um_teste`,
    password: `kawasaki8`,
    port: 5432
})

db.connect()

export async function GET(request: Request) {
    const users = await db.query("SELECT * FROM tabela_testes")
    console.log(users)
    return new Response(JSON.stringify(users.rows), {
        status: 200,
        headers: { 'Content-Type': 'application/json'}
    })
}