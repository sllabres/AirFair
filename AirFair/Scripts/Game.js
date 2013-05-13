///<reference path="TimerCallback.ts"/>
var AirFair;
(function (AirFair) {
    var Game = (function () {
        function Game(graphics, timerCallback) {
            this.graphics = graphics;
            this.timerCallback = timerCallback;
        }
        Game.prototype.start = function () {
            this.graphics.drawBackground();
            this.timerCallback.callback(null, null);
        };
        return Game;
    })();
    AirFair.Game = Game;    
})(AirFair || (AirFair = {}));
