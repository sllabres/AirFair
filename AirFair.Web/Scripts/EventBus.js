var AirFair;
(function (AirFair) {
    (function (event) {
        event._map = [];
        event._map[0] = "drawBackground";
        event.drawBackground = 0;
        event._map[1] = "spriteCreated";
        event.spriteCreated = 1;
        event._map[2] = "spriteLoadComplete";
        event.spriteLoadComplete = 2;
    })(AirFair.event || (AirFair.event = {}));
    var event = AirFair.event;
    var EventBus = (function () {
        function EventBus() {
            this.subscribers = [];
        }
        EventBus.prototype.subscribe = function (eventName, callback) {
            if(this.subscribers[eventName] === undefined) {
                this.subscribers[eventName] = [];
            }
            this.subscribers[eventName].push(callback);
        };
        EventBus.prototype.notify = function (eventName, parameters) {
            for(var i = 0; i < this.subscribers[eventName].length; i++) {
                this.subscribers[eventName][i](parameters);
            }
        };
        return EventBus;
    })();
    AirFair.EventBus = EventBus;    
})(AirFair || (AirFair = {}));
//@ sourceMappingURL=EventBus.js.map
