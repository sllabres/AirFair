///<reference path="qunit.js" />
///<reference path="../Scripts/Game.js"/>
///<reference path="../Scripts/EventBus.js"/>

QUnit.module("Given Game");

test("When game started Then callback called", function () {
    var callbackCalled = false,
        timerCalledback = { callback: function () { callbackCalled = true; } },
        observer = { subscribe: function () { } },
        game = new AirFair.Game(observer, timerCalledback);

    game.start();

    ok(callbackCalled);
});