///<reference path="..\Game.ts"/>
///<reference path="..\EventBus.ts"/>
///<reference path="SpriteRepository.ts"/>
///<reference path="..\..\Turbulenz\draw2d.ts"/>
///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>
var TurbulenzAcl;
(function (TurbulenzAcl) {
    var SpriteDrawing = (function () {
        function SpriteDrawing(graphicsDevice, draw2D, spriteRepository, observer) {
            this.graphicsDevice = graphicsDevice;
            this.draw2D = draw2D;
            this.spriteRepository = spriteRepository;
            this.observer = observer;
            var _this = this;
            this.drawBackgroundProxy = function (background) {
                _this.drawSprite(_this.spriteRepository.getBy());
            };
            this.observer.subscribe(AirFair.event.drawBackground, this.drawBackgroundProxy);
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
//@ sourceMappingURL=SpriteDrawing.js.map
