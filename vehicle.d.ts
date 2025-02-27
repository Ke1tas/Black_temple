export declare namespace Transport {
    enum DocType {
        Passport = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
        DriverLicense = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",
        IDCard = "\u0423\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435 \u043B\u0438\u0447\u043D\u043E\u0441\u0442\u0438"
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
        private _lastName;
        private _firstName;
        private _middleName;
        private _birthDate;
        private _documentType;
        private _documentSeries;
        private _documentNumber;
        constructor(_lastName: string, _firstName: string, _middleName: string, _birthDate: Date, _documentType: DocType, _documentSeries: string, _documentNumber: string);
        get lastName(): string;
        get firstName(): string;
        get middleName(): string;
        get birthDate(): Date;
        get documentType(): DocType;
        get documentSeries(): string;
        get documentNumber(): string;
        displayInfo(): void;
    }
    class VehicleImpl implements Vehicle {
        private _brand;
        private _model;
        private _year;
        private _vin;
        private _registrationNumber;
        private _owner;
        constructor(_brand: string, _model: string, _year: number, _vin: string, _registrationNumber: string, _owner: Owner);
        get brand(): string;
        get model(): string;
        get year(): number;
        get vin(): string;
        get registrationNumber(): string;
        get owner(): Owner;
        getInfo(): string;
        displayInfo(): void;
    }
    enum BodyType {
        Sedan = "\u0421\u0435\u0434\u0430\u043D",
        Coupe = "\u041A\u0443\u043F\u0435",
        SUV = "\u0412\u043D\u0435\u0434\u043E\u0440\u043E\u0436\u043D\u0438\u043A",
        Hatchback = "\u0425\u044D\u0442\u0447\u0431\u0435\u043A"
    }
    enum CarClass {
        Economy = "\u042D\u043A\u043E\u043D\u043E\u043C",
        Business = "\u0411\u0438\u0437\u043D\u0435\u0441",
        Luxury = "\u041B\u044E\u043A\u0441"
    }
    interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }
    class CarImpl extends VehicleImpl implements Car {
        private _bodyType;
        private _carClass;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, _bodyType: BodyType, _carClass: CarClass);
        get bodyType(): BodyType;
        get carClass(): CarClass;
        displayInfo(): void;
    }
    interface Motorbike extends Vehicle {
        frameType: string;
        isForSport: boolean;
    }
    class MotorbikeImpl extends VehicleImpl implements Motorbike {
        private _frameType;
        private _isForSport;
        constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, _frameType: string, _isForSport: boolean);
        get frameType(): string;
        get isForSport(): boolean;
        displayInfo(): void;
    }
}
