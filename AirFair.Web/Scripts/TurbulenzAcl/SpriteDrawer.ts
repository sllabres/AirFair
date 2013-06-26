///<reference path="SpriteLoader.ts"/>
///<reference path="..\Game.ts"/>
///<reference path="..\EventBus.ts"/>
///<reference path="..\..\Turbulenz\draw2d.ts"/>
///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>

module TurbulenzAcl {
    export class SpriteDrawer {
        private drawBackgroundProxy: (background: AirFair.Background) => void;

        constructor(private graphicsDevice: GraphicsDevice, private draw2D: Draw2D, private spriteRepository: SpriteRepository, private observer: AirFair.IObserver) {
            this.drawBackgroundProxy = (background: AirFair.Background) => {
                this.draw(this.spriteRepository.getBy());
            }

            this.observer.subscribe(AirFair.event.drawBackground, this.drawBackgroundProxy);
        }

        private draw(sprite: Draw2DSprite) {
            if (this.graphicsDevice.beginFrame()) {
                this.graphicsDevice.clear([0, 0, 0, 0], 1.0);

                this.draw2D.begin();
                this.draw2D.drawSprite(sprite);
                this.draw2D.end();

                this.graphicsDevice.endFrame();
            }
        }
    }
}