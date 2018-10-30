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

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.set("port", process.env.PORT || 3000);

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