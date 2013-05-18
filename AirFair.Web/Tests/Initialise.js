///<reference path="qunit.js" />
///<reference path="../Scripts/Game.js"/>

QUnit.module("Initialise Tests");
test("When game started Then draw background called", function () {
    var drawBackgroundCalled = false,
        timerCalledback = { callback: function () { } },
        graphics = { drawBackground: function () { drawBackgroundCalled = true; } },
        game = new AirFair.Game(graphics, timerCalledback);
    
    game.start();

    ok(drawBackgroundCalled);
});

test("When calling start Then callback called", function () {
    var callbackCalled = false,
        timerCalledback = { callback: function () { callbackCalled = true; } },
        graphics = { drawBackground: function () { } },
        game = new AirFair.Game(graphics, timerCalledback);

    game.start();

    ok(callbackCalled);
});