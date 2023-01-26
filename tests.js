// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("should never return 'undefined' when called", function() {
        expect(sayHello()).not.toBe(undefined);
    });
    it("should return 'Hello, Jane!' when executed", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when executed", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when executed", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when true", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when false", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});

describe('isEven', function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean value no matter what is passed", function() {
        expect(isEven()).toBe(false);
    })
    it("should return 'true' when 5 is passed", function() {
        expect(isEven(5)).toBe(true);
    });
    it("should return 'true' when '5' is passed", function() {
        expect(isEven("5")).toBe(true);
    });
})

