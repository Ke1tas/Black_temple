"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
function UpperCaseDecorator(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const result = originalMethod.apply(this, args);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}
function ImmutablePrototype(constructor) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}
//1
var Transport;
(function (Transport) {
    //1
    let DocType;
    (function (DocType) {
        DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
        DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
        DocType["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
    })(DocType = Transport.DocType || (Transport.DocType = {}));
    class OwnerImpl {
        constructor(_lastName, _firstName, _middleName, _birthDate, _documentType, _documentSeries, _documentNumber) {
            this._lastName = _lastName;
            this._firstName = _firstName;
            this._middleName = _middleName;
            this._birthDate = _birthDate;
            this._documentType = _documentType;
            this._documentSeries = _documentSeries;
            this._documentNumber = _documentNumber;
        }
        get lastName() {
            return this._lastName;
        }
        get firstName() {
            return this._firstName;
        }
        get middleName() {
            return this._middleName;
        }
        get birthDate() {
            return this._birthDate;
        }
        get documentType() {
            return this._documentType;
        }
        get documentSeries() {
            return this._documentSeries;
        }
        get documentNumber() {
            return this._documentNumber;
        }
        displayInfo() {
            console.log(`Владелец: ${this.lastName} ${this.firstName} ${this.middleName},
                Дата рождения: ${this.birthDate.toLocaleDateString()}, Тип документа: ${this.documentType},
                Серия: ${this.documentSeries}, Номер: ${this.documentNumber}`);
        }
    }
    Transport.OwnerImpl = OwnerImpl;
    class VehicleImpl {
        constructor(_brand, _model, _year, _vin, _registrationNumber, _owner) {
            this._brand = _brand;
            this._model = _model;
            this._year = _year;
            this._vin = _vin;
            this._registrationNumber = _registrationNumber;
            this._owner = _owner;
        }
        get brand() {
            return this._brand;
        }
        get model() {
            return this._model;
        }
        get year() {
            return this._year;
        }
        get vin() {
            return this._vin;
        }
        get registrationNumber() {
            return this._registrationNumber;
        }
        get owner() {
            return this._owner;
        }
        getInfo() {
            return `Марка: ${this.brand}, Модель: ${this.model}`;
        }
        displayInfo() {
            console.log(`Транспортное средство: ${this.brand} ${this.model}, Год выпуска: ${this.year},
                VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`);
        }
    }
    __decorate([
        UpperCaseDecorator
    ], VehicleImpl.prototype, "getInfo", null);
    Transport.VehicleImpl = VehicleImpl;
    //2
    let BodyType;
    (function (BodyType) {
        BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
        BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
        BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
        BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
    })(BodyType = Transport.BodyType || (Transport.BodyType = {}));
    let CarClass;
    (function (CarClass) {
        CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
        CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
        CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
    })(CarClass = Transport.CarClass || (Transport.CarClass = {}));
    let CarImpl = class CarImpl extends VehicleImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = _bodyType;
            this._carClass = _carClass;
        }
        get bodyType() {
            return this._bodyType;
        }
        // @UpperCaseDecorator
        get carClass() {
            return this._carClass;
        }
        displayInfo() {
            super.displayInfo();
            console.log(`Тип кузова: ${this.bodyType}, Класс автомобиля: ${this.carClass}`);
        }
    };
    CarImpl = __decorate([
        ImmutablePrototype
    ], CarImpl);
    Transport.CarImpl = CarImpl;
    class MotorbikeImpl extends VehicleImpl {
        constructor(brand, model, year, vin, registrationNumber, owner, _frameType, _isForSport) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._frameType = _frameType;
            this._isForSport = _isForSport;
        }
        get frameType() {
            return this._frameType;
        }
        get isForSport() {
            return this._isForSport;
        }
        displayInfo() {
            super.displayInfo();
            console.log(`Тип рамы: ${this.frameType}, Для спорта: ${this.isForSport}`);
        }
    }
    Transport.MotorbikeImpl = MotorbikeImpl;
})(Transport || (exports.Transport = Transport = {}));
