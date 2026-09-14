// 🌸 Butterfly Garden

const plantBtn = document.getElementById("plantBtn");
const waterBtn = document.getElementById("waterBtn");

const gardenArea = document.querySelector(".garden-area");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress span");
const gardenMessage = document.querySelector(".garden-message");

let flowers = 0;
let watered = false;
let butterflies = 0;


// 🌷 Plant a flower
plantBtn.addEventListener("click", () => {

    if (flowers >= 10) {
        gardenMessage.textContent =
            "Your garden is completely bloomed! 🌸🦋";
        return;
    }

    flowers++;

    createFlower();

    updateProgress();

    gardenMessage.textContent =
        "Something beautiful is beginning to grow... 🌷";
});


// 🌸 Create flower
function createFlower() {

    const flower = document.createElement("div");

    flower.classList.add("flower");

    const flowersList = [
        "🌷",
        "🌸",
        "🌼",
        "🌺",
        "🌻"
    ];

    flower.textContent =
        flowersList[Math.floor(Math.random() * flowersList.length)];

    // Random position
    const randomLeft = Math.random() * 85 + 5;

    flower.style.left = randomLeft + "%";

    flower.style.bottom =
        Math.random() * 25 + 15 + "px";

    gardenArea.appendChild(flower);
}


// 💧 Water the garden
waterBtn.addEventListener("click", () => {

    if (flowers === 0) {

        gardenMessage.textContent =
            "Plant a little flower first 🌱💗";

        return;
    }

    watered = true;

    gardenMessage.textContent =
        "Your flowers feel refreshed! 💧🌸";

    createSparkles();
});


// ✨ Create water sparkles
function createSparkles() {

    for (let i = 0; i < 8; i++) {

        const sparkle = document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.textContent = "✨";

        sparkle.style.left =
            Math.random() * 90 + 5 + "%";

        sparkle.style.top =
            Math.random() * 60 + 20 + "%";

        gardenArea.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1200);
    }
}


// 🌱 Update progress
function updateProgress() {

    const percentage = flowers * 10;

    progressFill.style.width =
        percentage + "%";

    progressText.textContent =
        `${flowers} / 10 🌸`;


    if (flowers === 3) {

        gardenMessage.textContent =
            "A little visitor has arrived... 🦋🌷";

        createButterfly();
    }

    if (flowers === 5) {

        gardenMessage.textContent =
            "Your garden is attracting butterflies! 🦋✨";

        createButterfly();
    }

    if (flowers === 8) {

        gardenMessage.textContent =
            "Your garden is becoming magical! 🦋🌸";

        createButterfly();
    }

    if (flowers === 10) {

        gardenMessage.textContent =
            "Your garden is full of flowers and butterflies! 🦋🌸✨";
    }
}

// 🦋 Create a butterfly
function createButterfly() {

    butterflies++;

    const butterfly = document.createElement("div");

    butterfly.classList.add("butterfly");

    butterfly.textContent = "🦋";

    // Random starting position
    butterfly.style.left =
        Math.random() * 75 + 10 + "%";

    butterfly.style.top =
        Math.random() * 45 + 15 + "%";

    // Different flight duration
    butterfly.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    gardenArea.appendChild(butterfly);
}