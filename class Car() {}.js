class Car {
    constructor() {
        this.cost = function () {
            return 20000;
        }
    }
}
function carWithAC(car) {
    car.hasAC = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 500;
    }
}
function carWithAutoTransmission(car) {
    car.hasAutoTransmission = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 2000;
    }
}
function carWithPowerLocks(car) {
    car.hasPowerLocks = true;
    const prevCost = car.cost();
    car.cost = function () {
        return prevCost + 500;
    }
}

module.exports = Car;