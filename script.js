const modal = document.getElementById("modal");
const rulesButton = document.getElementById("rules-button");
const closeButton = document.getElementById("close-button");

const iconsContainer = document.getElementById("icons-container");
const pickedContainer = document.getElementById("picked-container");
const resultsContainerD = document.getElementById("results-container-d");
const resultsContainerM = document.getElementById("results-container-m");

const score = document.getElementById("score");

const resultsTextM = document.getElementById("results-text-m");
const resultsTextD = document.getElementById("results-text-d");

const paperIcon = document.getElementById("paper-icon");
const scissorsIcon = document.getElementById("scissors-icon");
const rockIcon = document.getElementById("rock-icon");

const icons = [paperIcon, scissorsIcon, rockIcon];

const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");
const placeholderIcon = document.getElementById("computer-placeholder");

let player;
let computer;
let scoreNumber = Number(localStorage.getItem("score"));

// If no key for score local storage exists, default to 0
if (!scoreNumber) {
    scoreNumber = 0;
}

score.textContent = scoreNumber;

// Open modal
rulesButton.addEventListener("click", openModal);

function openModal() {
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
}

// Close modal
closeButton.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.toggle("hidden");
    modal.classList.toggle("flex");
}

// Loop through the icons array and attach handleclick to whatever was clicked
icons.forEach((icon) => icon.addEventListener("click", handleClick));

function handleClick(e) {
    // Hide the icons container and show the picked icons container
    iconsContainer.classList.toggle("hidden");
    pickedContainer.classList.toggle("hidden");
    pickedContainer.classList.toggle("flex");

    // Clone whichever icon was picked and show it, this prevents the player icon from disappearing when the computer picks the same one
    const clone = e.target.cloneNode(true);

    // Larger screens, increase icon size
    clone.classList.add("md:w-[200px]", "md:h-[200px]");

    playerIcon.append(clone);

    // Set the player choice variable
    player = e.target.dataset.icon;

    // 1 second delay to computer pick
    setTimeout(setComputerIcon, 1000);
}

function setComputerIcon() {
    // Hide the placeholder
    placeholderIcon.classList.toggle("hidden");

    // Selected a random icon
    const randomIcon = Math.floor(Math.random() * icons.length);

    // Clone the computer selection to prevent it from disappearing when playing again
    const clone = icons[randomIcon].cloneNode(true);

    // Larger screens, increase icon size
    clone.classList.add("md:w-[200px]", "md:h-[200px]");

    // Show the icon
    computerIcon.append(clone);

    // Set the computer choice variable
    computer = icons[randomIcon].dataset.icon;

    // Call determineWinner function
    determineWinner();
}

function determineWinner() {
    if (player === "paper" && computer === "paper") {
        tie();
    }

    if (player === "paper" && computer === "rock") {
        win();
    }

    if (player === "paper" && computer === "scissors") {
        lose();
    }

    if (player === "rock" && computer === "paper") {
        lose();
    }

    if (player === "rock" && computer === "rock") {
        tie();
    }

    if (player === "rock" && computer === "scissors") {
        win();
    }

    if (player === "scissors" && computer === "paper") {
        win();
    }

    if (player === "scissors" && computer === "rock") {
        lose();
    }

    if (player === "scissors" && computer === "scissors") {
        tie();
    }
}

function tie() {
    resultsContainerM.classList.toggle("hidden");
    resultsContainerM.classList.toggle("flex");

    resultsContainerD.classList.toggle("hidden");
    resultsContainerD.classList.toggle("flex");

    resultsTextM.textContent = "You Tied";
    resultsTextD.textContent = "You Tied";
}

function win() {
    resultsContainerM.classList.toggle("hidden");
    resultsContainerM.classList.toggle("flex");

    resultsContainerD.classList.toggle("hidden");
    resultsContainerD.classList.toggle("flex");

    // Apply filter to player icon
    playerIcon.classList.add("drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]");

    resultsTextM.textContent = "You won";
    resultsTextD.textContent = "You won";
    scoreNumber += 1;
    score.textContent = scoreNumber;
}

function lose() {
    resultsContainerM.classList.toggle("hidden");
    resultsContainerM.classList.toggle("flex");

    resultsContainerD.classList.toggle("hidden");
    resultsContainerD.classList.toggle("flex");

    // Apply filter to computer icon
    computerIcon.classList.add("drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]");

    resultsTextM.textContent = "You lose";
    resultsTextD.textContent = "You lose";
    scoreNumber -= 1;
    score.textContent = scoreNumber;
}

function playAgain() {
    // Store
    localStorage.setItem("score", scoreNumber);

    // Remove filter from icon
    playerIcon.classList.remove(
        "drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]"
    );

    computerIcon.classList.remove(
        "drop-shadow-[0_0px_35px_rgba(255,255,255,.5)]"
    );

    iconsContainer.classList.toggle("hidden");
    pickedContainer.classList.toggle("hidden");
    pickedContainer.classList.toggle("flex");

    resultsContainerM.classList.toggle("hidden");
    resultsContainerM.classList.toggle("flex");

    resultsContainerD.classList.toggle("hidden");
    resultsContainerD.classList.toggle("flex");

    placeholderIcon.classList.toggle("hidden");

    playerIcon.removeChild(playerIcon.firstChild);
    computerIcon.removeChild(computerIcon.firstChild);
}
