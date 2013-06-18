module AirFair {
    export class EventObserver {
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