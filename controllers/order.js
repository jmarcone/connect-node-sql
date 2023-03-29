import { Router } from 'express';
import { getOrders, createOrder, getOrder, editOrder, deleteOrder } from "../models/order.js";

const orderRoutes = Router();

orderRoutes
    .route("/")
    .get(
        (req, res) => {
            getOrders().then(
                order => {
                    res.json(order);
                }
            )
        })

    .post((req, res) => {
        const { price, date, user_id } = req.body;

        createOrder(price, date, user_id)
            .then(
                order => {
                    res
                        .status(201)
                        .json(order);
                }
            )
    })
    ;

orderRoutes
    .route("/:id")
    .get(
        (req, res) => {
            const { id } = req.params;
            getOrder(id).then(
                order => {
                    res.json(order);
                }
            )
        })
    .put((req, res) => {
        const { price, date, user_id } = req.body;
        const { id } = req.params;

        editOrder(price, date, user_id, id)
            .then(
                order => {
                    res.json(order);
                }
            )
    })
    .delete(
        (req, res) => {
            const { id } = req.params;

            deleteOrder(id)
                .then(
                    order => {
                        res.json(order);
                    }
                )
        })
    ;

export default orderRoutes;