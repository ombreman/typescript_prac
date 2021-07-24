var express = require("express");
// import express, { Reqeust, Response } from "express"
var app = express();
app.get("/", function (req, res) {
});
app.listen('3000', function () {
    console.log("Server Running!");
});
