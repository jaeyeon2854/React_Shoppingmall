import express from 'express';
// import bodyParser from "body-parser";
import connectDb from './schemas/index.js'
import userRouter from "./routes/user.routes.js";
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import path from 'path'
import kakaopayRoutes from './routes/kakaopay.routes.js'
import config from './config.js'
import authRouter from './routes/auth.routes.js'
import cors from 'cors'

connectDb()

const app = express();

app.use("/image", express.static("uploads/"))

app.use(express.json());
app.use(cors())

app.use(express.static(path.join(process.cwd(), 'dist')))
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/', indexRouter);
app.use('/', kakaopayRoutes)
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/product', productRouter)
app.use('/api/addcart', cartRouter)

app.listen(config.port, () => {
  console.info('Server started on port %s.', config.port)
})

