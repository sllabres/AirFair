///<reference path="..\Turbulenz\webgl\turbulenzengine.ts"/>
var Turbulenz;
(function (Turbulenz) {
    var TimerCallback = (function () {
        function TimerCallback() { }
        TimerCallback.prototype.callback = function (method, milliseconds) {
            TurbulenzEngine.setInterval(method, milliseconds);
        };
        return TimerCallback;
    })();
    Turbulenz.TimerCallback = TimerCallback;    
})(Turbulenz || (Turbulenz = {}));
//@ sourceMappingURL=TimerCallback.js.map
