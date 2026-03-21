class UsersService {
    users = [
        {
            id: 1,
            name: "User 1",
            email: "user1@user1.com",
            password: "123456"
        }
    ]

    getAll() {
        return this.users
    }

    getById(id) {
        const user = this.users.find(u => u.id === Number(id))

        if (!user) throw new Error("User not found")

        return user
    }

    create(data) {
        const { name, email, password } = data

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        const newUser = { id: Date.now(), name, email, password }

        this.users.push(newUser)

        return newUser
    }

    update(id, data) {
        const { name, email, password } = data

        const user = this.users.find(u => u.id === Number(id))

        if (!user) throw new Error("User not found")

        user.name = name ?? user.name
        user.email = email ?? user.email
        user.password = password ?? user.password

        return user
    }

    delete(id) {
        const index = this.users.find(u => u.id === Number(id))

        if (index === -1) throw new Error("User not found")

        const deleteUser = this.users[index]
        this.users.splice(index, 1)

        return deleteUser
    }
}

export default new UsersService()