import express from "express"
import dotenv from "dotenv"
import postRouter from "./routes/postRoutes"
import userRouter from "./routes/userRoutes"
import { errorHandler } from "./middlewares/errorHandler"
import connectDB from "./config/db"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

connectDB()

// Routes
app.use("/api/auth", authRouter)
app.use("/api/users", userRouter)
app.use("/api/tests", testRouter)
app.use("/api/class", classRouter)


// Error handling middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

export default app
