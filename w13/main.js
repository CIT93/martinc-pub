const FORM = document.getElementById("output");
const submitBtn = document.getElementById("submitBtn");

function startExercise() {

    return new Promise((resolve, reject) => {
    FORM.innerHTML = "";
        // Getting user inputs
    const exerciseType = document.getElementById("exerciseType").value;  // type of exercise input
    const reps = document.getElementById("reps").value;  // rep value input
    const timeInMinutes = document.getElementById("time").value; // time in minutes input
    const timeInMilliseconds = timeInMinutes * 60000;  // this where the time is converted
    // this is the validation for the inputs
    if (!exerciseType || !reps || !timeInMinutes) {
        reject("Please enter valid criteria");
        return;
    }

    if (isNaN(reps) || reps <= 0) {
        reject("Reps must be greater than zero");
        return;
    }

    if (isNaN(timeInMinutes) || timeInMinutes <= 0) {
        reject("Time must be greater than zero");
        return;
    }

    FORM.innerHTML = `<p> GET READY! For your ${exerciseType} exercise for ${reps} reps! </p>`;

    // this func shows the GO!
    function startMessage() {
        FORM.innerHTML += `<p> GO GO GO!!! Your ${exerciseType} exercise starts now! </p>`;
    }

    // this func shows the STOP!!!
    function stopMessage() {
        FORM.innerHTML += `<p> STOP!!! Your ${exerciseType} exercise is done! </p>`;
        resolve();
    }
        startMessage();  // call startMessage
        setTimeout(stopMessage, timeInMilliseconds);  // sets the timeout for the message after the time in minutes
    });
}

submitBtn.addEventListener("click", () => {
    startExercise()
        .then(() => {
            FORM.innerHTML += `<p>You did it!</p>`;
        })
        .catch(error => {
            // Display error message
            FORM.innerHTML = `<p>Error: ${error}</p>`;
        });
});