var AirFair;
(function (AirFair) {
    var Game = (function () {
        function Game(graphics) {
            this.graphics = graphics;
        }
        Game.prototype.start = function () {
            this.graphics.drawBackground();
        };
        return Game;
    })();
    AirFair.Game = Game;    
})(AirFair || (AirFair = {}));
