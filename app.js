import Express, {Router} from "express";
import userRoutes from "./controllers/user.js";
import orderController from "./controllers/order.js";
import cors from "cors";

const app = Express();
const port = process.env.PORT || 8000;

//set up cors and proper POST body managment 
app.use(cors())
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

//Implement routing
app.use("/user/", userRoutes);
app.use("/order/", orderController);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
