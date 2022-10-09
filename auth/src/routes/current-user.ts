import express, { Request, Response } from "express";
import { currentUser, requiredAuth } from "@rezatickets/common";

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
