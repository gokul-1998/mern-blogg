import express from 'express';
import { google, signin, signup } from '../controllers/auth.controller.js';
import { googleCheck } from '../controllers/auth.controller.js';

const router = express.Router();


router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google)
router.post('/google/check', googleCheck);
export default router;