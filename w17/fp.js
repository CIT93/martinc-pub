class FP {
    constructor(
        first, last, houseMembers, houseSize, foodType, foodSrc,
        dishwasherUses, washingMachineUses, hasDishwasher, hasWashingMachine,
        garbageCans, recyclingCategories, householdPurchases, car,
        publicTransport,
        flight,
    ) {
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
        this.garbageCans = garbageCans || 0;
        this.recyclingCategories = recyclingCategories || [];
        this.householdPurchases = householdPurchases || 0;
        this.car = car;
        this.publicTranspo = publicTransport;
        this.flight = flight;
    
        this.calculateHouseHoldPoints();
        this.calculateHouseSizePoints();
        this.calculateFoodTypePoints();
        this.calculateFoodSrc();
        this.calculateHouseholdPurchasePoints();
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
    
    calculateHouseholdPurchasePoints() {
        const purchases = this.householdPurchases || 0;
        if (purchases > 7) {
            this.householdPurchasePoints = 10;
        } else if (purchases >= 5) {
            this.householdPurchasePoints = 8;
        } else if (purchases >= 3) {
            this.householdPurchasePoints = 6;
        } else if (purchases >= 1) {
            this.householdPurchasePoints = 4;
        } else {
            this.householdPurchasePoints = 2;
        }
    }
    
    calculateGarbagePoints() {
        if (this.garbageCans >= 4) {
            this.garbagePoints = 50;
        } else if (this.garbageCans === 3) {
            this.garbagePoints = 40;
        } else if (this.garbageCans === 2) {
            this.garbagePoints = 30;
        } else if (this.garbageCans === 1) {
            this.garbagePoints = 20;
        } else if (this.garbageCans <= 0.5) {
            this.garbagePoints = 5;
        } else {
            this.garbagePoints = 0;
        }
    }
    
    calculateRecyclingPoints() {
        const totalRecyclingPoints = 24;
        const pointsPerCategory = 4;
    
        this.recyclingPoints = totalRecyclingPoints - (this.recyclingCategories.length * pointsPerCategory);
    
        if (this.recyclingPoints < 0) {
            this.recyclingPoints = 0;
        }
    }
    

    calculateTotal() {
        this.totalValue = this.houseHoldPoints 
                        + this.houseSizePoints 
                        + this.foodTypePoints 
                        + this.foodSrcPts 
                        + this.waterConsumptionPoints 
                        + this.garbagePoints 
                        + this.recyclingPoints;
    }

}

export { FP };