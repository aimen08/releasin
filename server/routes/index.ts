import express, { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "pino";
import { Product } from "../models";

const log = logger();

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await Product.find();
  log.info(result);

  res.json({ result });
});

export default router;
