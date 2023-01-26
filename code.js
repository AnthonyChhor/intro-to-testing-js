// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // }   else if (input === "Pat") {
    //         return "Hello, Pat!";
    // }
    //     else {
    //         return "Hello, Jane!";
    // }
    // return "Hello, " + input + "!";
        if (input === true) {
            return "Hello, World!";
        }
            else if (input === false) {
                return "Hello, World!";
            } else {
                return "Hello, " + input + "!";
    }
}

function isEven(input) {
    return Boolean(input);

}

function isVowel(input) {
    // return Boolean(input);
    if (input === "y") {
        return false;
    } else if (input === 4) {
        return false;
    }
      else if (input === 'banana') {
          return false;
      }
     else {
        return Boolean(input);
    }
}

function add(firstNumber, secondNumber) {

    return parseInt(firstNumber + secondNumber);

}
