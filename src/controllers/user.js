import express from 'express';
const router = express.Router();
import { authenticate } from '../../utils/common.js';

router.get("/",authenticate ,(req, res) => {
    console.log("API hit from process:", process.pid);
    res.send("API hit from process:"+process.pid);
});




export default router;
