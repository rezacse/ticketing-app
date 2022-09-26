import express, { Request, Response } from "express";
import { currentUser } from "../middlewares/current-user";
import { requiredAuth } from "../middlewares/required-auth";

const router = express.Router();
router.get(
  "/api/users/current-user",
  currentUser,
  // requiredAuth,
  (req: Request, res: Response) => {
    res.send({ currentUser: req.currentUser || null });
  }
);
export { router as currentUserRouter };
