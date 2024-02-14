import { UsersModel } from "../Model/UserModel.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.find({});
        res.send(users)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findById(id);
        res.send(user)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const newUser = new UsersModel({ name, email, password, role })
        await newUser.save()
        res.status(200).json('Got a POST request!')
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password, role } = req.body
        const user = await UsersModel.findByIdAndUpdate(id, { name, email, password, role });
        res.send("Got a PUT request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findByIdAndDelete(id);
        res.send("Got a DELETE request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}