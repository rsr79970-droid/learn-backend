import userModel from "../models/user.model.js";

class UsersService {
    async getAll() {
        return await userModel.find()
    }

    async getById(id) {
        return await userModel.findById(id)
    }

    async create(data) {
        return await userModel.create(data)
    }

    async update(id, data) {
        return await userModel.findByIdAndUpdate(id, data, { new: true })
    }

    async delete(id) {
        return await userModel.findByIdAndDelete(id)
    }
}

export default new UsersService()
