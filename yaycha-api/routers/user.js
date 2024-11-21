const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const prisma = require("../prismaClient");
const { fi } = require("@faker-js/faker");

router.get("/users", async(req, res) => {
    const data = await prisma.user.findMany({
        include: { posts: true, comments: true },
        orderBy: {id: "desc"},
        take: 20,
    });

    res.json(data);
});

router.get("/users/:id", async(req, res) => {
    const {id} = req.params;

    const data = await prisma.user.findFirst({
        where: {id: Number(id)},
        include: { posts: true, comments: true },
    });

    res.json(data);
});

router.post("/users", async(req, res) => {
    const { name, username, bio, password } = req.body;

    if(!name || !username || !password ) {
        return res.status(400).json({ msg: "name, username and password required" });
    }

    const hash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
        data: { name, username, password: hash, bio },
    });

    res.json(user);
});

router.post("/login", async(req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ msg: "username and password required "});
    }
    try{

         const user = await prisma.user.findUnique({
        where: { username },
    });

    if(!user){
        return  res.status(401).json({ msg: "incorrect username or password "});
    }

    const isMatch = await bcrypt.compare(password, user.password);
         if(!isMatch){
        return  res.status(401).json({ msg: "incorrect username or password "});
    }

    const tokenPayload = { id: user.id, username: user.username };
    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET);

    const { password: _, ...userWithoutPassword } = user;
    return  res.json({ token, user: userWithoutPassword });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ msg: "An error occurred" });
    }  
});

module.exports = { userRouter: router };