import { injectable, inject } from "inversify";
import { Client } from "pg";
import IDataRepository from "./IDataRepository";
import Query from "./Query";
import Data from "../Models/Data";
import ServiceIdentifier from "../Constants/ServiceIdentifier";

@injectable()
class DataRepository implements IDataRepository {

    constructor(
        @inject(ServiceIdentifier.PGClient) private db: Client
    ) {
        this.db = db;
        this.db.connect();
    }

    async getById(id: number): Promise<Data> {
        const { rows: data, rowCount } = await this.db.query(Query.DATA_GET_BY_ID, [id]);
        return data[0];
    }

    async list(): Promise<Data[]> {
        const { rows: data } = await this.db.query(Query.DATA_LIST);
        return <Data[]>data;
    }

    async delete(id: number): Promise<void> {
        await this.db.query(Query.DATA_DELETE, [id]);
    }

    async insert(data: Data): Promise<Data> {
        const { id, startDate, endDate, city, color, price, status } = data;
        const { rows: inserted } = await this.db.query(Query.DATA_INSERT, [id,
            city,
            startDate,
            endDate,
            price,
            status,
            color
        ]);
        return <Data>(inserted[0]);
    }
    async update(data: Data): Promise<Data> {
        const { id, startDate, endDate, city, color, price, status } = data;
        const { rows: updated } = await this.db.query(Query.DATA_UPDATE, [
            city,
            startDate,
            endDate,
            price,
            status,
            color,
            id
        ]);
        return updated[0];
    }
}

export default DataRepository;