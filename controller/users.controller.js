import usersService from "../service/users.service.js"

class UsersController {
    async getAll(req, res) {
        const users = await usersService.getAll()

        res.status(200).json({
            message: "Users list",
            data: users
        })
    }

    async getById(req, res) {
        const { id } = req.params

        const user = await usersService.getById(id)

        res.status(200).json({
            message: "User found",
            data: user
        })
    }

    async create(req, res) {
        const newUser = await usersService.create(req.body)

        res.status(201).json({
            message: `New user created: ${req.body.name}`,
            user: newUser
        })
    }

    async update(req, res) {
        const { id } = req.params

        const updatedUser = await usersService.update(id, req.body)

        res.status(200).json({
            message: `User updated: ${req.body.name}`,
            user: updatedUser
        })
    }

    async delete(req, res) {
        const { id } = req.params

        const deletedUser = await usersService.delete(id)

        res.status(200).json({
            message: `User deleted`,
            user: deletedUser
        })
    }
}

export default new UsersController()