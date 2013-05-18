///<reference path="TimerCallback.ts"/>

module AirFair {
    export interface IDrawGraphics {
        drawBackground();
    }

    export class Game {
        constructor(private graphics: IDrawGraphics, private timerCallback: ICallback) {
        }

        start() {
            this.graphics.drawBackground();
            this.timerCallback.callback(null, null);
        }
    }
}