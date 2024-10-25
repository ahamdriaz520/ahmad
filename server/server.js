import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbconn from "./config/dbconn.js";
import router from "./routers/UserRouter.js";
import morgan from "morgan";

import colors from "colors";
import stripe from "stripe";
("sk_test_51Oo4LjHsVtjP0aA9H3PDJZvU39qd35qMQkBUulQJSJ5L9AvjPzvVkngWeuxoT5mixmOkm8CM86YtV382GRRhzTo600z6Jh1iqt");
dotenv.config();

dbconn();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(router);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on ${port}`.bgCyan.bold);
});
