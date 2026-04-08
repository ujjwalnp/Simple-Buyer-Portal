import express from 'express';
import { getAllProperties } from '../controllers/property.controller.js';

const router = express.Router();

router.get("/", getAllProperties);

export default router;  