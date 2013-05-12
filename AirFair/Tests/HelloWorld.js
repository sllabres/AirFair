///<reference path="/Scripts/qunit.js" />
///<reference path="/HelloWorld.js"/>

QUnit.module("Hello World Tests");
test("When calling hello Then 'Hello World!' is returned", function () {
    var helloWorld = new HelloWorld();    
    var actualValue = helloWorld.Hello();    
    equal("Hello World!", actualValue);    
});