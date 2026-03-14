import "dotenv/config"
import express from "express"
import cors from 'cors'
import { errorHandler, urlNotFound } from "./middleware/errorHandler.js"
import projectRoutes from './routes/routes.js'

const app = express()

app.use(cors())

app.use('/projects', projectRoutes)

// error 
app.use(errorHandler)
// error url not found
app.use(urlNotFound)


const PORT = process.env.PORT || 9000
if(process.env.NODE_ENV !== "production") {
    app.listen(PORT, () => {
        console.log(`📊 API running at http://localhost:${PORT}`)
    })
}

export default app