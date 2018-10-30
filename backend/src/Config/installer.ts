import "reflect-metadata";
import { Container } from "inversify";
import { Client } from "pg";

import IDataRepository from "../Repositories/IDataRepository";
import DataRepository from "../Repositories/DataRepository";
import DataService from "../Services/DataService";
import DataController from "../Controllers/DataController";
import ServiceIdentifier from "../Constants/ServiceIdentifier";


const container = new Container();
container.bind<IDataRepository>(ServiceIdentifier.IDataRepository).to(DataRepository);
container.bind<DataService>(ServiceIdentifier.DataService).to(DataService);
container.bind<DataController>(ServiceIdentifier.DataController).to(DataController);
container.bind<Client>(ServiceIdentifier.PGClient).toConstantValue(new Client());

export default container;