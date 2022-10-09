import express, { Request, Response } from "express";
import { body } from "express-validator";
// import jwt from "jsonwebtoken";

import {
  BadRequestError,
  requiredAuth,
  validateRequest,
} from "@rezatickets/common";

const router = express.Router();

router.post(
  "/api/tickets",
  // [
  //   body("email").isEmail().withMessage("Email must be valid"),
  //   body("password")
  //     .trim()
  //     .isLength({ min: 4, max: 20 })
  //     .withMessage("Password must be between 4 and 20 characters"),
  // ],
  // validateRequest,
  requiredAuth,
  async (req: Request, res: Response) => {
    // const { email, password } = req.body;
    // const existingUser = await User.findOne({ email });
    // if (existingUser) throw new BadRequestError("Email in use");

    // const user = User.build({ email, password });
    // await user.save();

    // //Generate JWT
    // const userJwt = jwt.sign(
    //   {
    //     id: user.id,
    //     email: user.email,
    //   },
    //   process.env.JWT_KEY!
    // );

    // req.session = { jwt: userJwt };

    res.sendStatus(200);
  }
);

export { router as createTicketRouter };
