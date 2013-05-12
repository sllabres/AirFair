///<reference path="Game.ts"/>
///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>
var Turbulenz;
(function (Turbulenz) {
    var Graphics = (function () {
        function Graphics(engine) {
        }
        Graphics.prototype.drawBackground = function () {
        };
        return Graphics;
    })();
    Turbulenz.Graphics = Graphics;    
})(Turbulenz || (Turbulenz = {}));
