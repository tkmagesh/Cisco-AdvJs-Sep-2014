describe("A Calculator", function(){
    it("should be able to add two numbers",function(){
        //Arrange
        var number1 = 10,
            number2 = 20,
            expectedResult = 30;
        
        //Act
        var result = add(number1,number2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add two numbers in string format",function(){
        //Arrange
        var number1 = "10",
            number2 = "20",
            expectedResult = 30;
        
        //Act
        var result = add(number1,number2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to ignore non numeric strings",function(){
        //Arrange
        var number1 = "10",
            number2 = "abc",
            expectedResult = 10;
        
        //Act
        var result = add(number1,number2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returing numbers",function(){
        //Arrange
        var f1 = function(){ return 10;},
            f2 = function(){ return 20;},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returing numbers in string format",function(){
        //Arrange
        var f1 = function(){ return "10";},
            f2 = function(){ return "20";},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returing functions returning numbers in string format",function(){
        //Arrange
        var f1 = function(){ return function(){ return "10";};},
            f2 = function(){ return function(){ return "20";};},
            expectedResult = 30;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add just one number",function(){
        //Arrange
        var n1 = 10,
            expectedResult = 10;
        
        //Act
        var result = add(n1);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should return zero when no arguments are passed",function(){
        //Arrange
        var  expectedResult = 0;
        
        //Act
        var result = add();
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add more than 2 numbers",function(){
        //Arrange
        var  expectedResult = 100;
        
        //Act
        var result = add(10,20,30,40);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should add array of numbers",function(){
        //Arrange
        var numbers1 = [10,20],
            numbers2 = [30,40],
            expectedResult = 100;
        
        //Act
        var result = add(numbers1, numbers2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should add a nested array of numbers",function(){
        //Arrange
        var numbers = [10,[20,[30,[40]]]];
            expectedResult = 100;
        
        //Act
        var result = add(numbers);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add functions returing array of numbers and numbers in string format",function(){
        //Arrange
        var f1 = function(){ return ["10",30];},
            f2 = function(){ return ["20",40];},
            expectedResult = 100;
        
        //Act
        var result = add(f1,f2);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of functions returing functions returning numbers in string format",function(){
        //Arrange
        var f1 = function(){ return function(){ return "10";};},
            f2 = function(){ return function(){ return "20";};},
            expectedResult = 30;
        
        //Act
        var result = add([f1,f2]);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    it("should be able to add array of functions returing array of numbers and numbers in string format",function(){
        //Arrange
        var f1 = function(){ return ["10",30];},
            f2 = function(){ return ["20",40];},
            expectedResult = 100;
        
        //Act
        var result = add([f1,f2]);
        
        //Assert
        expect(result).toBe(expectedResult);
    });
    
});