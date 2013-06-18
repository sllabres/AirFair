///<reference path="TimerCallback.ts"/>

module AirFair {
    export interface IDrawGraphics {
        drawBackground(colour: number[]);
    }

    export interface ILoadTextures {
        load(assetSrc: string);
    }

    export class Game {

        private frameRate: number;
        private updateProxy: () => void;

        constructor(private graphics: IDrawGraphics, private timerCallback: ICallback) {
            this.frameRate = 1000 / 60;
            this.updateProxy = () => {
                this.update();
            }
        }

        public start() {            
            this.timerCallback.callback(this.updateProxy, this.frameRate);
        }

        private update() {
            this.graphics.drawBackground([0,0,0,0]);
        }
    }
}