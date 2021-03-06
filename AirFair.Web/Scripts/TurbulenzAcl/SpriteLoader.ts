///<reference path="..\..\Turbulenz\texturemanager.ts"/>
///<reference path="..\..\Turbulenz\draw2d.ts"/>
///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>
///<reference path="..\EventBus.ts"/>

module TurbulenzAcl {
    export class SpriteRepository {
        private sprite: Draw2DSprite;
        private spriteCreatedProxy: (sprite: Draw2DSprite) => void;

        constructor(private observer: AirFair.IObserver) {
            this.spriteCreatedProxy = (sprite: Draw2DSprite) => {
                this.sprite = sprite;

                this.observer.notify(AirFair.event.spriteLoadComplete, null);
            }

            this.observer.subscribe(AirFair.event.spriteCreated, this.spriteCreatedProxy);
        }

        public getByName(): Draw2DSprite {
            return this.sprite;
        }
    }

    export class SpriteLoader {
        backgroundLoadProxy: (texture: Texture) => void;

        constructor(private draw2D: Draw2D, private graphicsDevice: GraphicsDevice, private observer: AirFair.IObserver) {
            this.backgroundLoadProxy = (texture: Texture) => {
                if (texture) {
                    observer.notify(AirFair.event.spriteCreated, this.createSprite(texture));
                }
            }
        }

        public loadAll() {
            this.loadTexture("Sky");
        }

        private createSprite(texture: Texture) {
            var sprite = Draw2DSprite.create({
                width: this.graphicsDevice.width,
                height: this.graphicsDevice.height,
                x: this.graphicsDevice.width / 2,
                y: this.graphicsDevice.height / 2,
                color: [1.0, 1.0, 1.0, 1.0],
            });

            sprite.setTexture(texture);
            sprite.setTextureRectangle([0, 0, texture.width, texture.height]);

            return sprite;
        }

        private loadTexture(name: string) {
            var texture = this.graphicsDevice.createTexture({
                src: "Assets/Sky.jpg",
                mipmaps: true,
                onload: this.backgroundLoadProxy
            });
        }
    }
}