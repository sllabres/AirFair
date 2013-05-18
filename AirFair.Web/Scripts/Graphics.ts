///<reference path="Game.ts"/>
///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>

module Turbulenz {
    export class Graphics implements AirFair.IDrawGraphics {
        graphicsDevice: GraphicsDevice;

        constructor(canvasElement: Element, enableDebug: bool) {
            debug = enableDebug;            
            TurbulenzEngine = WebGLTurbulenzEngine.create({
                canvas: canvasElement                
            });

            this.graphicsDevice = TurbulenzEngine.createGraphicsDevice({});
        }

        drawBackground() {
            if (this.graphicsDevice.beginFrame()) {
                this.graphicsDevice.clear([1.0, 1.0, 0.0, 1.0], 1.0);
                this.graphicsDevice.endFrame();
            }
        }
    }
}