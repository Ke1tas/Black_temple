"use strict";
/// <reference path="1.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
const _1_1 = require("./1");
var OwnerImpl = _1_1.Transport.OwnerImpl;
var CarImpl = _1_1.Transport.CarImpl;
var MotorbikeImpl = _1_1.Transport.MotorbikeImpl;
var BodyType = _1_1.Transport.BodyType;
var CarClass = _1_1.Transport.CarClass;
var DocType = _1_1.Transport.DocType;
const owner = new OwnerImpl("Иванов", "Иван", "Иванович", new Date(2022, 1, 1), DocType.Passport, "1234", "5690");
const car = new CarImpl("Toyota", "Camry", 2020, "123456789", "8875", owner, BodyType.Sedan, CarClass.Business);
const motorbike = new MotorbikeImpl("Kawasaki", "Ninja", 2022, "9544", "1111", owner, "Sport", true);
car.displayInfo();
motorbike.displayInfo();
owner.displayInfo();
