import express from 'express';
import postRouter from './routes/post.routes';
import { globalErrorHandler } from '@shared/middlewares/error-handler';


const app = express();
app.get("/", (req, res) => {
  res.send("Hello from Post service!");
});
app.use('/api/products', postRouter)
app.use(globalErrorHandler);

export { app };