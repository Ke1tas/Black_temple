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
    //информация о классе авто и кузове
    public getCarDetails(): string {
        return `Тип кузова: ${this.bodyType}, Класс автомобиля: ${this.carClass}`;
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
    sortByModelDescending(): Vehicle[];
    findByBrand(brand: string): Vehicle[];
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
    //
    public sortByModelDescending(): Vehicle[] {
        return this.vehicles.sort((a, b) => b.model.localeCompare(a.model));
    }
    //
    public findByBrand(brand: string): Vehicle[] {
        return this.vehicles.filter(vehicle => vehicle.brand === brand);
    }

    displayAllVehicles(): void {
        console.log(`Хранилище создано: ${this.creationDate.toLocaleDateString()}`);
        this.vehicles.forEach(vehicle => vehicle.displayInfo());
    }
}

const owner = new OwnerImpl("Иванов", "Иван", "Иванович", new Date(2025, 27, 2), DocType.Passport, "1234", "567890");



const storage = new VehicleStorageImpl();


const car1 = new CarImpl("Toyota", "Zamry", 2020, "123456789", "3375", owner, BodyType.Sedan, CarClass.Business);
const car2 = new CarImpl("Toyota", "Aamry", 2020, "1234йй56789", "8115", owner, BodyType.Hatchback, CarClass.Luxury);
const car3 = new CarImpl("Honda", "Bivic", 2020, "цц", "8875", owner, BodyType.Coupe, CarClass.Economy);
const car4 = new CarImpl("Ford", "Tustang", 2020, "123456222789", "7777", owner, BodyType.SUV, CarClass.Business);


storage.addVehicle(car1);
storage.addVehicle(car2);
storage.addVehicle(car3);
storage.addVehicle(car4);

//автомобили до сортировки
console.log("Автомобили в хранилище:");
storage.sortByModelDescending().forEach(car => car.displayInfo());

//автомобили после сортировки
const sortedCars = storage.sortByModelDescending();
console.log("\nАвтомобили после сортировки по модели (убывание):");
sortedCars.forEach(car => car.displayInfo());

// Поиск автомобилей по бренду 'Honda'
const hondaCars = storage.findByBrand('Honda');
console.log("\nПоиск автомобилей марки 'Honda':");
hondaCars.forEach(car => car.displayInfo());

// Вывод информации о классе авто и кузове
console.log(car1.getCarDetails());
console.log(car2.getCarDetails());
console.log(car3.getCarDetails());
console.log(car4.getCarDetails());
