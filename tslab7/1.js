//1
var DocType;
(function (DocType) {
    DocType["Passport"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    DocType["DriverLicense"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435";
    DocType["IDCard"] = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438";
})(DocType || (DocType = {}));
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
    displayInfo() {
        console.log(`Транспортное средство: ${this.brand} ${this.model}, Год выпуска: ${this.year},
             VIN: ${this.vin}, Регистрационный номер: ${this.registrationNumber}`);
    }
}
//2
var BodyType;
(function (BodyType) {
    BodyType["Sedan"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["Coupe"] = "\u041A\u0443\u043F\u0435";
    BodyType["SUV"] = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A";
    BodyType["Hatchback"] = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A";
})(BodyType || (BodyType = {}));
var CarClass;
(function (CarClass) {
    CarClass["Economy"] = "\u042D\u043A\u043E\u043D\u043E\u043C";
    CarClass["Business"] = "\u0411\u0438\u0437\u043D\u0435\u0441";
    CarClass["Luxury"] = "\u041B\u044E\u043A\u0441";
})(CarClass || (CarClass = {}));
class CarImpl extends VehicleImpl {
    constructor(brand, model, year, vin, registrationNumber, owner, _bodyType, _carClass) {
        super(brand, model, year, vin, registrationNumber, owner);
        this._bodyType = _bodyType;
        this._carClass = _carClass;
    }
    get bodyType() {
        return this._bodyType;
    }
    get carClass() {
        return this._carClass;
    }
    //информация о классе авто и кузове
    getCarDetails() {
        return `Тип кузова: ${this.bodyType}, Класс автомобиля: ${this.carClass}`;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Тип кузова: ${this.bodyType}, Класс автомобиля: ${this.carClass}`);
    }
}
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
class VehicleStorageImpl {
    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    //
    sortByModelDescending() {
        return this.vehicles.sort((a, b) => b.model.localeCompare(a.model));
    }
    //
    findByBrand(brand) {
        return this.vehicles.filter(vehicle => vehicle.brand === brand);
    }
    displayAllVehicles() {
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
