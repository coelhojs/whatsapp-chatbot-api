import express from 'express';
import { router as AppRouter } from './routes/app.routes';
import { envConfig } from "./utils/envReader";
envConfig(process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development');

export const app = express();

// Middleware function to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.set('etag', false);
app.use(express.json());

app.use(AppRouter);

