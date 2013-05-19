///<reference path="qunit.js" />
///<reference path="../Scripts/Game.js"/>

QUnit.module("Given Game");

test("When game started Then callback called", function () {
    var callbackCalled = false,
        timerCalledback = { callback: function () { callbackCalled = true; } },
        graphics = { drawBackground: function () { } },
        game = new AirFair.Game(graphics, timerCalledback);

    game.start();

    ok(callbackCalled);
});