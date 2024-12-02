class FP {
    constructor(first, last, houseMembers, houseSize, foodType, foodSrc, dishwasherUses, washingMachineUses, hasDishwasher, hasWashingMachine) {
        this.first = first;
        this.last = last;
        this.houseMembers = houseMembers;
        this.houseSize = houseSize;
        this.foodType = foodType;
        this.foodSrc = foodSrc;
        this.dishwasherUses = dishwasherUses || 0;
        this.washingMachineUses = washingMachineUses || 0;
        this.hasDishwasher = hasDishwasher || false;
        this.hasWashingMachine = hasWashingMachine || false;

        this.calculateHouseHoldPoints();
        this.calculateHouseSizePoints();
        this.calculateFoodTypePoints();
        this.calculateFoodSrc();
        this.calculateWaterConsumption();
        this.calculateTotal();
    }

    calculateHouseHoldPoints() {
        if (this.houseMembers === 1) {
            this.houseHoldPoints = 14;
        } else if (this.houseMembers === 2) {
            this.houseHoldPoints = 12;
        } else if (this.houseMembers === 3) {
            this.houseHoldPoints = 10;
        } else if (this.houseMembers === 4) {
            this.houseHoldPoints = 8;
        } else if (this.houseMembers === 5) {
            this.houseHoldPoints = 6;
        } else if (this.houseMembers === 6) {
            this.houseHoldPoints = 4;
        } else if (this.houseMembers > 6) {
            this.houseHoldPoints = 2;
        }
    }

    calculateHouseSizePoints() {
        if (this.houseSize === "large") {
            this.houseSizePoints = 10;
        } else if (this.houseSize === "medium") {
            this.houseSizePoints = 7;
        } else if (this.houseSize === "small") {
            this.houseSizePoints = 4;
        } else if (this.houseSize === "apt") {
            this.houseSizePoints = 2;
        }
    }

    calculateFoodTypePoints() {
        if (this.foodType === "domestic meat on a daily basis") {
            this.foodTypePoints = 10;
        } else if (this.foodType === "meat a few times per week") {
            this.foodTypePoints = 8;
        } else if (this.foodType === "vegetarian") {
            this.foodTypePoints = 4;
        } else if (this.foodType === "vegan") {
            this.foodTypePoints = 2;
        } else if (this.foodType === "prepackaged convenience food") {
            this.foodTypePoints = 12;
        } else if (this.foodType === "good balance of fresh and convenience food") {
            this.foodTypePoints = 6;
        } else if (this.foodType === "fresh, locally grown, or hunted food") {
            this.foodTypePoints = 2;
        }
    }

    calculateFoodSrc() {
        if(this.foodSrc === "packed") {
            this.foodSrcPts = 12;
        } else if (this.foodSrc === "balance") {
            this.foodSrcPts = 6;
        } else if (this.foodSrc === "local") {
            this.foodSrcPts = 2;
        }
    }

    calculateWaterConsumption() {
        const calculatePoints = (uses) => {
            if (uses > 9) return 3;
            if (uses >= 4) return 2;
            if (uses >= 1) return 1;
            return 0;
        };

        let waterPoints = 0;
        if (this.hasDishwasher) waterPoints += calculatePoints(this.dishwasherUses);
        if (this.hasWashingMachine) waterPoints += calculatePoints(this.washingMachineUses);

        this.waterConsumptionPoints = waterPoints;
    }

    calculateTotal() {
        this.totalValue = this.houseHoldPoints + this.houseSizePoints + this.foodTypePoints + this.foodSrcPts + this.waterConsumptionPoints;
    }
}

export { FP };