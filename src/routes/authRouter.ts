const router = require("express").Router();
const { login, logout } = require("../controllers/authController");
const {
    onlySoldiersAndCommanders,
} = require("../middlewares/aouthMiddlewares");

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
router.post("/login", login);

router.post("/logout", onlySoldiersAndCommanders, logout);

module.exports = router;
