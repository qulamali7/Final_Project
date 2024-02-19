import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
import 'dotenv/config'
import { userRouter } from './src/Routes/UserRoutes.js';
import { authRoute } from './src/Routes/AuthRoutes.js';
import { postRouter } from './src/Routes/PostRoutes.js';
import { PostModel } from './src/Model/PostModel.js';
import { UsersModel } from './src/Model/UserModel.js';
const app = express()
app.use(cors())
app.use(express.json())

app.use("/assets", express.static('./public/image'))
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/", authRoute)


const categorySchema = new Schema({
    name: String,
});
export const CategoryModel = mongoose.model("categories", categorySchema);


app.get('/category', async (req, res) => {
    try {
        const category = await CategoryModel.find({});
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.post('/category', async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new CategoryModel({ name });
        await newCategory.save();
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postBycategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.find({ CategoryModel: id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithcategory', async (req, res) => {
    try {
        const posts = await PostModel.find().populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postByauthor/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.find({ author: id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithauthorAndcategory', async (req, res) => {
    try {
        const posts = await PostModel.find().populate("author").populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithauthorAndcategory/:id', async (req, res) => {
    try {
        const {id}=req.params
        const posts = await PostModel.findById(id).populate("author").populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})