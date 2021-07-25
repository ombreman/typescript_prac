// const express = require("express")
import express, { Request, Response } from "express"
const app = express()

app.get("/", (req: Request, res: Response) => {
    res.send('asdf')
})

app.listen('3000', (): void => {
    console.log("Server Running!")
})