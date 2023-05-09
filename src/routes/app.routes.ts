import express from "express";
import * as appController from '../controllers/app.controller';

export const router = express.Router();

router.get(`/health`, appController.healthCheck);