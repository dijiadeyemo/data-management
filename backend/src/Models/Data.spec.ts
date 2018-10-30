import Data from "./Data";

describe("Data", () => {

    it("should have data properties", () => {
        const data: Data = {
            id: 1,
            city: "Neftegorsk",
            startDate: new Date("4/13/2013"),
            endDate: new Date("5/18/2013"),
            price: "55.82",
            status: "Seldom",
            color: "#fd4e19"
        };
        expect(data.city).toEqual("Neftegorsk");
    });
});