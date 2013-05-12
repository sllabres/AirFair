module AirFair {
    export interface IDrawGraphics {
        drawBackground();
    }

    export class Game {
        constructor(private graphics: IDrawGraphics) {
        }

        start() {
            this.graphics.drawBackground();
        }
    }
}