import usersService from "../service/users.service.js";

class UsersController {
    async getAll(req, res) {
        const users = usersService.getAll()

        res.status(200).json({
            message: "Users lists",
            data: users
        })
    }

    async getById(req, res) {
        const { id } = req.params

        const user = usersService.getById(id)

        res.status(200).json({
            message: "User founded",
            data: user
        })
    }

    async create(req, res) {
        const newUser = usersService.create(req.body)

        res.status(201).json({
            message: `New user created: ${req.body.name}`,
            user: newUser
        })
    }

    async update(req, res) {
        const { id } = req.params

        const updateUser = usersService.update(id, req.body)

        res.status(200).json({
            message: `User updated: ${req.body.name}`,
            user: updateUser
        })
    }

    async delete(req, res) {
        const { id } = req.params

        const deleteUser = usersService.delete(id)

        res.status(204).json({
            message: `User deleted: ${req.body.name}`,
            user: deleteUser
        })
    }
}

export default new UsersController()