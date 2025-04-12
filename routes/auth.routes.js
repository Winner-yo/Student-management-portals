import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
    res.send({ title: "User SignUp" });
});

authRouter.post("/sign-in", (req, res) => {
    res.send({ title: "User SignIn" })
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "User Sign-out" });
});

export default authRouter;