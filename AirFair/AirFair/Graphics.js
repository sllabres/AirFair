///<reference path="Game.ts"/>
///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>
var Turbulenz;
(function (Turbulenz) {
    var Graphics = (function () {
        function Graphics(canvasElement, enableDebug) {
            debug = enableDebug;
            TurbulenzEngine = WebGLTurbulenzEngine.create({
                canvas: canvasElement
            });
            this.graphicsDevice = TurbulenzEngine.createGraphicsDevice({
            });
        }
        Graphics.prototype.drawBackground = function () {
            if(this.graphicsDevice.beginFrame()) {
                this.graphicsDevice.clear([
                    1.0, 
                    1.0, 
                    0.0, 
                    1.0
                ], 1.0);
                this.graphicsDevice.endFrame();
            }
        };
        return Graphics;
    })();
    Turbulenz.Graphics = Graphics;    
})(Turbulenz || (Turbulenz = {}));
//@ sourceMappingURL=Graphics.js.map
