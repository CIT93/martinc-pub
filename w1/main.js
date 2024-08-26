console.log ("Hello from inside the main.js file")

// let myVar;

const myVar = "Martin (string)";
const myVarType = typeof(myVar);
console.log("myVarType" + myVarType);
console.log(`myVarType ${myVarType}`);

if(myVarType === "number") {
    console.log(`will line 11 run`);
} else {
    console.log(`will line 13 run`);
}

function runNow () {
    console.log(`inside the function`);
}

runNow();
runNow();