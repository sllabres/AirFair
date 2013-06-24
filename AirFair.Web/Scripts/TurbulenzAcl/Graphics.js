///<reference path="Game.ts"/>
///<reference path="EventBus.ts"/>
///<reference path="..\Turbulenz\draw2d.ts"/>
///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>
var TurbulenzAcl;
(function (TurbulenzAcl) {
    var SpriteDrawing = (function () {
        function SpriteDrawing(graphicsDevice, draw2D, observer) {
            this.drawBackgroundProxy = function (background) {
                //this.drawSprite(background);
                            };
            observer.subscribe(AirFair.event.drawBackground, this.drawBackgroundProxy);
        }
        SpriteDrawing.prototype.drawSprite = function (sprite) {
            if(this.graphicsDevice.beginFrame()) {
                this.graphicsDevice.clear([
                    0, 
                    0, 
                    0, 
                    0
                ], 1.0);
                this.draw2D.begin();
                this.draw2D.drawSprite(sprite);
                this.draw2D.end();
                this.graphicsDevice.endFrame();
            }
        };
        return SpriteDrawing;
    })();
    TurbulenzAcl.SpriteDrawing = SpriteDrawing;    
})(TurbulenzAcl || (TurbulenzAcl = {}));
//@ sourceMappingURL=Graphics.js.map
