import pool from "../db/pg.js";

const getOrders = async (req, res) => {
    const { rows: orders } = await pool.query(`select * FROM orders`);

    res.json(orders);
}

const createOrder = async (req, res) => {
    const { price, date, user_id } = req.body;
    if (!price || !date || !user_id)
        return res.json({ error: "missing data" });


    const { rows: order } = await pool.query(
        "INSERT INTO orders (price, date , user_id ) VALUES ($1, $2, $3) RETURNING *",
        [price, date, user_id]
    );

    res.json(order);
}

const getOrder = async (req, res) => {
    const { id } = req.params;
    const { rows: [order] } = await pool.query("select * FROM orders WHERE id = $1", [id]);

    res.json(order);
}

const editOrder = async (req, res) => {
    const { price, date, user_id } = req.body;
    const { id } = req.params;

    if (!price || !date || !user_id || !id)
        return res.json({ error: "missing data" });


    const { rows: order } = await pool.query(
        "UPDATE orders SET price = $1, date  = $2, user_id  = $3 WHERE id = $4 RETURNING *",
        [price, date, user_id, id]
    );

    res.json(order);
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    const { rows: order } = await pool.query("DELETE FROM orders WHERE id = $1", [id]);

    res.json(order);
}

export { getOrders, createOrder, getOrder, editOrder, deleteOrder };
