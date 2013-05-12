///<reference path="/Scripts/qunit.js" />
///<reference path="../Game.js"/>

QUnit.module("Initialise Tests");
test("When game started Then draw background called", function () {
    var drawBackgroundCalled = false,
        graphics = { drawBackground: function () { drawBackgroundCalled = true; } },
        game = new Game(graphics);    
    
    game.start();

    ok(drawBackgroundCalled);
});