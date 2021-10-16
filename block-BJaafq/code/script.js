function addNum(numA, numB){
    return numA + numB;
}
function mulNum(numA = 1, numB = 1){
    return numA * numB;
}

function test(message, callback){
    try {
        callback();
        console.log( message);
    } catch(error){
        console.error(error);
        
    }
}

function expect(result) {
    return {
        toEqual: function (expected){
            if(result != expected){
                throw new Error(`${actual} is not equal to ${expected}`);
            }
        },
        isTypeNumber: function (expected){
            if(typeof result !== expected){
                throw new Error(`${typeof result} is not number`)
            }
        }
    }
}

let result, expected;

function addNumTest() {
    result = addNum(5, 6);
    expected = 11;

    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
function addNumTest2() {
    result = addNum(10, 6);
    expected = 16;

    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
function addNumTest3() {
    result = addNum(20, 0);
    expected = 20;

    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
function addNumTest4() {
    result = addNum(120, 120);
    expected = 240;

    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
function addNumTest5() {
    result = addNum(12, 15);
    expected = 26;

    if(result !== expected){
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

test("Adding two numbers", addNumTest);
test("Adding two numbers", addNumTest2);
test("Adding two numbers", addNumTest3);
test("Adding two numbers", addNumTest4);
test("Adding two numbers", addNumTest5);

function mulNumTest() {
        result = mulNum(10, 2);
        expected = 20;
        if(result !== expected){
            throw new Error(`${result} is not multiplied by ${expected}`);
        }
}
function mulNumTest2() {
    result = mulNum(10, 2);
    expected = 20;
    if(result !== expected){
        throw new Error(`${result} is not multiplied by ${expected}`);
    }
}
function mulNumTest3() {
    result = mulNum(10, 2);
    expected = 20;
    if(result !== expected){
        throw new Error(`${result} is not multiplied by ${expected}`);
    }
}
function mulNumTest4() {
    result = mulNum(10, 2);
    expected = 20;
    if(result !== expected){
        throw new Error(`${result} is not multiplied by ${expected}`);
    }
}
function mulNumTest5() {
    result = mulNum(10, 2);
    expected = 200;
    if(result !== expected){
        throw new Error(`${result} is not multiplied by ${expected}`);
    }
}

test("Multiply numbers", mulNumTest);
test("Multiply numbers", mulNumTest2);
test("Multiply numbers", mulNumTest3);
test("Multiply numbers", mulNumTest4);
test("Multiply numbers", mulNumTest5);