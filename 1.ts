
/// <reference path="vehicle.ts" />

import {Transport} from "./vehicle";
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

     
car.displayInfo();

console.log(car.getInfo());
try{
    (Transport.CarImpl as any).prototype.freezed = function() {
        console.log("lmao");
    }   
    //@ts-ignore
    car.freezed();
}
catch(e){
    console.log(e);
}
