/*
    @author: Karoon Khatiwada
    @date: 12/09/2020
    @description: controller for secret santa application
*/

// module imports
import { Router } from "express";
export const app = Router()

app.get('/', (req, res) => {
    res.status(200).json({message: "Connected to Santa!"})
})

