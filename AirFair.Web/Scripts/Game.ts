///<reference path="TurbulenzAcl\TimerCallback.ts"/>
///<reference path="EventBus.ts"/>

module AirFair {    
    export class Game {
        private updateProxy: () => void;
        private loadCompleteProxy: () => void;

        constructor(private observer: IObserver, private timerCallback: ICallback) {            
            this.updateProxy = () => {
                this.update();
            }

            this.loadCompleteProxy = () => {
                this.start();
            }

            this.observer.subscribe(AirFair.event.spriteLoadComplete, this.loadCompleteProxy);
        }

        public start() {
            var frameRate = 1000 / 60;     
            this.timerCallback.callback(this.updateProxy, frameRate);
        }

        private update() {            
            this.observer.notify(event.drawBackground, new Background("Sky"));
        }
    }

    export class Background {
        public Name: string;
        constructor(private name: string) {
            this.Name = name;
        }        
    }
}