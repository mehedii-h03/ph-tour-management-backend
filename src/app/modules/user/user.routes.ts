import { Router } from "express";
import { userController } from "./user.controller";

const routes = Router();

routes.post("/register", userController.createUser);
routes.get("/all-users", userController.getAllUser);

export const userRoutes = routes;
