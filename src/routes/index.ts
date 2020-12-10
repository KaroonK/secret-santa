/*
    @author: Karoon Khatiwada
    @date: 12/09/2020
*/

// module imports
import express from "express";

// routers configuration
export const router = express.Router();
var santaRouter = require('./santa').app;

// all following router definition
router.use('/santa', santaRouter);