import express, { Request, Response } from "express";
import dotenv from "dotenv";
import logger from "pino";
import mongoose from "mongoose";
import { Attribute, AssignedAttributes, Product, ProductType } from "./models";
import router from "./routes";

const Log = logger();
dotenv.config();

const app = express();
const port = process.env.PORT;
const CONNECTION_STRING = process.env.CONNECTION_STRING as string;

mongoose.connect(CONNECTION_STRING);

app.use("/api", router);

app.listen(port);
