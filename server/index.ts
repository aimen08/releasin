import express from "express";
import dotenv from "dotenv";
import logger from "pino";
import mongoose from "mongoose";
import router from "./routes";
import cors from "cors";

const Log = logger();
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const port = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING as string;

mongoose.connect(CONNECTION_STRING);

app.use("/api", router);

app.listen(port);
