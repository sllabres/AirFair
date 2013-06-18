var AirFair;
(function (AirFair) {
    var EventObserver = (function () {
        function EventObserver() {
            this.subscribers = [];
        }
        EventObserver.prototype.subscribe = function (eventName, callback) {
            if(this.subscribers[eventName] === undefined) {
                this.subscribers[eventName] = [];
            }
            this.subscribers[eventName].push(callback);
        };
        EventObserver.prototype.notify = function (eventName, parameters) {
            for(var i = 0; i < this.subscribers[eventName].length; i++) {
                this.subscribers[eventName][i](parameters);
            }
        };
        return EventObserver;
    })();
    AirFair.EventObserver = EventObserver;    
})(AirFair || (AirFair = {}));
//@ sourceMappingURL=EventObserver.js.map
