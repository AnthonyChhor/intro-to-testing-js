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

describe('isVowel', function() {
    it("should return a boolean value no matter what is passed", function() {
        expect(isVowel()).toBe(false);
    });
    it("should return 'true' when passed 'a'", function() {
        expect(isVowel('a')).toBe(true);
    });
    it("should return 'true' when passed 'A'", function() {
        expect(isVowel('A')).toBe(true);
    });
    it("should return 'false' when passed 'y'", function() {
        expect(isVowel('y')).toBe(false);
    });
    it("should return 'false' when passed 4", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return 'false' when passed 'banana'", function() {
        expect(isVowel('banana')).toBe(false);
    });


})

describe( 'add', function() {
    it("should be a defined function", function() {
        expect(typeof add).toBe('function');
    });
    it("should return 5 when 2 and 3 are added", function() {
        expect(add(2, 3)).toBe(5);
    });
    it("should return -12 when -3 and -9 are added", function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return NaN when 'banana' and 'split' are added", function() {
        expect(add('banana', 'split')).toBeNaN();
    })
    it("should return NaN when 'add()' is return", function () {
        expect(add()).toBeNaN();
    });
})

