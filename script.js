const teamImages = {
    1: "imgs/speed.png",
    2: "imgs/power.png",
    3: "imgs/tactics.png"
};

function preloadImage(src) {
    const img = new Image();
    img.src = src;
}

Object.values(teamImages).forEach(preloadImage);

// play button sound and generate team on click
const generatorBtn = document.getElementById('team-generator');
if (generatorBtn) {
    generatorBtn.addEventListener('click', () => {
        const btnSound = new Audio('audio/boop.mp3');
        btnSound.volume = 0.10;
        btnSound.play();
        generateTeam();
    });
}

function generateTeam() {
    const teamNum = Math.floor(Math.random() * 3) + 1;

    // replace the main combined image with the chosen team image
    const mainImg = document.getElementById('teams-image');
    if (mainImg) {
        mainImg.src = teamImages[teamNum];
        mainImg.style.display = 'block';
        mainImg.style.margin = '0 auto';
        mainImg.classList.add('team-selected');
    }

    // hide any separate image elements so they don't appear on the side
    document.querySelectorAll('.pics, .pic').forEach(el => {
        el.style.display = 'none';
    });

    const rewardSound = new Audio('audio/reward.mp3');
    rewardSound.volume = 0.10;
    rewardSound.play();
}


