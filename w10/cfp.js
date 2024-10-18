const determineHouseSizePts = function(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
};

const determineHouseholdPts = function(numberInhousehold) {
  let houseHoldPoints = 0;
  if (numberInhousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInhousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInhousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInhousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInhousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInhousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInhousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
};

export { determineHouseSizePts, determineHouseholdPts };
