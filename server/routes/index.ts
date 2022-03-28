import express, { Request, Response } from "express";
import logger from "pino";

const log = logger();

const router = express.Router();

router.get("/", (req: Request, res: Response) => {});

export default router;
