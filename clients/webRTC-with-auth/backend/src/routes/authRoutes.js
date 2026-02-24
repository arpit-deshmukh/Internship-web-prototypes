import { Router } from "express";
import passport from "passport";
import { register, login } from "../controllers/authController.js";
import User from "../models/User.js";
import { auth } from "../middleware/authMiddleware.js";
import { signToken } from "../services/tokenService.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user).select("-password");
  res.json(user);
});

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = signToken(req.user);
    const redirect = `${process.env.FRONTEND_URL}/auth?token=${token}`;
    res.redirect(redirect);
  }
);

export default router;
