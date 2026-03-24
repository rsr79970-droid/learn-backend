import authService from "../service/auth.service.js"

class AuthController {
    async register(req, res) {
        try {
            const { name, email, password } = req.body

            if (!name || !email || !password) {
                return res.status(400).json({
                    message: "Name, email and password are required"
                })
            }

            const data = await authService.register({
                name,
                email,
                password
            })

            return res.status(201).json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }

    async login(req, res) {
        try {
            const { email, password } = req.body

            if (!email || !password) {
                return res.status(400).json({
                    message: "Email and password are required"
                })
            }

            const data = await authService.login({
                email,
                password
            })

            return res.status(200).json(data)
        } catch (error) {
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export default new AuthController()