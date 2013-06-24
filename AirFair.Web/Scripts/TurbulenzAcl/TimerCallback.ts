///<reference path="..\..\Turbulenz\webgl\turbulenzengine.ts"/>

module TurbulenzAcl {
    export class TimerCallback implements AirFair.ICallback {        
        callback(method: () => void, milliseconds: number) {
            TurbulenzEngine.setInterval(method, milliseconds);
        }
    }
}

module AirFair {
    export interface ICallback {
        callback(method: Object, milliseconds: Number);
    }
}