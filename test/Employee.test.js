const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can generate Employee", () => {
        const test = new Employee();
        expect(typeof(test)).toBe("object");
    });

    it("Can set employee name", () => {
        const testName = "Jeff";
        const test = new Employee(testName);
        expect(test.name).toBe(testName);
    });

      it("Can set employee email", () => {
        const testEmail = "testEmail@test.com";
        const test = new Employee("Jeff", 5, testEmail);
        expect(test.email).toBe(testEmail);
    });

    it("Can set employee id", () => {
        const testId = 5;
        const test = new Employee("Jeff", testId);
        expect(test.id).toBe(testId);
    });

    describe("getName", () => {
        it("Can get employee name", () => {
            const testName = "Jeff";
            const test = new Employee(testName);
            expect(test.getName()).toBe(testName);
        });
    });
        
    describe("getId", () => {
        it("Can get employee id", () => {
            const testId = 5;
            const test = new Employee("Jeff", testId);
            expect(test.getId()).toBe(testId);
        });
    });
        
    describe("getEmail", () => {
        it("Can get employee email", () => {
            const testEmail = "testEmail@test.com";
            const test = new Employee("Jeff", 5, testEmail);
            expect(test.getEmail()).toBe(testEmail);
        });
    });
        
    describe("getRole", () => {
        it("Can get employee role, test will return New Employee", () => {
            const testRole = "Employee";
            const test = new Employee("Jeff", 5, "testEmail@test.com");
            expect(test.getRole()).toBe(testRole);
        });
    });
    
});