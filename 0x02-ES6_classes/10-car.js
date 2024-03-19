export default class Car{
    constructor(brand, motor, color){
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const clonedCar = new this.constructor();
        // Object.getOwnPropertyNames(this).forEach(prop => {
        //     if (prop !== '_cloneCar') {
        //         clonedCar[prop] = this[prop];
        //     }
        // });
        return clonedCar;
    }
}
