import { Router } from 'express';
import { getOrders, createOrder, getOrder, editOrder, deleteOrder } from "../controllers/order.js";

const orderRoutes = Router();

orderRoutes.route("/")
    .get(getOrders)
    .post(createOrder)
    ;

orderRoutes.route("/:id")
    .get(getOrder)
    .put(editOrder)
    .delete(deleteOrder)
    ;

export default orderRoutes;