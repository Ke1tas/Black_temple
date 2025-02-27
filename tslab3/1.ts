//1
enum DocType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Удостоверение личности"
}

interface Owner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    documentType: DocType;
    documentSeries: string;
    documentNumber: string;
    displayInfo(): void;
}

interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayInfo(): void;
}

class OwnerImpl implements Owner {
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

class VehicleImpl implements Vehicle {
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
enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    SUV = "Внедорожник",
    Hatchback = "Хэтчбек"
}

enum CarClass {
    Economy = "Эконом",
    Business = "Бизнес",
    Luxury = "Люкс"
}

interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
}

class CarImpl extends VehicleImpl implements Car {
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

interface Motorbike extends Vehicle {
    frameType: string;
    isForSport: boolean;
}

class MotorbikeImpl extends VehicleImpl implements Motorbike {
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

//3
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    addVehicle(vehicle: T): void;
    displayAllVehicles(): void;
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    public creationDate: Date;
    public vehicles: T[];

    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    displayAllVehicles(): void {
        console.log(`Хранилище создано: ${this.creationDate.toLocaleDateString()}`);
        this.vehicles.forEach(vehicle => vehicle.displayInfo());
    }
}

const owner = new OwnerImpl("Иванов", "Иван", "Иванович", new Date(2025, 27, 2), DocType.Passport, "1234", "567890");
const car = new CarImpl("Toyota", "Camry", 2020, "123456789", "8875", owner, BodyType.Sedan, CarClass.Business);
const motorbike = new MotorbikeImpl("Kawasaki", "Ninja", 2022, "9544", "1111", owner, "Sport", true);

const storage = new VehicleStorageImpl<Vehicle>();
storage.addVehicle(car);
storage.addVehicle(motorbike);
storage.displayAllVehicles();