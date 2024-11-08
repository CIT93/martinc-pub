function startExercise() {
    // Getting user inputs
    const exerciseType = document.getElementById("exerciseType").value;  // type of exercise input
    const reps = document.getElementById("reps").value;  // rep value input
    const timeInMinutes = document.getElementById("time").value; // time in minutes input
    const timeInMilliseconds = timeInMinutes * 60000;  // this where the time is converted
    const outputDiv = document.getElementById("output"); // ouput
    outputDiv.innerHTML = `<p> GET READY! For your ${exerciseType} exercise for ${reps} reps! </p>`;
// this func shows the GO!
    function startMessage() {
        outputDiv.innerHTML += `<p> GO GO GO!!! Your ${exerciseType} exercise starts now! </p>`;
    }
// this func shows the STOP!!!
    function stopMessage() {
        outputDiv.innerHTML += `<p> STOP!!! Your ${exerciseType} exercise is done! </p>`;
    }
    startMessage();  // call startMessage
    setTimeout(stopMessage, timeInMilliseconds);  // sets the timeout for the message after the time in minutes
}