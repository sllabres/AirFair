module AirFair {
    
    export enum event {
        drawBackground,
        spriteCreated,
        spriteLoadComplete
    }

    export interface IObserver {
        notify(eventName: event, data: Object);
        subscribe(eventName: event, callback: (object) => void);
    }

    export class EventBus implements IObserver {
        private subscribers;

        constructor() {
            this.subscribers = [];            
        }

        public subscribe(eventName, callback) {
            if (this.subscribers[eventName] === undefined) {
                this.subscribers[eventName] = [];
            }

            this.subscribers[eventName].push(callback);
        }

        public notify(eventName, parameters) {
            for (var i = 0; i < this.subscribers[eventName].length; i++) {
                this.subscribers[eventName][i](parameters);
            }
        }
    }    
}