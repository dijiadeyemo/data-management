import IDataRepository from "../repositories/IDataRepository";
import Data from "../models/data";
import { inject, injectable } from "inversify";
import ServiceIdentifier from "../Constants/ServiceIdentifier";

@injectable()
class DataService {

    constructor(
        @inject(ServiceIdentifier.IDataRepository) private dataRepository: IDataRepository
    ) { }

    async listAll(): Promise<Data[]> {
        return this.dataRepository.list();
    }

    async save(data: Data): Promise<Data> {
        const { id } = data;
        const existing = await this.dataRepository.getById(id);
        if ((<Data>existing)) {
            return this.dataRepository.update(data);
        }
        return this.dataRepository.insert(data);
    }

    async delete(id: number): Promise<void> {
        return this.dataRepository.delete(id);
    }
}

export default DataService;