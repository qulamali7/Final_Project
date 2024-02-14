import { UsersModel } from "../Model/UserModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// export const handleLoginController = async (req, res) => {
//     try {
//         const { username, password } = req.body
//         const user = await UsersModel.findOne({ username })
//         if (!user) {
//             res.send("User Not Found!")
//             return
//         }
//         if (user.password !== password) {
//             res.send("Password not valid")
//             return
//         }
//         var token = jwt.sign({ username, role: user.role }, process.env.JWT_KEY, { expiresIn: '1h' });
//         res.send(token)
//     } catch (error) {
//         res.send(error.message)
//     }
// }
export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).send({ error: "Fill in all fields" })
        }
        const newEmail = email.toLowerCase()
        const user = await UsersModel.findOne({ email: newEmail })
        if (!user) {
            return res.status(401).send({ error: "Invalid credentials" })
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) {
            return res.status(401).send({ error: "Invalid credentials" })
        }

        const { _id: id, name } = user
        console.log(id);
        const token = jwt.sign({ id, name }, process.env.JWT)
        res.status(200).json({ token, id, name })
    } catch (error) {
        return res.status(500).json({ error: "User login failed" })
    }
}

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password, password2 } = req.body
        if (!name || !email || !password) {
            return res.status(401).send({ error: "Fill in all fields" })
        }
        const newEmail = email.toLowerCase()
        const emailExists = await UsersModel.findOne({ email: newEmail })
        if (emailExists) {
            return res.status(401).send({ error: "Email already exixts" })
        }
        if ((password.trim()).length < 6) {
            return res.status(401).send({ error: "Password should be at least 6 characters" })
        }
        if (password != password2) {
            return res.status(401).send({ error: "Password do not match" })
        }

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const newUser = new UsersModel({ name, email: newEmail, password: hash })
        await newUser.save()
        const token = jwt.sign({ email: newUser.email }, process.env.JWT_KEY, { expiresIn: "1h", });
        res.status(201).json(`New User ${newUser.email} resgistered and ${token} `)
    } catch (error) {
        return res.status(500).json({ error: "User registration failed" })
    }
}

// export const handleRegisterController = async (req, res) => {
//     try {
//         const { username, password, role } = req.body;
//         const newUser = new UsersModel({ username, password, role })
//         var token = jwt.sign({ username: newUser.username, role: newUser.role }, process.env.JWT_KEY, { expiresIn: '1h' });
//         await newUser.save()
//         res.send(token)
//     } catch (error) {
//         res.send(error.message)
//     }
// }