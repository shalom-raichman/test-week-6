import { Router } from "express"
import { login, logout } from "../controllers/authController"
import { onlySoldiersAndCommanders } from "../middlewares/authMiddlewares"

export const router = Router()

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: login a user
 *     tags: [login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_name:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: String,
 *                 enum: ["soldier", "commander"]
 *           example:
 *             user_name: "johndoe"
 *             password: "secretpassword123"
 *             area: "center"
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/login", login)

router.post("/logout", onlySoldiersAndCommanders, logout)

