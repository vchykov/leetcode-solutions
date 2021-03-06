export class ParkingSystem {
    private quantitySpots: number[];
    private freeSpots: number[];

    constructor(big: number, medium: number, small: number) {
        this.quantitySpots = [];
        this.freeSpots = [];
        this.freeSpots[1] = big;
        this.freeSpots[2] = medium;
        this.freeSpots[3] = small;
    }

    addCar(carType: number): boolean {
        if (this.freeSpots[carType] > 0) {
            this.freeSpots[carType]--;
            return true;
        } else {
            return false;
        }
    }
}
