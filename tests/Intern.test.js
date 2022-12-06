const Intern = require("../lib/Intern");

describe("Intern Test", () => {
    describe("getSchool", () => {
        it("Can set Intern Github", () => {
            const testSchool = "Test School";
            const test = new Intern("Jeff", 5, "testEmail@test.com", testSchool);
            expect(test.school).toBe(testSchool);
        });
    });

    describe("getRole Intern", () => {
        it("Can get 'new' role of Intern", () => {
            const testNewRole = "Intern";
            const test = new Intern("Jeff", 5, "testEmail@test.com", "jeffGithub");
            expect(test.getRole()).toBe(testNewRole);
        });
    });
});