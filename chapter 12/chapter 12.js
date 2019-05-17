var trainSpeed = 250;
var trainPosition = 0;
var animation;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", startTrain);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function startTrain() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 260) {
        alert("Crash!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 260) {
        clearInterval(animation);
        alert("Whew! That was close!");
        console.log("Whew! That was close!");
    } else {
        clearInterval(animation);
        alert("Good brakes!");
        console.log("Good brakes!");
    }
}