import "dotenv/config"
import express from "express"
import { usersRoutes } from "./routes/users.routes.js"
import mongoose from "mongoose"
import dns from "dns"
import { authRoutes } from "./routes/auth.routes.js"
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express()
app.use(express.json())

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT || 4444

app.use("/users", usersRoutes())
app.use("/auth", authRoutes())

async function bootstrap() {
    try {
        mongoose.connect(MONGO_URI).then(() => console.log("DB connected"))

        app.listen(PORT, () => {
            console.log(`Server: http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Error with connecting: ", error.message)
    }
}

bootstrap()
