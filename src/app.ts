import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/userRoutes"
import { errorHandler } from "./middlewares/errorHandler"
import connectDB from "./config/db"
import authRouter from "./routes/authRouter"
import testRouter from "./routes/testRouter"
import classRouter from "./routes/classRouter"
import cookieParser from "cookie-parser"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 1415

// Middleware
app.use(express.json())
app.use(cookieParser())

connectDB()

// Routes
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/tests", testRouter)
app.use("/api/class", classRouter)


// Error handling middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port  http://localhost:${PORT}/api-docs`)
})

export default app
