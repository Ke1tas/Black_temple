/// <reference path="1.ts" />

import {Transport} from "./1";
import OwnerImpl = Transport.OwnerImpl;
import CarImpl = Transport.CarImpl;
import MotorbikeImpl = Transport.MotorbikeImpl;
import BodyType = Transport.BodyType;
import CarClass = Transport.CarClass;
import DocType = Transport.DocType;

const owner = new OwnerImpl("Иванов", "Иван",
     "Иванович", new Date(2022, 1, 1), DocType.Passport, "1234", "5690");
const car = new CarImpl("Toyota", "Camry", 2020, "123456789",
     "8875", owner, BodyType.Sedan, CarClass.Business);
const motorbike = new MotorbikeImpl("Kawasaki", "Ninja", 2022,
     "9544", "1111", owner, "Sport", true);
     
car.displayInfo();
motorbike.displayInfo();
owner.displayInfo();