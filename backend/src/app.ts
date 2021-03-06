import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import DataController from "./Controllers/DataController";
import container from "./Config/installer";
import ServiceIdentifier from "./Constants/ServiceIdentifier";
import bodyParser = require("body-parser");


// composition
const dataController: DataController = container.get(ServiceIdentifier.DataController);

const app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(function (req: Request, res: Response, next: () => any) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || "0.0.0.0");

app.get("/data", (request: Request, response: Response) => {
    dataController.get(request, response);
});

app.post("/data", (request: Request, response: Response) => {
    dataController.post(request, response);
});

app.put("/data/:id", (request: Request, response: Response) => {
    dataController.put(request, response);
});

app.delete("/data/:id", (request: Request, response: Response) => {
    dataController.delete(request, response);
});


export default app;