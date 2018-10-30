import { Request, Response } from "express";
import DataService from "../Services/DataService";
import { injectable, inject } from "inversify";
import ServiceIdentifier from "../Constants/ServiceIdentifier";

@injectable()
class DataController {


  constructor(
    @inject(ServiceIdentifier.DataService) private dataService: DataService
  ) { }

  async get(request: Request, response: Response): Promise<void> {
    const dataList = await this.dataService.listAll();
    response.json(dataList);
  }

  async post(request: Request, response: Response): Promise<void> {
    const data = request.body;
    const savedData = await this.dataService.save(data);
    response.json(savedData);
  }

  async put(request: Request, response: Response): Promise<void> {
    const data = request.body;
    const updatedData = await this.dataService.save(data);
    response.json(updatedData);
  }

  async delete(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    await this.dataService.delete(id);
    response.json({});
  }

}

export default DataController;