///<reference path="SpriteLoader.ts"/>
///<reference path="..\Game.ts"/>
///<reference path="..\EventBus.ts"/>
///<reference path="..\..\Turbulenz\draw2d.ts"/>
///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>
var TurbulenzAcl;
(function (TurbulenzAcl) {
    var SpriteDrawer = (function () {
        function SpriteDrawer(graphicsDevice, draw2D, spriteRepository, observer) {
            this.graphicsDevice = graphicsDevice;
            this.draw2D = draw2D;
            this.spriteRepository = spriteRepository;
            this.observer = observer;
            var _this = this;
            this.drawBackgroundProxy = function (background) {
                var sprite = _this.spriteRepository.getByName();
                _this.draw(sprite);
            };
            this.observer.subscribe(AirFair.event.drawBackground, this.drawBackgroundProxy);
        }
        SpriteDrawer.prototype.draw = function (sprite) {
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
        return SpriteDrawer;
    })();
    TurbulenzAcl.SpriteDrawer = SpriteDrawer;    
})(TurbulenzAcl || (TurbulenzAcl = {}));
//@ sourceMappingURL=SpriteDrawer.js.map
