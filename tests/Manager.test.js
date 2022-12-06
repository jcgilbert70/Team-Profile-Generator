const Manager = require("../lib/Manager");

describe("Manager Test", () => {
    describe("getOfficeNumber", () => {
        it("Can set Manager office number", () => {
            const testOfficeNumber = "101";
            const test = new Manager("Jeff", 5, "testEmail@test.com", testOfficeNumber);
            expect(test.officeNumber).toBe(testOfficeNumber);
        });
    });

    describe("getRole Manager", () => {
        it("Can get 'new' role of Manager", () => {
            const testNewRole = "Manager";
            const test = new Manager("Jeff", 5, "testEmail@test.com", "jeffGithub");
            expect(test.getRole()).tobe(testNewRole);
        });
    });
});