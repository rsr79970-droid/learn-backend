import { Router } from "express"
import usersController from "../controller/users.controller.js"

export const usersRoutes = () => {
    const router = Router()

    router.get("/", usersController.getAll)
    router.get("/:id", usersController.getById)
    router.post("/", usersController.create)
    router.patch("/:id", usersController.update)
    router.delete("/:id", usersController.delete)

    return router
}