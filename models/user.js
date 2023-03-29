import pool from "../db/pg.js";

const getUsers = async (req, res) => {
    const { rows: users } = await pool.query(`select * FROM users`);

    res.json(users);
}

const createUser = async (req, res) => {
    const { first_name, last_name, age } = req.body;
    if (!first_name || !last_name || !age)
        return res.json({ error: "missing data" });


    const { rows: user } = await pool.query(
        "INSERT INTO users (first_name, last_name, age) VALUES ($1, $2, $3) RETURNING *",
        [first_name, last_name, age]
    );

    res
        .status(201)
        .json(user);
}

const getUser = async (req, res) => {
    const { id } = req.params;
    const { rows: [user] } = await pool.query("select * FROM users WHERE id = $1", [id]);

    res.json(user);
}

const editUser = async (req, res) => {
    const { first_name, last_name, age } = req.body;
    const { id } = req.params;

    if (!first_name || !last_name || !age || !id)
        return res.json({ error: "missing data" });


    const { rows: user } = await pool.query(
        "UPDATE users SET first_name = $1, last_name = $2, age = $3 WHERE id = $4 RETURNING *",
        [first_name, last_name, age, id]
    );

    res.json(user);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const { rows: users } = await pool.query("DELETE FROM users WHERE id = $1", [id]);

    res.json(users);
}

const findByName = async (req, res) => {
    const { name } = req.params;
    const { rows: users } = await pool.query("select * FROM users WHERE name = $1", [name]);

    res.json(users);
}

export { getUsers, createUser, getUser, editUser, deleteUser, findByName };
