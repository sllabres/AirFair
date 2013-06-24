///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>
var TurbulenzAcl;
(function (TurbulenzAcl) {
    var TimerCallback = (function () {
        function TimerCallback() { }
        TimerCallback.prototype.callback = function (method, milliseconds) {
            TurbulenzEngine.setInterval(method, milliseconds);
        };
        return TimerCallback;
    })();
    TurbulenzAcl.TimerCallback = TimerCallback;    
})(TurbulenzAcl || (TurbulenzAcl = {}));
//@ sourceMappingURL=TimerCallback.js.map
