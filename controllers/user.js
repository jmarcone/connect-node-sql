import { Router } from 'express';
import { getUsers, createUser, getUser, editUser, deleteUser, findByName } from "../models/user.js";

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

userRoutes.route("/find-by-name/:name", findByName)    
export default userRoutes;