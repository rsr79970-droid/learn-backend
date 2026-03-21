import express from "express"
import { usersRoutes } from "./routes/users.routes.js"

const app = express()
app.use(express.json())

app.use("/users", usersRoutes())

app.listen(4444, () => {
    console.log("Server: http://localhost:4444")
})