import express from 'express';
import fs from 'fs';
import connectDb from './schemas/index.js'
import userRouter from "./routes/user.routes.js";
import productRouter from './routes/product.routes.js';
import path from 'path'
import kakaopayRoutes from './routes/kakaopay.routes.js'
import config from './config.js'
import cors from 'cors'

fs.readdir('uploads', (error) => {
  if (error) {
      fs.mkdirSync('uploads');
  }
})

connectDb()

const app = express();

app.use(cors())
app.use(express.static(path.join(process.cwd(), 'dist')))
// app.use(bodyParser.urlencoded({ extended: true }))

// app.use('/', indexRouter);
app.use('/', kakaopayRoutes)
app.use('/api/users',userRouter)
app.use('/api/product', productRouter)

app.listen(config.port, () => {
  console.info('Server started on port %s.', config.port)
})

