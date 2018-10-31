import "reflect-metadata";
import DataRepository from "./DataRepository";
import { QueryResult, Client } from "pg";
import Query from "./Query";

describe("DataRepository", () => {
    const mockData = [
        {
            "id": 1,
            "city": "Neftegorsk",
            "startDate": new Date("4/13/2013"),
            "endDate": new Date("5/18/2013"),
            "price": "55.82",
            "status": "Seldom",
            "color": "#fd4e19"
        },
        {
            "id": 2,
            "city": "Lancai",
            "startDate": new Date("5/19/2012"),
            "endDate": new Date("11/29/2014"),
            "price": "22.49",
            "status": "Yearly",
            "color": "#ff5055"
        },
    ];

    const mockQueryResult: QueryResult = {
        rows: mockData,
        command: "",
        rowCount: 2,
        oid: 1,
        fields: [],
    };

    const mockQueryResultOneItem: QueryResult = {
        rows: mockData.slice(0, 1),
        command: "",
        rowCount: 1,
        oid: 2,
        fields: [],
    };

    const mockEmptyResult: QueryResult = {
        rows: [],
        command: "",
        rowCount: 0,
        oid: 3,
        fields: [],
    };

    describe("getById()", () => {
        it("should return single model object when found", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockQueryResultOneItem),
                connect: jest.fn(),
            }));

            const repository = new DataRepository(new MockClient());
            const data = await repository.getById(1);

            expect(data).toEqual(mockQueryResult.rows[0]);
        });

        it("should return null when object not found", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockEmptyResult),
                connect: jest.fn(),
            }));

            const repository = new DataRepository(new MockClient());
            const data = await repository.getById(1);

            expect(data).toBeUndefined();
        });
    });



    describe("list()", () => {
        it("should return list of data when found", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockQueryResult),
                connect: jest.fn(),
            }));

            const repository = new DataRepository(new MockClient());
            const data = await repository.list();

            expect(data).toHaveLength(2);
        });
    });

    describe("delete()", () => {
        it("should return single model object when found", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockEmptyResult),
                connect: jest.fn(),
            }));
            const clientInstance = new MockClient();

            const repository = new DataRepository(clientInstance);
            await repository.delete(1);

            expect(clientInstance.query).toBeCalledWith(Query.DATA_DELETE, [1]);
        });

    });

    describe("create()", () => {
        it("should create a data record", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockQueryResultOneItem),
                connect: jest.fn(),
            }));
            const clientInstance = new MockClient();

            const repository = new DataRepository(clientInstance);
            await repository.insert(mockData[0]);

            expect(clientInstance.query).toBeCalledWith(Query.DATA_INSERT, [
                1,
                "Neftegorsk",
                new Date("2013-04-12T23:00:00.000Z"),
                new Date("2013-05-17T23:00:00.000Z"),
                "55.82",
                "Seldom",
                "#fd4e19",
            ]);
        });

    });

    describe("update()", () => {
        it("should update a data record", async () => {
            const MockClient = jest.fn<Client>(() => ({
                query: jest.fn().mockResolvedValue(mockQueryResultOneItem),
                connect: jest.fn(),
            }));
            const clientInstance = new MockClient();

            const repository = new DataRepository(clientInstance);
            await repository.update(mockData[0]);

            expect(clientInstance.query).toBeCalledWith(Query.DATA_UPDATE, [
                "Neftegorsk",
                new Date("2013-04-12T23:00:00.000Z"),
                new Date("2013-05-17T23:00:00.000Z"),
                "55.82",
                "Seldom",
                "#fd4e19",
                1
            ]);
        });
    });

});