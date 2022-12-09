const Engineer = require("../lib/Engineer");

describe("Engineer Test", () => {
    describe("getGithub", () => {
        it("Can set Engineer Github", () => {
            const testGithub = "jeffGithub";
            const test = new Engineer("Jeff", 5, "testEmail@test.com", testGithub);
            expect(test.github).toBe(testGithub);
        });
    });

    describe("getRole Engineer", () => {
        it("Can get 'new' role of Engineer", () => {
            const testNewRole = "Engineer";
            const test = new Engineer("Jeff", 5, "testEmail@test.com", "jeffGithub");
            expect(test.getRole()).toBe(testNewRole);
        });
    });
});