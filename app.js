import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js"
import { PORT } from "./config/env.js"
import UserRouter from "./routes/user.routes.js"
import connectToDatabase from "./database/mongodb.js";
const app = express();

//const PORT = process.env.PORT || 3000
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", UserRouter);
app.get("/api/users", (req, res) => {
  
  res.send("<h1>Hello, Express.js Server!</h1>");
});
 
//let port = PORT;
app.listen(PORT, async() => {
  console.log(`listening start at ${PORT}`);
  await connectToDatabase();
});













// app.get('/about', (req, res) => {
//     res.send("This is about page")
//     console.log("about start")
// })
// app.get('/contact', (req, res) => {
//     res.send("This is contact page")
//     console.log("contact start")
// })

// const event = new Promise((resolve, reject) => {
//   const name = "John"
//   if (name == "Ashe") {
//     resolve(name);
//   } else {
//     reject("Name is not correct: it's "+name)
//   }
// })

// event.then((name) => {
//   console.log(name)
// }).catch((err) => {
//   console.log(err)
// })