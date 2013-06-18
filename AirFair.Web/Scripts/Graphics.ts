///<reference path="Game.ts"/>
///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>
///<reference path="..\Turbulenz\draw2d.ts"/>

module Turbulenz {
    export class Graphics implements AirFair.IDrawGraphics {
        graphicsDevice: GraphicsDevice;
        draw2D: Draw2D;
        sprite: Draw2DSprite;
        textureLoadProxy: (texture: Texture) => void;

        constructor(canvasElement: Element, enableDebug: bool) {
            TurbulenzEngine = WebGLTurbulenzEngine.create({
                canvas: canvasElement                
            });

            this.graphicsDevice = TurbulenzEngine.createGraphicsDevice({});
            this.draw2D = Draw2D.create({
                graphicsDevice: this.graphicsDevice
            });

            this.textureLoadProxy = (texture: Texture) => {
                if (texture) {
                    this.sprite.setTexture(texture);
                    this.sprite.setTextureRectangle([0, 0, texture.width, texture.height]);
                }
            }

            this.loadSprite("");            
        }

        drawBackground(colour: number[]) {
            if (this.graphicsDevice.beginFrame()) {
                this.graphicsDevice.clear(colour, 1.0);

                this.draw2D.begin();
                this.draw2D.drawSprite(this.sprite);
                this.draw2D.end();

                this.graphicsDevice.endFrame();
            }
        }

        private loadSprite(name: string) {
            this.sprite = Draw2DSprite.create({
                width: this.graphicsDevice.width,
                height: this.graphicsDevice.height,
                x: this.graphicsDevice.width / 2,
                y: this.graphicsDevice.height / 2,
                color: [1.0, 1.0, 1.0, 1.0],
                //rotation: Math.PI / 4
            });

            var texture = this.graphicsDevice.createTexture({
                src: "Assets/Sky.jpg",
                mipmaps: true,
                onload: this.textureLoadProxy
            });
        }
    }
}