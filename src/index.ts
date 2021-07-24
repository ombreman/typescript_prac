const express = require("express")
// import express, { Reqeust, Response } from "express"
const app = express()

app.get("/", (req: Request, res: Response) => {
})

app.listen('3000', (): void => {
    console.log("Server Running!")
})