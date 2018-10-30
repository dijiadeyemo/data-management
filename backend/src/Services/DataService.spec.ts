import "reflect-metadata";
import DataService from "./DataService";
import IDataRepository from "../Repositories/IDataRepository";
import Data from "../Models/Data";

describe("DataService", () => {

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

    describe("list()", () => {

        it("should return all repository records", async () => {
            const RepositoryMock = jest.fn<IDataRepository>(() => ({
                list: jest.fn().mockReturnValue(mockData)
            }));

            const dataService = new DataService(new RepositoryMock());
            const allData: Data[] = await dataService.listAll();

            expect(allData).toEqual(mockData);
        });

    });


    describe("delete()", () => {

        it("should delete data from the repository", async () => {
            const RepositoryMock = jest.fn<IDataRepository>(() => ({
                delete: jest.fn().mockReturnValue("")
            }));
            const mockInstance = new RepositoryMock();

            const dataService = new DataService(mockInstance);
            await dataService.delete(4);

            expect(mockInstance.delete).toBeCalledWith(4);
        });

    });

    describe("save()", () => {

        it("should create data from the repository if its not found", async () => {
            const RepositoryMock = jest.fn<IDataRepository>(() => ({
                getById: jest.fn().mockReturnValue(undefined),
                insert: jest.fn().mockReturnValue(mockData[0]),
                update: jest.fn().mockReturnValue(mockData[1])
            }));
            const mockInstance = new RepositoryMock();

            const dataService = new DataService(mockInstance);
            await dataService.save(mockData[0]);

            expect(mockInstance.insert).toBeCalled();
            expect(mockInstance.update).not.toBeCalled();
        });

        it("should update data from the repository if its found", async () => {
            const RepositoryMock = jest.fn<IDataRepository>(() => ({
                getById: jest.fn().mockReturnValue(mockData[1]),
                insert: jest.fn().mockReturnValue(mockData[0]),
                update: jest.fn().mockReturnValue(mockData[1])
            }));
            const mockInstance = new RepositoryMock();

            const dataService = new DataService(mockInstance);
            await dataService.save(mockData[1]);

            expect(mockInstance.insert).not.toBeCalled();
            expect(mockInstance.update).toBeCalled();
        });

    });

});