import Express from "express";
import userRoutes from "./routes/user.js";
import orderRoutes from "./routes/order.js";
import cors from "cors";

const app = Express();
const port = process.env.PORT || 8000;

app.use(cors())


app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/user/", userRoutes);
app.use("/order/", orderRoutes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
