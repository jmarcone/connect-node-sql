import pool from "../db/pg.js";

const getOrders = async () => {
    const { rows: orders } = await pool.query(`select * FROM orders`);

    return orders;
}

const createOrder = async (price, date, user_id) => {
    
    if (!price || !date || !user_id)
        return res.json({ error: "missing data" });


    const { rows: order } = await pool.query(
        "INSERT INTO orders (price, date , user_id ) VALUES ($1, $2, $3) RETURNING *",
        [price, date, user_id]
    );

    return order;
}

const getOrder = async (id) => {
    const { rows: [order] } = await pool.query("select * FROM orders WHERE id = $1", [id]);

    return order;
}

const editOrder = async (price, date, user_id, id) => {
    if (!price || !date || !user_id || !id)
        return res.json({ error: "missing data" });


    const { rows: order } = await pool.query(
        "UPDATE orders SET price = $1, date  = $2, user_id  = $3 WHERE id = $4 RETURNING *",
        [price, date, user_id, id]
    );

    return order;
}

const deleteOrder = async (id) => {
       const { rows: order } = await pool.query("DELETE FROM orders WHERE id = $1", [id]);

    return order;
}

export { getOrders, createOrder, getOrder, editOrder, deleteOrder };
