import express, { Request, Response } from "express";
import mongoose from "mongoose";
import logger from "pino";
import { AssignedAttributes, Product, ProductType } from "../models";

const log = logger();

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await Product.find();
  // log.info(result);

  res.json({ result });
});

router.get("/types", async (req: Request, res: Response) => {
  const result = await ProductType.find();
  // log.info(result);

  res.json({ result });
});

router.post("/addProduct", async (req: Request, res: Response) => {
  const assigned_attributes = req.body.assigned_attributes.map((item: any) => {
    return {
      attribute_value: item.attribute_value._id,
    };
  });
  const result = await AssignedAttributes.insertMany(assigned_attributes);

  await Product.insertMany([
    {
      name: req.body.name,
      created_at: new Date(req.body.created_at),
      product_type: req.body.product_type._id,
      assigned_attributes: result.map((item: any) => {
        return "" + item["_id"];
      }),
    },
  ]);
  res.json({ status: "ok" });
});

router.post("/editProduct", async (req: Request, res: Response) => {
  const assigned_attributes = req.body.assigned_attributes.map((item: any) => {
    return {
      attribute_value: item.attribute_value._id,
    };
  });
  const result = await AssignedAttributes.insertMany(assigned_attributes);

  await Product.findByIdAndUpdate(req.body._id, {
    name: req.body.name,
    created_at: new Date(req.body.created_at),
    product_type: req.body.product_type._id,
    assigned_attributes: result.map((item: any) => {
      return "" + item["_id"];
    }),
  });
  res.json({ status: "ok" });
});

export default router;
