import { Router } from "express"
import authController from "../controller/auth.controller.js"

export const authRoutes = () => {
    const router = Router()

    router.post("/register", authController.register)
    router.post("/login", authController.login)

    return router
}