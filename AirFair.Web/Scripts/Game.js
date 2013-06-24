///<reference path="TurbulenzAcl\TimerCallback.ts"/>
///<reference path="EventBus.ts"/>
var AirFair;
(function (AirFair) {
    var Game = (function () {
        function Game(observer, timerCallback) {
            this.observer = observer;
            this.timerCallback = timerCallback;
            var _this = this;
            this.updateProxy = function () {
                _this.update();
            };
            this.loadCompleteProxy = function () {
                _this.start();
            };
            this.observer.subscribe(AirFair.event.spriteLoadComplete, this.loadCompleteProxy);
        }
        Game.prototype.start = function () {
            var frameRate = 1000 / 60;
            this.timerCallback.callback(this.updateProxy, frameRate);
        };
        Game.prototype.update = function () {
            this.observer.notify(AirFair.event.drawBackground, new Background("Sky"));
        };
        return Game;
    })();
    AirFair.Game = Game;    
    var Background = (function () {
        function Background(name) {
            this.name = name;
            this.Name = name;
        }
        return Background;
    })();
    AirFair.Background = Background;    
})(AirFair || (AirFair = {}));
//@ sourceMappingURL=Game.js.map
