function startFrame() {
    const duration = 20 * 1000,
        animationEnd = Date.now() + duration;

    let skew = 40;

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    function frame() {
        const timeLeft = animationEnd - Date.now(),
            ticks = Math.floor(Math.max(200, 500 * (timeLeft / duration)));

        skew = Math.max(0.8, skew - 0.001);

        confetti({
            particleCount: 1,
            startVelocity: 0,
            ticks: ticks,

            origin: {
                x: Math.random(),
                // since particles fall down, skew start toward the top
                y: Math.random() * skew - 0.2,
            },

            colors: ["#bb0000", "#ffffff"],
            shapes: ["circle"],
            gravity: randomInRange(0.4, 0.6),
            scalar: randomInRange(0.4, 1),
            drift: randomInRange(-0.4, 0.4),
        });

        if (timeLeft > 0) {
            requestAnimationFrame(frame);
        }
    }

    frame();

}


let speakerOn = document.getElementById("speaker-on")
let speakerOff = document.getElementById("speaker-off")
let musics = document.getElementsByClassName("music")
let song = document.getElementById("song")
let partyPopper = document.getElementById("party-popper")

setTimeout(() => {
    // song.autoplay();
    startFrame();
}, 3000)

speakerOff.addEventListener("click", (e) => {
    speakerOn.classList.toggle("speaker-hide");
    speakerOff.classList.toggle("speaker-hide");
    Array.from(musics).forEach(element => {
        // element.className.toggle("speaker-hide");
        // element.toggleAttribute("speaker-hide")
        element.classList.toggle("speaker-hide");
    });


    // console.log(window.frames[0].document).getElementById("song")[0].play();
    song.play();
});

speakerOn.addEventListener("click", (e) => {

    speakerOff.classList.toggle("speaker-hide");
    speakerOn.classList.toggle("speaker-hide");

    Array.from(musics).forEach(element => {
        // element.className.toggle("speaker-hide");
        // element.toggleAttribute("speaker-hide")
        element.classList.toggle("speaker-hide");
    });

    // console.log(window.frames[0].document).getElementById("song")[0].pause();
    song.pause();
});

partyPopper.addEventListener("click", (e) => startFrame())

