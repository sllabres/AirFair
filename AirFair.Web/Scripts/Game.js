///<reference path="TimerCallback.ts"/>
var AirFair;
(function (AirFair) {
    var Game = (function () {
        function Game(graphics, timerCallback) {
            this.graphics = graphics;
            this.timerCallback = timerCallback;
            var _this = this;
            this.frameRate = 1000 / 60;
            this.updateProxy = function () {
                _this.update();
            };
        }
        Game.prototype.start = function () {
            this.timerCallback.callback(this.updateProxy, this.frameRate);
        };
        Game.prototype.update = function () {
            this.graphics.drawBackground([
                0, 
                0, 
                0, 
                0
            ]);
        };
        return Game;
    })();
    AirFair.Game = Game;    
})(AirFair || (AirFair = {}));
