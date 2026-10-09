const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {
    startBackgroundMusic();
    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    openingScreen.style.transition = "opacity 1.8s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {
        openingScreen.style.display = "none";
        birthdayAnimation.classList.remove("hidden");

        birthdayAnimation.innerHTML = `
            <div class="gate-scene">

                <!-- NIGHT SKY -->
                <div class="night-sky">

                    <div class="moon"></div>

                    <div class="stars">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                </div>

                <!-- GROUND -->
                <div class="ground"></div>

                <!-- BOY -->
                <div class="character">
                    <img src="1788853009972.png" alt="">
                </div>

                <!-- BIG WOODEN GATE -->
                <div class="gate-area">

                    <div class="gate">

                        <div class="gate-roof">
                            <div class="roof-detail"></div>
                        </div>

                        <div class="gate-left">
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>

                            <div class="metal-decoration top"></div>
                            <div class="metal-decoration bottom"></div>
                        </div>

                        <div class="gate-right">
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>
                            <div class="wood-panel"></div>

                            <div class="metal-decoration top"></div>
                            <div class="metal-decoration bottom"></div>
                        </div>

                        <div class="gate-handle"></div>

                    </div>

                    <div class="knock-text">
                        knock... knock...
                    </div>

                </div>

                <!-- CENTER WELCOME MESSAGE -->
                <div class="welcome-message">
                    Welcome to the party, my cutiee...!! 💗
                </div>

            </div>
        `;

        addGateStyles();

        /*
         * BOY WALKS TOWARD THE GATE
         */
        setTimeout(() => {
            document
                .querySelector(".character")
                .classList.add("walking");
        }, 700);


        /*
         * KNOCK
         */
        setTimeout(() => {

            const gate = document.querySelector(".gate");
            const knockText = document.querySelector(".knock-text");

            gate.classList.add("knocking");
            knockText.classList.add("show");

            setTimeout(() => {
                gate.classList.remove("knocking");
            }, 700);

        }, 4300);


        /*
         * WELCOME MESSAGE
         */
        setTimeout(() => {
            document
                .querySelector(".welcome-message")
                .classList.add("show");
        }, 4700);


        /*
         * KEEP SCREEN FOR A FEW SECONDS,
         * THEN OPEN THE GATE AUTOMATICALLY
         */
        setTimeout(() => {

    const gate = document.querySelector(".gate");

    gate.classList.add("opening");

    setTimeout(() => {

        startPartyScene();

    }, 1700);

}, 7800);

    }, 1800);
});


/*
==================================================
GATE SCENE STYLES
==================================================
*/

function addGateStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .gate-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background: #030207;
        font-family: Georgia, "Times New Roman", serif;
    }


    /* =========================
       NIGHT SKY
    ========================= */

    .night-sky {
        position: absolute;
        inset: 0;

        background:
            radial-gradient(
                circle at 50% 40%,
                rgba(67, 48, 75, 0.25),
                transparent 42%
            ),
            radial-gradient(
                circle at 75% 15%,
                rgba(80, 55, 90, 0.16),
                transparent 30%
            ),
            linear-gradient(
                to bottom,
                #020208 0%,
                #070511 55%,
                #100a13 100%
            );

        animation: skyReveal 3s ease forwards;
    }


    @keyframes skyReveal {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }


    /* =========================
       MOON
    ========================= */
.moon {
    position: absolute;

    width: 90px;
    height: 90px;

    right: 10%;
    top: 8%;

    border-radius: 50%;

    background: #fff8df;

    box-shadow:
        0 0 35px rgba(255, 245, 200, 0.55);

    z-index: 3;
    overflow: hidden;
}

.moon::after {
    content: "";

    position: absolute;

    top: -5px;
    left: 25px;

    width: 90px;
    height: 90px;

    border-radius: 50%;

    background: #07101f;
}
    


    @keyframes moonGlow {

        from {
            box-shadow:
                0 0 18px rgba(255,255,255,.20),
                0 0 40px rgba(255,235,250,.08);
        }

        to {
            box-shadow:
                0 0 28px rgba(255,255,255,.32),
                0 0 70px rgba(255,235,250,.16);
        }
    }


    /* =========================
       TWINKLING STARS
    ========================= */

    .stars {
        position: absolute;
        inset: 0;
    }

    .stars span {
        position: absolute;

        width: 3px;
        height: 3px;

        border-radius: 50%;

        background: white;

        box-shadow: 0 0 7px white;

        animation:
            twinkle 2.5s ease-in-out infinite alternate;
    }

    .stars span:nth-child(1)  { top: 12%; left: 8%;  animation-delay: .2s; }
    .stars span:nth-child(2)  { top: 20%; left: 18%; animation-delay: 1s; }
    .stars span:nth-child(3)  { top: 8%;  left: 32%; animation-delay: .5s; }
    .stars span:nth-child(4)  { top: 27%; left: 42%; animation-delay: 1.6s; }
    .stars span:nth-child(5)  { top: 14%; left: 55%; animation-delay: .8s; }
    .stars span:nth-child(6)  { top: 31%; left: 65%; animation-delay: 1.3s; }
    .stars span:nth-child(7)  { top: 18%; left: 78%; animation-delay: .4s; }
    .stars span:nth-child(8)  { top: 38%; left: 88%; animation-delay: 1.8s; }
    .stars span:nth-child(9)  { top: 43%; left: 12%; animation-delay: 1.1s; }
    .stars span:nth-child(10) { top: 36%; left: 28%; animation-delay: .6s; }
    .stars span:nth-child(11) { top: 45%; left: 52%; animation-delay: 1.5s; }
    .stars span:nth-child(12) { top: 50%; left: 72%; animation-delay: .9s; }
    .stars span:nth-child(13) { top: 25%; left: 94%; animation-delay: 1.7s; }
    .stars span:nth-child(14) { top: 10%; left: 67%; animation-delay: .3s; }
    .stars span:nth-child(15) { top: 55%; left: 38%; animation-delay: 1.4s; }
    .stars span:nth-child(16) { top: 33%; left: 5%;  animation-delay: .7s; }
    .stars span:nth-child(17) { top: 48%; left: 82%; animation-delay: 1.9s; }
    .stars span:nth-child(18) { top: 16%; left: 46%; animation-delay: 1.2s; }
    .stars span:nth-child(19) { top: 29%; left: 72%; animation-delay: .1s; }
    .stars span:nth-child(20) { top: 41%; left: 59%; animation-delay: 1.6s; }


    @keyframes twinkle {

        0% {
            opacity: .15;
            transform: scale(.7);
        }

        50% {
            opacity: 1;
            transform: scale(1.5);
        }

        100% {
            opacity: .25;
            transform: scale(.8);
        }
    }


    /* =========================
       GROUND
    ========================= */

    .ground {
        position: absolute;

        bottom: 0;
        left: 0;

        width: 100%;
        height: 28%;

        background:
            linear-gradient(
                to top,
                #020103,
                rgba(5,3,8,.92),
                transparent
            );
    }


    /* =========================
       CHARACTER
    ========================= */

    .character {

        position: absolute;

        left: -220px;
        bottom: 10%;

        width: 170px;

        z-index: 10;

        transition:
            left 3.6s cubic-bezier(.15,.7,.2,1);
    }


    .character img {
        width: 100%;
        height: auto;
        display: block;
    }


    .character.walking {

        left: calc(50% - 300px);
    }


    /* =========================
       BIG WOODEN GATE
    ========================= */

    .gate-area {

        position: absolute;

        left: 50%;
        bottom: 7%;

        transform: translateX(-50%);

        z-index: 8;
    }


    .gate {

        position: relative;

        width: 440px;
        height: 510px;

        transform-origin: bottom center;

        transition: transform 1.7s ease;
    }


    /* WOODEN DOOR */

    .gate-left,
    .gate-right {

        position: absolute;

        bottom: 0;

        width: 210px;
        height: 410px;

        overflow: hidden;

        border: 6px solid #352017;

        box-sizing: border-box;

        background:

            repeating-linear-gradient(
                90deg,
                #4b2b1c 0px,
                #5b3623 28px,
                #3d2418 32px,
                #623b26 65px
            );

        box-shadow:
            inset 0 0 35px rgba(0,0,0,.65),
            0 12px 30px rgba(0,0,0,.5);

        transition:
            transform 1.7s cubic-bezier(.2,.7,.2,1);
    }


    .gate-left {
        left: 0;
        transform-origin: left center;
    }


    .gate-right {
        right: 0;
        transform-origin: right center;
    }


    /* WOOD PANELS */

    .wood-panel {

        width: 72%;
        height: 80px;

        margin: 28px auto;

        border: 3px solid #24150f;

        background:
            linear-gradient(
                90deg,
                #613a25,
                #70442a,
                #4a2b1b
            );

        box-shadow:
            inset 0 0 12px rgba(0,0,0,.45);
    }


    /* METAL DECORATION */

    .metal-decoration {

        position: absolute;

        left: 50%;

        width: 90px;
        height: 90px;

        transform: translateX(-50%) rotate(45deg);

        border: 4px solid #8a6b50;

        box-shadow:
            0 0 8px rgba(190,160,120,.15);
    }


    .metal-decoration.top {
        top: 65px;
    }


    .metal-decoration.bottom {
        bottom: 50px;
    }


    /* GATE ROOF */

    .gate-roof {

        position: absolute;

        top: 0;
        left: 0;

        width: 440px;
        height: 110px;

        background:
            linear-gradient(
                135deg,
                #291b16,
                #5a3826,
                #281a15
            );

        clip-path:
            polygon(
                50% 0,
                100% 55%,
                100% 100%,
                0 100%,
                0 55%
            );

        border: 5px solid #382319;

        box-sizing: border-box;

        box-shadow:
            0 10px 20px rgba(0,0,0,.5);
    }


    .roof-detail {

        position: absolute;

        width: 28px;
        height: 28px;

        left: 50%;
        top: 28px;

        transform:
            translateX(-50%)
            rotate(45deg);

        border: 4px solid #9b795c;
    }


    /* GATE HANDLE */

    .gate-handle {

        position: absolute;

        width: 18px;
        height: 18px;

        left: 50%;
        bottom: 47%;

        transform: translateX(-50%);

        border-radius: 50%;

        background: #b08a65;

        box-shadow:
            0 0 10px rgba(180,140,100,.3);

        z-index: 5;
    }


    /* =========================
       KNOCK
    ========================= */

    .knocking {

        animation:
            gateShake .12s linear 6;
    }


    @keyframes gateShake {

        0% {
            transform: translateX(0);
        }

        25% {
            transform: translateX(-4px);
        }

        50% {
            transform: translateX(5px);
        }

        75% {
            transform: translateX(-4px);
        }

        100% {
            transform: translateX(0);
        }
    }


    .knock-text {

        position: absolute;

        top: -42px;

        width: 100%;

        text-align: center;

        color: #e9dcd5;

        font-family:
            Georgia,
            "Times New Roman",
            serif;

        font-size: 17px;

        letter-spacing: 2px;

        opacity: 0;

        transition:
            opacity .7s ease;
    }


    .knock-text.show {
        opacity: .9;
    }


    /* =========================
       CENTER WELCOME MESSAGE
    ========================= */

    .welcome-message {

        position: absolute;

        z-index: 30;

        left: 50%;
        top: 50%;

        transform:
            translate(-50%, -50%)
            translateY(20px);

        width: 90%;

        text-align: center;

        color: #fff5f8;

        font-family:
            "Brush Script MT",
            "Segoe Script",
            cursive;

        font-size: clamp(28px, 5vw, 55px);

        line-height: 1.2;

        letter-spacing: 1px;

        text-shadow:
            0 0 8px rgba(255,220,235,.35),
            0 0 25px rgba(255,180,210,.15);

        opacity: 0;

        transition:
            opacity 1.2s ease,
            transform 1.2s ease;
    }


    .welcome-message.show {

        opacity: 1;

        transform:
            translate(-50%, -50%)
            translateY(0);
    }


    /* =========================
       GATE OPENING
    ========================= */

    .gate.opening .gate-left {

        transform:
            perspective(900px)
            rotateY(-82deg);
    }


    .gate.opening .gate-right {

        transform:
            perspective(900px)
            rotateY(82deg);
    }


    /* =========================
       MOBILE
    ========================= */

    @media (max-width: 600px) {

        .moon {

            width: 70px;
            height: 70px;

            right: 10%;
            top: 9%;
        }


        .character {

            width: 125px;
            bottom: 10%;
        }


        .character.walking {

            left: calc(50% - 205px);
        }


        .gate {

            width: 310px;
            height: 390px;
        }


        .gate-roof {

            width: 310px;
            height: 85px;
        }


        .gate-left,
        .gate-right {

            width: 150px;
            height: 315px;
        }


        .wood-panel {

            height: 60px;
            margin: 20px auto;
        }


        .metal-decoration {

            width: 55px;
            height: 55px;
        }


        .welcome-message {

            font-size: 31px;
        }
    }

    `;

    document.head.appendChild(style);
}


/*
==================================================
PART 2 — LANTERN NIGHT PARTY
==================================================
*/
function startPartyScene() {

    birthdayAnimation.innerHTML = `

        <div class="party-scene">

            <div class="party-night"></div>

            <div class="party-moon"></div>

            <!-- STARS -->
            <div class="party-stars">
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span>
            </div>

            <div class="birthday-title">
    Happy Birthday Aryan 🌷
</div>


            <!-- FLOATING LANTERNS -->
            <div class="sky-lanterns">

                <div class="lantern lantern1">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern2">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern3">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern4">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>


                <div class="lantern lantern5">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern6">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern7">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern8">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern9">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern10">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern11">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern12">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern13">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern14">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

                <div class="lantern lantern15">
                    <div class="lantern-top"></div>
                    <div class="lantern-body"></div>
                    <div class="lantern-glow"></div>
                </div>

            </div>


            <!-- SOFT GROUND LIGHT -->
            <div class="party-ground"></div>


            <!-- BOTH OF YOU -->
            <div class="party-characters">

                <img
                    class="girl-party"
                    src="IMG_20260908_213133.png"
                    alt=""
                >

                <img
                    class="boy-party"
                    src="IMG_20260908_212512.png"
                    alt=""
                >

            </div>


            <!-- TABLE + CAKE -->
            <div class="party-table">

                <div class="table-top"></div>

                <div class="table-cloth"></div>

                <div class="party-cake">

                    <div class="cake-layer cake-layer-top"></div>

                    <div class="cake-layer cake-layer-middle"></div>

                    <div class="cake-layer cake-layer-bottom"></div>

                    <div class="cake-candle">
                        <div class="cake-flame"></div>
                    </div>

                </div>

            </div>


            <!-- SOFT LIGHT -->
            <div class="party-glow"></div>


            <!-- CONFETTI -->
            <div class="confetti-container">

                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>
                <span></span><span></span><span></span><span></span>

            </div>


            <!-- FADE -->
            <div class="party-fade"></div>

        </div>
    `;


    addPartyStyles();

    let poppedLanterns = 0;
const totalLanterns = 15;

document.querySelectorAll(".lantern").forEach(lantern => {

    lantern.addEventListener("click", () => {

        if (lantern.classList.contains("popped")) return;

        lantern.classList.add("popped");

        poppedLanterns++;
        if (poppedLanterns === totalLanterns) {
    setTimeout(() => {
        startScorecardScene(poppedLanterns, totalLanterns);
    }, 700);
}

        const glow = document.createElement("div");
        glow.className = "lantern-pop";
        lantern.appendChild(glow);

        setTimeout(() => {
            lantern.remove();
        }, 450);

    });

});

    setTimeout(() => {
    if (document.querySelector(".party-scene")) {
        startScorecardScene(poppedLanterns, totalLanterns);
    }
}, 17000);

    /* GIRL APPEARS */
    setTimeout(() => {

        const girl = document.querySelector(".girl-party");

        if (girl) {
            girl.classList.add("girl-show");
        }

    }, 500);


    /* BOY APPEARS */
    setTimeout(() => {

        const boy = document.querySelector(".boy-party");

        if (boy) {
            boy.classList.add("boy-show");
        }

    }, 1300);


    /*
     * CONFETTI BURST
     * 12 SECONDS AFTER PARTY STARTS
     */
    setTimeout(() => {

        const confetti =
            document.querySelector(".confetti-container");

        if (confetti) {
            confetti.classList.add("confetti-blast");
        }

    }, 27000);


    /*
     * FADE AFTER CONFETTI
     */
    setTimeout(() => {

        const fade =
            document.querySelector(".party-fade");

        if (fade) {
            fade.classList.add("fade-in");
        }

    }, 20000);


    

}


/*
==================================================
PART 2 STYLES
==================================================
*/

function addPartyStyles() {

    const style = document.createElement("style");

    style.innerHTML = `

    .party-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background: #09050e;
        font-family: Georgia, "Times New Roman", serif;
    }


    /* =========================
       SMOOTH BACKGROUND
    ========================= */

    .party-night {
        position: absolute;
        inset: 0;

        background:
            radial-gradient(
                circle at 50% 38%,
                rgba(112,78,135,.30),
                transparent 45%
            ),

            radial-gradient(
                circle at 20% 25%,
                rgba(126,88,145,.16),
                transparent 35%
            ),

            radial-gradient(
                circle at 80% 65%,
                rgba(84,52,110,.15),
                transparent 40%
            ),

            linear-gradient(
                to bottom,
                #030209 0%,
                #080411 45%,
                #12081a 75%,
                #1b0b21 100%
            );

        z-index: 1;
    }


    /* =========================
       MOON
    ========================= */

    .party-moon {
    position: absolute;
    top: 8%;
    right: 10%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fff8df;
    box-shadow: 0 0 35px rgba(255, 245, 200, 0.55);
    z-index: 3;
    overflow: hidden;
}

.party-moon::after {
    content: "";
    position: absolute;
    top: -5px;
    left: 25px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #07101f;
}

    @keyframes partyMoonGlow {

        from {
            box-shadow:
                0 0 18px rgba(255,255,255,.20),
                0 0 40px rgba(255,225,245,.10);
        }

        to {
            box-shadow:
                0 0 30px rgba(255,255,255,.34),
                0 0 75px rgba(255,225,245,.18);
        }
    }


    /* =========================
       STARS
    ========================= */

    .party-stars {
        position: absolute;
        inset: 0;
        z-index: 4;
    }


    .party-stars span {
        position: absolute;

        width: 3px;
        height: 3px;

        border-radius: 50%;

        background: white;

        box-shadow:
            0 0 8px white;

        animation:
            partyTwinkle 2.5s ease-in-out infinite alternate;
    }


    .party-stars span:nth-child(1)  { top:12%; left:8%; }
    .party-stars span:nth-child(2)  { top:23%; left:17%; animation-delay:.5s; }
    .party-stars span:nth-child(3)  { top:9%; left:30%; animation-delay:1s; }
    .party-stars span:nth-child(4)  { top:28%; left:41%; animation-delay:.2s; }
    .party-stars span:nth-child(5)  { top:16%; left:53%; animation-delay:1.3s; }
    .party-stars span:nth-child(6)  { top:32%; left:64%; animation-delay:.7s; }
    .party-stars span:nth-child(7)  { top:18%; left:77%; animation-delay:1.5s; }
    .party-stars span:nth-child(8)  { top:38%; left:88%; animation-delay:.3s; }
    .party-stars span:nth-child(9)  { top:43%; left:12%; animation-delay:1.1s; }
    .party-stars span:nth-child(10) { top:35%; left:27%; animation-delay:.8s; }
    .party-stars span:nth-child(11) { top:44%; left:49%; animation-delay:1.7s; }
    .party-stars span:nth-child(12) { top:49%; left:71%; animation-delay:.4s; }
    .party-stars span:nth-child(13) { top:26%; left:94%; animation-delay:1.2s; }
    .party-stars span:nth-child(14) { top:11%; left:68%; animation-delay:.6s; }
    .party-stars span:nth-child(15) { top:53%; left:37%; animation-delay:1.4s; }


    @keyframes partyTwinkle {

        from {
            opacity: .2;
            transform: scale(.7);
        }

        to {
            opacity: 1;
            transform: scale(1.5);
        }
    }


    /* =========================
       15 FLOATING LANTERNS
    ========================= */

    .sky-lanterns {
        position: absolute;
        inset: 0;
        z-index: 5;
        pointer-events: auto;
    }


    .lantern {
        position: absolute;

        bottom: -90px;

        width: 30px;
        height: 42px;

        opacity: .9;

        animation:
            lanternRise linear infinite;

            cursor: pointer;
touch-action: manipulation;

    }


    .lantern-body {
        position: absolute;

        left: 3px;
        top: 5px;

        width: 24px;
        height: 32px;

        border-radius:
            7px 7px 5px 5px;

        background:
            linear-gradient(
                to bottom,
                #fff0bb,
                #ffc96d,
                #e78d4e
            );

        box-shadow:
            0 0 12px rgba(255,194,105,.65),
            0 0 30px rgba(255,177,87,.35);
    }


    .lantern-top {
        position: absolute;

        left: 7px;
        top: 1px;

        width: 16px;
        height: 6px;

        border-radius: 50%;

        background: #d99a58;
    }


    .lantern-glow {
        position: absolute;

        left: 9px;
        top: 12px;

        width: 12px;
        height: 18px;

        border-radius: 50%;

        background: rgba(255,245,190,.8);

        filter: blur(5px);
    }


    .lantern1  { left:4%;  animation-duration:18s; animation-delay:1s; }
    .lantern2  { left:10%; animation-duration:13s; animation-delay:6s; }
    .lantern3  { left:17%; animation-duration:16s; animation-delay:3s; }
    .lantern4  { left:24%; animation-duration:12s; animation-delay:8s; }
    .lantern5  { left:31%; animation-duration:17s; animation-delay:2s; }
    .lantern6  { left:38%; animation-duration:14s; animation-delay:7s; }
    .lantern7  { left:45%; animation-duration:19s; animation-delay:4s; }
    .lantern8  { left:52%; animation-duration:15s; animation-delay:9s; }
    .lantern9  { left:59%; animation-duration:13s; animation-delay:5s; }
    .lantern10 { left:66%; animation-duration:18s; animation-delay:2s; }
    .lantern11 { left:73%; animation-duration:14s; animation-delay:10s; }
    .lantern12 { left:80%; animation-duration:17s; animation-delay:6s; }
    .lantern13 { left:86%; animation-duration:12s; animation-delay:3s; }
    .lantern14 { left:91%; animation-duration:16s; animation-delay:8s; }
    .lantern15 { left:96%; animation-duration:19s; animation-delay:5s; }
    
.lantern.popped {
    animation: lanternPop 0.45s ease-out forwards !important;
    pointer-events: none;
}

.lantern-pop {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #fff7cf;
    box-shadow:
        0 0 10px #fff7cf,
        0 0 25px #ffd98a,
        0 0 40px #ffc96d;
    transform: translate(-50%, -50%);
    animation: lanternGlow 0.45s ease-out forwards;
    pointer-events: none;
}

@keyframes lanternPop {
    0% {
        transform: scale(1);
        opacity: .9;
    }

    45% {
        transform: scale(1.35);
        opacity: 1;
    }

    100% {
        transform: scale(0);
        opacity: 0;
    }
}

@keyframes lanternGlow {
    0% {
        transform: translate(-50%, -50%) scale(.3);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -50%) scale(3);
        opacity: 0;
    }
}
.birthday-title {
    position: absolute;
    top: 38%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 90%;
    text-align: center;

    font-family: "Brush Script MT", "Segoe Script", cursive;
    font-size: 52px;
    font-weight: 500;
    letter-spacing: 2px;

    color: #fff4f8;

    text-shadow:
        0 0 6px rgba(255, 235, 245, .8),
        0 0 18px rgba(255, 190, 220, .65),
        0 0 35px rgba(255, 160, 210, .35);

    z-index: 7;

    animation: birthdayGlow 3s ease-in-out infinite;
    pointer-events: none;
}

@keyframes birthdayGlow {
    0%, 100% {
        opacity: .85;
        text-shadow:
            0 0 6px rgba(255, 235, 245, .7),
            0 0 18px rgba(255, 190, 220, .5);
    }

    50% {
        opacity: 1;
        text-shadow:
            0 0 8px rgba(255, 245, 250, 1),
            0 0 22px rgba(255, 190, 220, .8),
            0 0 40px rgba(255, 160, 210, .5);
    }
}

@media (max-width: 600px) {
    .birthday-title {
        font-size: 36px;
        letter-spacing: 1px;
    }
}


/* DON'T MOVE THIS */
    @keyframes lanternRise {

        0% {
            transform:
                translateY(0)
                translateX(0)
                rotate(-2deg);

            opacity: 0;
        }

        10% {
            opacity: .85;
        }

        50% {
            transform:
                translateY(-55vh)
                translateX(18px)
                rotate(3deg);

            opacity: .9;
        }

        100% {
            transform:
                translateY(-125vh)
                translateX(-15px)
                rotate(-3deg);

            opacity: .9;
        }
    }


    /* =========================
       SMOOTH GROUND LIGHT
       NO HARD HORIZONTAL LINE
    ========================= */

    .party-ground {
        position: absolute;

        left: 0;
        bottom: 0;

        width: 100%;
        height: 45%;

        z-index: 6;

        background:
            radial-gradient(
                ellipse at center bottom,
                rgba(112,70,128,.28),
                transparent 72%
            );

        pointer-events: none;
    }


    /* =========================
       CHARACTERS
    ========================= */

    .party-characters {
        position: absolute;

        left: 50%;
        bottom: 8%;

        width: 430px;
        height: 300px;

        transform:
            translateX(-50%);

        z-index: 10;
    }


    .girl-party,
    .boy-party {

        position: absolute;

        width: 150px;

        bottom: 0;

        opacity: 0;

        display: block;

        transition:
            opacity 1.2s ease,
            transform 1.2s ease;
    }


    .girl-party {
        left: 15px;
        transform: translateY(35px);
    }


    .boy-party {
        right: 15px;
        transform: translateY(35px);
    }


    .girl-party.girl-show {
        opacity: 1;
        transform: translateY(0);
    }


    .boy-party.boy-show {
        opacity: 1;
        transform: translateY(0);
    }


    /* =========================
       TABLE
    ========================= */

    .party-table {

        position: absolute;

        left: 50%;
        bottom: 8%;

        width: 210px;
        height: 145px;

        transform:
            translateX(-50%);

        z-index: 12;
    }


    .table-top {

        position: absolute;

        top: 20px;
        left: 0;

        width: 210px;
        height: 30px;

        border-radius: 50%;

        background:
            linear-gradient(
                to bottom,
                #ead3dc,
                #b9879d
            );

        border:
            3px solid #70485e;

        box-shadow:
            0 5px 15px rgba(0,0,0,.35);
    }


    .table-cloth {

        position: absolute;

        top: 34px;
        left: 20px;

        width: 170px;
        height: 90px;

        background:
            linear-gradient(
                to right,
                #a66f88,
                #d7a5b9,
                #a66f88
            );

        clip-path:
            polygon(
                5% 0,
                95% 0,
                88% 100%,
                12% 100%
            );

        opacity: .95;
    }


    /* =========================
       CAKE
    ========================= */

    .party-cake {

        position: absolute;

        left: 50%;
        top: -42px;

        width: 90px;
        height: 85px;

        transform:
            translateX(-50%);

        z-index: 20;
    }


    .cake-layer {

        position: absolute;

        left: 50%;

        transform:
            translateX(-50%);

        border-radius:
            8px 8px 12px 12px;

        box-shadow:
            inset 0 -5px 8px rgba(0,0,0,.12);
    }


    .cake-layer-top {

        top: 0;

        width: 60px;
        height: 24px;

        background:
            linear-gradient(
                to bottom,
                #f6dce6,
                #dca6bc
            );

        border:
            2px solid #805269;
    }


    .cake-layer-middle {

        top: 20px;

        width: 70px;
        height: 27px;

        background:
            linear-gradient(
                to bottom,
                #e5b6c8,
                #bd7d9b
            );

        border:
            2px solid #70475c;
    }


    .cake-layer-bottom {

        top: 44px;

        width: 82px;
        height: 27px;

        background:
            linear-gradient(
                to bottom,
                #dba1b8,
                #a96485
            );

        border:
            2px solid #694054;
    }


    /* =========================
       CANDLE
    ========================= */

    .cake-candle {

        position: absolute;

        left: 50%;
        top: -24px;

        width: 8px;
        height: 25px;

        transform:
            translateX(-50%);

        border-radius: 3px;

        background:
            repeating-linear-gradient(
                135deg,
                #f8e1eb 0px,
                #f8e1eb 4px,
                #b97d9c 4px,
                #b97d9c 7px
            );
    }


    .cake-flame {

        position: absolute;

        left: 50%;
        top: -15px;

        width: 12px;
        height: 17px;

        transform:
            translateX(-50%);

        border-radius: 50%;

        background:
            radial-gradient(
                circle at 50% 70%,
                #fff9cf 0%,
                #ffd26e 45%,
                #ef8c4e 80%
            );

        box-shadow:
            0 0 10px rgba(255,200,100,.8),
            0 0 22px rgba(255,180,80,.45);

        animation:
            flameFlicker .5s ease-in-out infinite alternate;
    }


    @keyframes flameFlicker {

        from {
            transform:
                translateX(-50%)
                scale(.9)
                rotate(-3deg);
        }

        to {
            transform:
                translateX(-50%)
                scale(1.1)
                rotate(3deg);
        }
    }


    /* =========================
       PARTY GLOW
    ========================= */

    .party-glow {

        position: absolute;

        left: 50%;
        bottom: 5%;

        width: 500px;
        height: 250px;

        transform:
            translateX(-50%);

        border-radius: 50%;

        background:
            radial-gradient(
                ellipse,
                rgba(205,140,190,.20),
                transparent 70%
            );

        filter: blur(20px);

        z-index: 7;
        .party-glow {
    position: absolute;
    width: 100%;
    height: 100%;
    background:
        radial-gradient(circle at 50% 45%, rgba(255, 220, 240, 0.16), transparent 45%),
        radial-gradient(circle at 20% 30%, rgba(180, 150, 255, 0.12), transparent 40%);
    z-index: 7;
    pointer-events: none;
}

.party-moon {
    position: absolute;
    top: 8%;
    right: 10%;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #fff8df;
    box-shadow: 0 0 35px rgba(255, 245, 200, 0.55);
    z-index: 3;
}

.party-star {
    position: absolute;
    width: 3px;
    height: 3px;
    background: white;
    border-radius: 50%;
    box-shadow: 0 0 7px white;
    animation: starTwinkle 2.5s ease-in-out infinite alternate;
    z-index: 2;
}

.lantern {
    position: absolute;
    bottom: -100px;
    width: 30px;
    height: 42px;
    border-radius: 45% 45% 40% 40%;
    background: linear-gradient(to bottom, #ffd98a, #ff9d58);
    box-shadow: 0 0 22px rgba(255, 180, 100, 0.8);
    animation: lanternFloat linear infinite;
    z-index: 4;
}

.lantern::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 8px;
    width: 14px;
    height: 7px;
    border-radius: 50%;
    background: #ffd58a;
}

.lantern::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10px;
    width: 10px;
    height: 6px;
    border-radius: 50%;
    background: #ffb45c;
}

.lantern1  { left:4%;  animation-duration:18s; animation-delay:1s; }
.lantern2  { left:10%; animation-duration:13s; animation-delay:6s; }
.lantern3  { left:17%; animation-duration:16s; animation-delay:3s; }
.lantern4  { left:24%; animation-duration:12s; animation-delay:8s; }
.lantern5  { left:31%; animation-duration:17s; animation-delay:2s; }
.lantern6  { left:38%; animation-duration:14s; animation-delay:7s; }
.lantern7  { left:45%; animation-duration:19s; animation-delay:4s; }
.lantern8  { left:52%; animation-duration:15s; animation-delay:9s; }
.lantern9  { left:59%; animation-duration:13s; animation-delay:5s; }
.lantern10 { left:66%; animation-duration:18s; animation-delay:2s; }
.lantern11 { left:73%; animation-duration:14s; animation-delay:10s; }
.lantern12 { left:80%; animation-duration:17s; animation-delay:6s; }
.lantern13 { left:86%; animation-duration:12s; animation-delay:3s; }
.lantern14 { left:91%; animation-duration:16s; animation-delay:8s; }
.lantern15 { left:96%; animation-duration:19s; animation-delay:5s; }

.party-character {
    position: absolute;
    bottom: 7%;
    width: 170px;
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 1.2s ease, transform 1.2s ease;
    z-index: 10;
}

.party-character.show {
    opacity: 1;
    transform: translateY(0);
}

.party-girl {
    left: 12%;
}

.party-boy {
    right: 12%;
}

.party-character img {
    width: 100%;
    height: auto;
    display: block;
}

.party-table {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 115px;
    background: linear-gradient(to bottom, #b97862, #7c493e);
    border-radius: 18px 18px 10px 10px;
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.3);
    z-index: 8;
}

.party-table::before,
.party-table::after {
    content: "";
    position: absolute;
    bottom: -80px;
    width: 18px;
    height: 85px;
    background: #633b35;
    border-radius: 8px;
}

.party-table::before {
    left: 35px;
}

.party-table::after {
    right: 35px;
}

.cake {
    position: absolute;
    bottom: 112px;
    left: 50%;
    transform: translateX(-50%);
    width: 125px;
    height: 70px;
    z-index: 12;
}

.cake-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 125px;
    height: 42px;
    background: #f4a6bd;
    border-radius: 10px;
    box-shadow: inset 0 -8px rgba(190, 90, 125, 0.2);
}

.cake-top {
    position: absolute;
    bottom: 30px;
    left: 10px;
    width: 105px;
    height: 28px;
    background: #fff0f5;
    border-radius: 50%;
}

.cake-cream {
    position: absolute;
    bottom: 22px;
    left: 8px;
    width: 109px;
    height: 15px;
    background: #fff8fb;
    border-radius: 50%;
    z-index: 2;
}

.candle {
    position: absolute;
    bottom: 53px;
    left: 50%;
    transform: translateX(-50%);
    width: 8px;
    height: 28px;
    background: #fff;
    border-radius: 4px;
    z-index: 5;
}

.flame {
    position: absolute;
    bottom: 79px;
    left: 50%;
    transform: translateX(-50%);
    width: 13px;
    height: 20px;
    background: #ffd45c;
    border-radius: 50% 50% 50% 50%;
    box-shadow: 0 0 15px rgba(255, 190, 70, 0.9);
    animation: flameFlicker 0.7s ease-in-out infinite alternate;
    z-index: 6;
}

.confetti {
    position: absolute;
    top: -20px;
    width: 8px;
    height: 15px;
    animation: confettiFall 3s linear forwards;
    z-index: 20;
}

.party-fade {
    animation: partyFade 2.5s ease forwards;
}

@keyframes starTwinkle {
    from { opacity: 0.25; transform: scale(0.7); }
    to { opacity: 1; transform: scale(1.3); }
}

@keyframes lanternFloat {
    0% {
        transform: translateY(0) translateX(0) rotate(-3deg);
        opacity: 0;
    }
    10% {
        opacity: 1;
    }
    50% {
        transform: translateY(-55vh) translateX(20px) rotate(3deg);
    }
    100% {
        transform: translateY(-120vh) translateX(-25px) rotate(-3deg);
        opacity: 0;
    }
}

@keyframes flameFlicker {
    from {
        transform: translateX(-50%) scale(0.9);
    }
    to {
        transform: translateX(-50%) scale(1.15);
    }
}

@keyframes confettiFall {
    from {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
    }
    to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
    }
}

@keyframes partyFade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
}

@media (max-width: 600px) {
    .party-character {
        width: 125px;
        bottom: 9%;
    }

    .party-girl {
        left: 2%;
    }

    .party-boy {
        right: 2%;
    }

    .party-table {
        width: 210px;
        height: 90px;
    }

    .cake {
        transform: translateX(-50%) scale(0.8);
        transform-origin: bottom center;
    }

    .party-moon {
        width: 65px;
        height: 65px;
        right: 7%;
    }

    .lantern {
        width: 23px;
        height: 34px;
    }
}
`;

    document.head.appendChild(style);
}


                            
        function startScorecardScene(score, total) {

    let message;
    let image;

    if (score <= 6) {
        message = "Buddhu 😠🔪";
        image = "d3d6fa10820fb004a022245ed8a93705~3.jpg";
    } else if (score <= 10) {
        message = "Good, good… not bad! You can come 😌";
        image = "f52eadd484299a0ad4ec6d0c9183ca44~2.jpg";
    } else {
        message = "Hehee cutieee 💐🤭";
        image = "52aff701a1029da44ddfaaa70b55472a~2.jpg";
    }

    birthdayAnimation.innerHTML = `
        <div class="scorecard-scene">

            <div class="scorecard">

                <div class="score-title">
                    ✨ LANTERN GAME ✨
                </div>

                <div class="typing-line">
                    You made it through the night...
                </div>

                <div class="score-info">

                    <div class="score-row">
                        <span>🏮 LANTERNS IN THE SKY</span>
                        <strong>${total}</strong>
                    </div>

                    <div class="score-row">
                        <span>💥 LANTERNS YOU POPPED</span>
                        <strong>${score}</strong>
                    </div>

                    <div class="final-score">
                        <small>✨ YOUR SCORE ✨</small>
                        <div>${score} / ${total}</div>
                    </div>

                </div>

                <div class="reaction">

                    <div class="reaction-message">
                        ${message}
                    </div>

                    <img src="${image}" alt="">

                </div>

            </div>

        </div>
    `;

    addScorecardStyles();
            setTimeout(() => {
    startMemoryMenu();
}, 8000);
}


function addScorecardStyles() {

    const style = document.createElement("style");

    style.textContent = `

    .scorecard-scene {
        position: fixed;
        inset: 0;
        overflow: hidden;
        background:
            radial-gradient(circle at 50% 30%, #18294d 0%, #07101f 45%, #02050d 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        padding: 20px;
        box-sizing: border-box;
    }

    .scorecard {
        width: min(88%, 430px);
        padding: 30px 24px;
        border-radius: 28px;

        background: rgba(255,255,255,.08);
        border: 1px solid rgba(255,255,255,.18);

        box-shadow:
            0 0 35px rgba(170,190,255,.12),
            inset 0 0 25px rgba(255,255,255,.03);

        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);

        text-align: center;
        color: white;
        box-sizing: border-box;
    }

    .score-title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 16px;
        text-shadow:
            0 0 10px rgba(255,255,255,.6),
            0 0 25px rgba(190,210,255,.4);
    }

    .typing-line {
        font-size: 15px;
        color: rgba(255,255,255,.78);
        margin-bottom: 26px;
    }

    .score-info {
        opacity: 1;
        transform: translateY(0);
    }

    .score-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 4px;
        border-bottom: 1px solid rgba(255,255,255,.1);
        font-size: 14px;
    }

    .score-row strong {
        font-size: 22px;
        text-shadow: 0 0 12px rgba(255,255,255,.7);
    }

    .final-score {
        margin-top: 22px;
        padding: 18px;
        border-radius: 20px;
        background: rgba(255,255,255,.06);
    }

    .final-score small {
        display: block;
        font-size: 12px;
        letter-spacing: 2px;
        margin-bottom: 5px;
        opacity: .8;
    }

    .final-score div {
        font-size: 42px;
        font-weight: 700;
        text-shadow:
            0 0 10px rgba(255,255,255,.8),
            0 0 30px rgba(190,210,255,.55);
    }

    .reaction {
        margin-top: 24px;
        opacity: 1;
        transform: translateY(0) scale(1);
    }

    .reaction-message {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .reaction img {
        display: block;
        width: 145px;
        max-width: 65%;
        height: auto;
        margin: 0 auto;
        border-radius: 18px;
        box-shadow: 0 0 25px rgba(255,255,255,.18);
    }

    .scorecard-scene::before {
        content: "✦  ·  ✧  ·  ⋆  ·  ✦  ·  ⋆  ·  ✧  ·  ✦";
        position: absolute;
        top: 12%;
        left: 0;
        width: 100%;
        text-align: center;
        color: rgba(255,255,255,.65);
        font-size: 18px;
        letter-spacing: 18px;
        animation: scoreStars 3s ease-in-out infinite alternate;
        pointer-events: none;
    }

    @keyframes scoreStars {
        from {
            opacity: .35;
            transform: translateY(0);
        }

        to {
            opacity: .9;
            transform: translateY(-8px);
        }
    }

    @media (max-width: 600px) {

        .scorecard {
            width: 92%;
            padding: 26px 19px;
        }

        .score-title {
            font-size: 21px;
        }

        .score-row {
            font-size: 12px;
        }

        .final-score div {
            font-size: 36px;
        }

        .reaction-message {
            font-size: 18px;
        }
    }

    `;

    document.head.appendChild(style);
}    
        
/* =========================================================
   BACKGROUND MUSIC — SHINUNOGA E-WA
   ========================================================= */

let backgroundMusicPlayer = null;
let youtubeAPIReady = false;
let musicStarted = false;

function onYouTubeIframeAPIReady() {
    youtubeAPIReady = true;

    backgroundMusicPlayer = new YT.Player("youtubeMusicPlayer", {
        videoId: "sABVNz31WA0",

        playerVars: {
            autoplay: 0,
            controls: 0,
            playsinline: 1,
            rel: 0,
            loop: 1,
    playlist: "sABVNz31WA0"
        },

        events: {
            onReady: function(event) {
                event.target.setVolume(45);
            }
        }
    });
}

function startBackgroundMusic() {

    if (!backgroundMusicPlayer || !youtubeAPIReady) {
        return;
    }

    if (!musicStarted) {
        musicStarted = true;
        backgroundMusicPlayer.playVideo();
    }
}

function pauseBackgroundMusic() {

    if (backgroundMusicPlayer) {
        backgroundMusicPlayer.pauseVideo();
    }
}

function resumeBackgroundMusic() {

    if (backgroundMusicPlayer) {
        backgroundMusicPlayer.playVideo();
    }
}
