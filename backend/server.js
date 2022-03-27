const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors")
const userRouter = require("./routes/userRoutes")

dotenv.config();

const PORT = process.env.PORT || 4200;
const app = express();
connectDB();

app.use(express.json()); //to accept json data;

app.get('/', (req, res) => {
    res.send("APP is running successfully!");
});

app.use('/api/user', userRouter)

app.listen(PORT, console.log(`Server start on PORT ${PORT}`.yellow.bold));