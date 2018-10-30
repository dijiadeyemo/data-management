import Data from "../models/Data";

interface IDataRepository {

    getById(id: number): Promise<Data | null>;

    list(): Promise<Data[]>;

    delete(id: number): Promise<void>;

    insert(data: Data): Promise<Data>;

    update(data: Data): Promise<Data>;
}

export default IDataRepository;