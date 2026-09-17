// 🌸 Butterfly Garden


// ================================
// 🌷 GET HTML ELEMENTS
// ================================

const plantBtn = document.getElementById("plantBtn");
const waterBtn = document.getElementById("waterBtn");

const gardenArea = document.querySelector(".garden-area");
const progressFill = document.querySelector(".progress-fill");
const progressText = document.querySelector(".progress span");
const gardenMessage = document.querySelector(".garden-message");


// 🌌 Opening Screen

const openingScreen = document.getElementById("openingScreen");
const enterGarden = document.getElementById("enterGarden");


// 🐈 Cat

const gardenCat = document.getElementById("gardenCat");


// 🌸 Mood Elements

const moodButtons = document.querySelectorAll(".mood-btn");
const moodMessage = document.getElementById("moodMessage");


// ================================
// 🌱 GARDEN VARIABLES
// ================================

let flowers = 0;
let watered = false;
let butterflies = 0;


// ================================
// 🌷 PLANT A FLOWER
// ================================

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


// ================================
// 🌸 CREATE FLOWER
// ================================

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
        flowersList[
            Math.floor(Math.random() * flowersList.length)
        ];

    const randomLeft =
        Math.random() * 85 + 5;

    flower.style.left =
        randomLeft + "%";

    flower.style.bottom =
        Math.random() * 25 + 15 + "px";

    gardenArea.appendChild(flower);
}


// ================================
// 💧 WATER THE GARDEN
// ================================

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


// ================================
// ✨ WATER SPARKLES
// ================================

function createSparkles() {

    for (let i = 0; i < 8; i++) {

        const sparkle =
            document.createElement("div");

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


// ================================
// 🌱 UPDATE PROGRESS
// ================================

function updateProgress() {

    const percentage =
        flowers * 10;

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


// ================================
// 🦋 CREATE BUTTERFLY
// ================================

function createButterfly() {

    butterflies++;

    const butterfly =
        document.createElement("div");

    butterfly.classList.add("butterfly");

    butterfly.textContent = "🦋";

    butterfly.style.left =
        Math.random() * 75 + 10 + "%";

    butterfly.style.top =
        Math.random() * 45 + 15 + "%";

    butterfly.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    gardenArea.appendChild(butterfly);
}


// ================================
// 🌷 ENTER THE GARDEN
// ================================

enterGarden.addEventListener("click", () => {

    openingScreen.classList.add("hide");

});


// ================================
// 🐈 RANDOM CAT VISITS
// ================================

function catVisit() {

    gardenCat.classList.remove(
        "walk-right",
        "walk-left"
    );

    // 🐈 Always walk RIGHT → LEFT

    gardenCat.classList.add("walk-left");


    setTimeout(() => {

        gardenCat.classList.remove(
            "walk-left"
        );

    }, 8000);


    scheduleNextCat();
}


// ================================
// ⏰ RANDOM CAT TIMING
// ================================

function scheduleNextCat() {

    // Random delay between 10 and 25 seconds

    const randomDelay =
        Math.floor(
            Math.random() * 15000
        ) + 10000;

    setTimeout(
        catVisit,
        randomDelay
    );
}


// ================================
// 🐾 START CAT SYSTEM
// ================================

scheduleNextCat();


// ================================
// 🌸 GARDEN MOOD
// ================================

moodButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove previous selection

        moodButtons.forEach((btn) => {
            btn.classList.remove("selected");
        });


        // Select current mood

        button.classList.add("selected");


        const mood =
            button.dataset.mood;


        // 🌸 HAPPY

        if (mood === "happy") {

            moodMessage.textContent =
                "Your garden is blooming with happiness! 🌸✨";

            gardenMessage.textContent =
                "A little happiness makes everything brighter. 🌷";

            createSparkles();
        }


        // 🌿 PEACEFUL

        if (mood === "peaceful") {

            moodMessage.textContent =
                "Take a slow breath. Let your garden be peaceful. 🌿";

            gardenMessage.textContent =
                "Breathe in... breathe out... enjoy your garden. 🌿💗";
        }


        // 🌧️ SLEEPY

        if (mood === "sleepy") {

            moodMessage.textContent =
                "It's okay to slow down and rest for a while. 🌧️💤";

            gardenMessage.textContent =
                "Even little gardens need quiet moments. 🌱💤";
        }


        // 🌙 DREAMY

        if (mood === "dreamy") {

            moodMessage.textContent =
                "Let your imagination wander among the stars. 🌙✨";

            gardenMessage.textContent =
                "Your garden is dreaming tonight... 🌙🦋";

            createStars();
        }

    });

});


// ================================
// ✨ CREATE MOOD STARS
// ================================

function createStars() {

    if (document.querySelector(".mood-stars")) {
        return;
    }


    const stars =
        document.createElement("div");

    stars.classList.add("mood-stars");


    for (let i = 0; i < 12; i++) {

        const star =
            document.createElement("span");

        star.textContent = "✦";

        star.style.left =
            Math.random() * 90 + "%";

        star.style.top =
            Math.random() * 70 + "%";

        star.style.animationDelay =
            Math.random() * 2 + "s";

        stars.appendChild(star);
    }


    gardenArea.appendChild(stars);
}