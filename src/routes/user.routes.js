/* eslint-disable import/no-cycle */
/* eslint-disable import/prefer-default-export */
import express from "express";
import * as userController from "../controllers/user.controller";

const router = express.Router();

const { getUsersWithRankMoreEqual20 } = userController;

router.get(
  "/get_users_with_rank_more_equal_20",
  //   passport.authenticate("jwt", { session: false }),
  getUsersWithRankMoreEqual20
);

export { router };
