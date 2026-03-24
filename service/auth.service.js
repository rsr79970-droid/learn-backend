import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js"
import bcrypt from "bcryptjs"

class AuthService {
    async register({ name, email, password }) { 
        const existingUser = await userModel.findOne({ email })
        if (existingUser) {
            throw new Error("User already exists")
        }
 
        const hashedPassword = await bcrypt.hash(password, 10)
 
        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })
 
        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
        )

        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        }
    }

    async login({ email, password }) {
        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error("Invalid credentials")
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.SECRET_KEY,
            { expiresIn: "2h" }
        )

        return {
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
            token
        }
    }
}

export default new AuthService()