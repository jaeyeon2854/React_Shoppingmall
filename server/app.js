import express from 'express';
import fs from 'fs';
import connectDb from './schemas/index.js';
import categoryRouter from "./routes/category.routes.js";
import userRouter from "./routes/user.routes.js";
import productRouter from './routes/product.routes.js';
import cartRouter from './routes/cart.routes.js';
import path from 'path'
import kakaopayRoutes from './routes/kakaopay.routes.js'
import config from './config.js'
import authRouter from './routes/auth.routes.js'
import orderRouter from './routes/order.routes.js'
import cors from 'cors'

fs.readdir('uploads', (error) => {
  if (error) {
      fs.mkdirSync('uploads');
  }
})

connectDb()

const app = express();
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(process.cwd(), 'dist')))
app.use('/images', express.static('uploads/'))

app.use('/', kakaopayRoutes)
app.use('/api/categories',categoryRouter)
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.listen(config.port, () => {
  console.info('Server started on port %s.', config.port)
})