"use strict";
/// <reference path="vehicle.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const vehicle_1 = require("./vehicle");
var OwnerImpl = vehicle_1.Transport.OwnerImpl;
var CarImpl = vehicle_1.Transport.CarImpl;
var BodyType = vehicle_1.Transport.BodyType;
var CarClass = vehicle_1.Transport.CarClass;
var DocType = vehicle_1.Transport.DocType;
const owner = new OwnerImpl("Иванов", "Иван", "Иванович", new Date(2022, 1, 1), DocType.Passport, "1234", "5690");
const car = new CarImpl("Toyota", "Camry", 2020, "123456789", "8875", owner, BodyType.Sedan, CarClass.Business);
car.displayInfo();
console.log(car.getInfo());
try {
    vehicle_1.Transport.CarImpl.prototype.freezed = function () {
        console.log("lmao");
    };
    //@ts-ignore
    car.freezed();
}
catch (e) {
    console.log(e);
}
