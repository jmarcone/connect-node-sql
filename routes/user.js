import { Router } from 'express';
import { getUsers, createUser, getUser, editUser, deleteUser } from "../controllers/user.js";

const userRoutes = Router();

userRoutes.route("/")
    .get(getUsers)
    .post(createUser)
    ;

userRoutes.route("/:id")
    .get(getUser)
    .put(editUser)
    .delete(deleteUser)
    ;

export default userRoutes;