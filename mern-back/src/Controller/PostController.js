import { PostModel } from "../Model/PostModel.js"

export const getAllPost = async (req, res) => {
    try {
        const post = await PostModel.find({})
        res.send(post)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findById(id)
        res.send(post)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { image, title, description, category, author } = req.body;
        const newPost = new PostModel({ image, title, description, category, author })
        await newPost.save()
        res.send('Got a POST request')
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const { image, title, description, category, author } = req.body;
        const post = await PostModel.findByIdAndUpdate(id, { image, title, description, category, author })
        res.send("Got a PUT request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findByIdAndDelete(id)
        res.send("Got a DELETE request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}