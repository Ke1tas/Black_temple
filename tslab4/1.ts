//1
export namespace Transport {
    //1
    export enum DocType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        IDCard = "Удостоверение личности"
    }

    export interface Owner {
        lastName: string;
        firstName: string;
        middleName: string;
        birthDate: Date;
        documentType: DocType;
        documentSeries: string;
        documentNumber: string;
        displayInfo(): void;
    }

    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        displayInfo(): void;
    }

    export class OwnerImpl implements Owner {
        constructor(
            private _lastName: string,
            private _firstName: string,
            private _middleName: string,
            private _birthDate: Date,
            private _documentType: DocType,
            private _documentSeries: string,
            private _documentNumber: string
        ) {}

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

        displayInfo(): void {
            console.log(
                `Владелец: ${this.lastName} ${this.firstName} ${this.middleName},
                Дата рождения: ${this.birthDate.toLocaleDateString()}, Тип документа: ${this.documentType},
                Серия: ${this.documentSeries}, Номер: ${this.documentNumber}`
            );
        }
    }

    export class VehicleImpl implements Vehicle {
        constructor(
            private _brand: string,
            private _model: string,
            private _year: number,
            private _vin: string,
            private _registrationNumber: string,
            private _owner: Owner
        ) {}

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

        displayInfo(): void {
            console.log(
                `Транспортное средство: ${this.brand} ${this.model}, Год выпуска: ${this.year},
                VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`
            );
        }
    }

    //2
    export enum BodyType {
        Sedan = "Седан",
        Coupe = "Купе",
        SUV = "Внедорожник",
        Hatchback = "Хэтчбек"
    }

    export enum CarClass {
        Economy = "Эконом",
        Business = "Бизнес",
        Luxury = "Люкс"
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    export class CarImpl extends VehicleImpl implements Car {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            private _bodyType: BodyType,
            private _carClass: CarClass
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
        }

        get bodyType() {
            return this._bodyType;
        }

        get carClass() {
            return this._carClass;
        }

        displayInfo(): void {
            super.displayInfo();
            console.log(`Тип кузова: ${this.bodyType}, Класс автомобиля: ${this.carClass}`);
        }
    }

    export interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
    }

    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            private _frameType: string,
            private _isForSport: boolean
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
        }

        get frameType() {
            return this._frameType;
        }

        get isForSport() {
            return this._isForSport;
        }

        displayInfo(): void {
            super.displayInfo();
            console.log(`Тип рамы: ${this.frameType}, Для спорта: ${this.isForSport}`);
        }
    }
}