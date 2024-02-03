function myTimer() {
    let time = new Date(); // Get the current time
    document.querySelector(".time-container").innerHTML = time.toLocaleTimeString(); // Display the current time
}

setInterval(myTimer, 1000); // Update the time every second







