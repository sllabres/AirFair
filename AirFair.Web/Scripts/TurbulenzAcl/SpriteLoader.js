///<reference path="..\..\Turbulenz\texturemanager.ts"/>
///<reference path="..\..\Turbulenz\draw2d.ts"/>
///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>
///<reference path="..\EventBus.ts"/>
var TurbulenzAcl;
(function (TurbulenzAcl) {
    var SpriteRepository = (function () {
        function SpriteRepository(observer) {
            this.observer = observer;
            var _this = this;
            this.spriteCreatedProxy = function (sprite) {
                _this.sprite = sprite;
                _this.observer.notify(AirFair.event.spriteLoadComplete, null);
            };
            this.observer.subscribe(AirFair.event.spriteCreated, this.spriteCreatedProxy);
        }
        SpriteRepository.prototype.getByName = function () {
            return this.sprite;
        };
        return SpriteRepository;
    })();
    TurbulenzAcl.SpriteRepository = SpriteRepository;    
    var SpriteLoader = (function () {
        function SpriteLoader(draw2D, graphicsDevice, observer) {
            this.draw2D = draw2D;
            this.graphicsDevice = graphicsDevice;
            this.observer = observer;
            var _this = this;
            this.backgroundLoadProxy = function (texture) {
                if(texture) {
                    observer.notify(AirFair.event.spriteCreated, _this.createSprite(texture));
                }
            };
        }
        SpriteLoader.prototype.loadAll = function () {
            this.loadTexture("Sky");
        };
        SpriteLoader.prototype.createSprite = function (texture) {
            var sprite = Draw2DSprite.create({
                width: this.graphicsDevice.width,
                height: this.graphicsDevice.height,
                x: this.graphicsDevice.width / 2,
                y: this.graphicsDevice.height / 2,
                color: [
                    1.0, 
                    1.0, 
                    1.0, 
                    1.0
                ]
            });
            sprite.setTexture(texture);
            sprite.setTextureRectangle([
                0, 
                0, 
                texture.width, 
                texture.height
            ]);
            return sprite;
        };
        SpriteLoader.prototype.loadTexture = function (name) {
            var texture = this.graphicsDevice.createTexture({
                src: "Assets/Sky.jpg",
                mipmaps: true,
                onload: this.backgroundLoadProxy
            });
        };
        return SpriteLoader;
    })();
    TurbulenzAcl.SpriteLoader = SpriteLoader;    
})(TurbulenzAcl || (TurbulenzAcl = {}));
//@ sourceMappingURL=SpriteLoader.js.map
