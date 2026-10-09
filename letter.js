
/* =========================================
   MEET MY PITASHREE — PAPA'S PROFILE
   File: letter.js
   ========================================= */

function startPapaProfileScene() {
    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    if (!birthdayAnimation) {
        console.error("Birthday animation container not found.");
        return;
    }

    birthdayAnimation.innerHTML = `
        <section class="papa-profile-scene">

            <div class="papa-profile-stars"></div>
            <div class="papa-profile-glow papa-glow-one"></div>
            <div class="papa-profile-glow papa-glow-two"></div>

            <main class="papa-profile-content">

                <header class="papa-profile-heading">
                    <div class="papa-heading-sparkles">
                        ✦ &nbsp; ✧ &nbsp; ✦
                    </div>

                    <h1>MEET MY PITASHREE 😎</h1>

                    <div class="papa-heading-underline"></div>
                </header>

                <div class="papa-profile-layout">

                    <!-- PAPA'S PHOTO -->
                    <div class="papa-photo-column">

                        <div class="papa-photo-aura"></div>

                        <img
                            class="papa-profile-photo"
                            src="BackgroundEraser_20261007_103851196.png"
                            alt="Mr. Manoj Kumar Mishra"
                        >

                        <div class="papa-photo-sparkle sparkle-one">✦</div>
                        <div class="papa-photo-sparkle sparkle-two">✧</div>
                        <div class="papa-photo-sparkle sparkle-three">✦</div>

                    </div>

                    <!-- PAPA'S DETAILS -->
                    <div class="papa-details-column">

                        <div class="papa-name-block">
                            <div class="papa-name-label">
                                THE MAN. THE LEGEND.
                            </div>

                            <h2>MR. MANOJ KUMAR MISHRA</h2>

                            <p class="papa-subtitle">
                                The man of the day. 👑
                            </p>
                        </div>

                        <div class="papa-detail-item">
                            <div class="papa-detail-label">
                                <span>🎂</span> BIRTHDAY
                            </div>

                            <p class="papa-birthday-date">
                                09 OCTOBER
                            </p>
                        </div>

                        <div class="papa-detail-item">
                            <div class="papa-detail-label">
                                <span>🏠</span> ROLE IN THE FAMILY
                            </div>

                            <p>
                                The problem solver and the person
                                everyone calls when something goes wrong.
                            </p>
                        </div>

                        <div class="papa-detail-item">
                            <div class="papa-detail-label">
                                <span>🕵️</span> SPECIAL ABILITY
                            </div>

                            <p>
                                Detecting suspicious activities from
                                <span class="papa-emphasis">
                                    three rooms away
                                </span>. 😂
                            </p>
                        </div>

                        <div class="papa-detail-item papa-chai-item">
                            <div class="papa-detail-label">
                                <span>☕</span> FAVOURITE THING
                            </div>

                            <div class="papa-chai-row">
                                <div class="papa-steaming-cup">
                                    <span class="papa-steam steam-one">〰</span>
                                    <span class="papa-steam steam-two">〰</span>
                                    <span class="papa-cup">☕</span>
                                </div>

                                <div class="papa-chai-text">
                                    <h3>CHAI.</h3>
                                    <p>Anytime. Anywhere.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <footer class="papa-profile-footer">
                    <span>✧</span>
                    OUR VERY OWN SUPERHERO
                    <span>✧</span>
                </footer>
                <button class="papa-back-button" type="button">
    ← Back to Menu
</button>

            </main>
        </section>
    `;

    addPapaProfileStyles();

document
    .querySelector(".papa-back-button")
    .addEventListener("click", () => {
        startMemoryMenu();
    });

/* =========================================
   PAPA PROFILE STYLES
   ========================================= */

function addPapaProfileStyles() {

    if (document.getElementById("papaProfileStyles")) {
        return;
    }

    const style = document.createElement("style");
    style.id = "papaProfileStyles";

    style.textContent = `

        .papa-profile-scene {
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow-y: auto;
            overflow-x: hidden;
            box-sizing: border-box;

            background:
                radial-gradient(
                    circle at 50% 5%,
                    #283b70 0%,
                    #111b39 43%,
                    #050914 100%
                );

            color: #fff;
            font-family: inherit;
            isolation: isolate;
        }

        .papa-profile-scene *,
        .papa-profile-scene *::before,
        .papa-profile-scene *::after {
            box-sizing: border-box;
        }

        .papa-profile-stars {
            position: absolute;
            inset: 0;
            z-index: -1;
            pointer-events: none;
            opacity: .6;

            background-image:
                radial-gradient(
                    circle,
                    #fff 1px,
                    transparent 1.7px
                ),
                radial-gradient(
                    circle,
                    #f9a8d4 1px,
                    transparent 1.8px
                );

            background-size: 83px 83px, 127px 127px;
            background-position: 10px 15px, 45px 55px;

            animation: papaStarsDrift 10s ease-in-out infinite alternate;
        }

        .papa-profile-glow {
            position: absolute;
            width: 220px;
            height: 220px;
            border-radius: 50%;
            filter: blur(65px);
            opacity: .17;
            pointer-events: none;
            z-index: -1;
        }

        .papa-glow-one {
            top: 18%;
            left: -100px;
            background: #f472b6;
            animation: papaGlowFloat 8s ease-in-out infinite alternate;
        }

        .papa-glow-two {
            top: 48%;
            right: -100px;
            background: #818cf8;
            animation: papaGlowFloat 9s ease-in-out infinite alternate-reverse;
        }

        .papa-profile-content {
            position: relative;
            width: min(92%, 850px);
            margin: 0 auto;
            padding: 38px 0 32px;
        }

        .papa-profile-heading {
            text-align: center;
            margin-bottom: 30px;
            animation: papaHeadingEnter .9s ease both;
        }

        .papa-heading-sparkles {
            color: #fde68a;
            font-size: 15px;
            letter-spacing: 4px;
            margin-bottom: 10px;
            animation: papaSparklePulse 2.5s ease-in-out infinite;
        }

        .papa-profile-heading h1 {
            margin: 0;
            font-size: clamp(25px, 5vw, 39px);
            line-height: 1.25;
            font-weight: 800;
            letter-spacing: 1px;

            background: linear-gradient(
                100deg,
                #f9a8d4,
                #fde68a,
                #c4b5fd,
                #93c5fd,
                #f9a8d4
            );

            background-size: 250% auto;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;

            animation: papaTitleShimmer 6s linear infinite;
        }

        .papa-heading-underline {
            width: 90px;
            height: 2px;
            margin: 14px auto 0;
            border-radius: 10px;

            background: linear-gradient(
                90deg,
                transparent,
                #f9a8d4,
                #fde68a,
                #c4b5fd,
                transparent
            );

            animation: papaUnderlineGlow 3s ease-in-out infinite alternate;
        }

        .papa-profile-layout {
            display: grid;
            grid-template-columns:
                minmax(0, .82fr)
                minmax(0, 1.18fr);
            align-items: center;
            gap: 30px;
        }

        /* BORDER-FREE PHOTO */

        .papa-photo-column {
            position: relative;
            min-width: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px 0;
            animation: papaPhotoEnter 1s .15s ease both;
        }

        .papa-photo-aura {
            position: absolute;
            width: 85%;
            aspect-ratio: 1;
            border-radius: 50%;

            background: radial-gradient(
                circle,
                rgba(196,181,253,.27),
                rgba(249,168,212,.12) 42%,
                transparent 72%
            );

            filter: blur(20px);
            animation: papaAuraPulse 4s ease-in-out infinite alternate;
        }

        .papa-profile-photo {
            position: relative;
            display: block;
            width: 100%;
            max-width: 310px;
            max-height: 440px;
            object-fit: contain;

            /* No decorative border or mirror effect. */
            border: none;
            outline: none;
            box-shadow: none;
            border-radius: 0;

            filter: drop-shadow(0 8px 24px rgba(0,0,0,.2));

            animation: papaPhotoFloat 5s ease-in-out infinite;
        }

        .papa-photo-sparkle {
            position: absolute;
            color: #fde68a;
            pointer-events: none;
            animation: papaSparklePulse 2.3s ease-in-out infinite;
        }

        .sparkle-one {
            top: 8%;
            left: 8%;
            font-size: 22px;
        }

        .sparkle-two {
            top: 22%;
            right: 5%;
            color: #f9a8d4;
            font-size: 27px;
            animation-delay: .7s;
        }

        .sparkle-three {
            bottom: 12%;
            left: 12%;
            color: #c4b5fd;
            font-size: 18px;
            animation-delay: 1.2s;
        }

        /* DETAILS */

        .papa-details-column {
            min-width: 0;
            animation: papaDetailsEnter .9s .25s ease both;
        }

        .papa-name-block {
            margin-bottom: 23px;
        }

        .papa-name-label {
            margin-bottom: 8px;
            font-size: 10px;
            letter-spacing: 3px;
            color: #c4b5fd;
        }

        .papa-name-block h2 {
            margin: 0;
            font-size: clamp(20px, 3.4vw, 29px);
            line-height: 1.22;
            font-weight: 800;
            overflow-wrap: anywhere;

            background: linear-gradient(
                100deg,
                #fff,
                #f9a8d4,
                #fde68a
            );

            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }

        .papa-subtitle {
            margin: 8px 0 0;
            color: #fde68a;
            font-size: 14px;
            font-style: italic;
        }

        .papa-detail-item {
            margin-top: 19px;
            padding-left: 13px;
            border-left: 2px solid rgba(196,181,253,.5);
        }

        .papa-detail-label {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #f9a8d4;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 1.3px;
            line-height: 1.5;
        }

        .papa-detail-label span {
            font-size: 17px;
            letter-spacing: 0;
        }

        .papa-detail-item > p {
            margin: 7px 0 0;
            font-size: 14px;
            line-height: 1.6;
            color: rgba(255,255,255,.88);
        }

        .papa-detail-item .papa-birthday-date {
            font-size: 19px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #fde68a;
        }

        .papa-emphasis {
            display: inline-block;
            color: #fde68a;
            font-weight: 800;
            text-shadow: 0 0 12px rgba(253,230,138,.25);
            animation: papaEmphasisPulse 2.4s ease-in-out infinite;
        }

        /* STEAMING CHAI */

        .papa-chai-row {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 7px;
        }

        .papa-steaming-cup {
            position: relative;
            flex-shrink: 0;
            width: 52px;
            height: 55px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
        }

        .papa-cup {
            display: block;
            font-size: 35px;
            line-height: 1;
            transform-origin: center bottom;
            animation: papaCupWiggle 3s ease-in-out infinite;
        }

        .papa-steam {
            position: absolute;
            top: -1px;
            color: #e9d5ff;
            font-size: 20px;
            line-height: 1;
            opacity: 0;
            transform: translateY(8px) scale(.7);
            animation: papaSteamRise 2s ease-out infinite;
        }

        .steam-one {
            left: 12px;
        }

        .steam-two {
            left: 27px;
            animation-delay: 1s;
        }

        .papa-chai-text h3 {
            margin: 0;
            font-size: 25px;
            font-weight: 900;
            letter-spacing: 3px;
            color: #fde68a;
        }

        .papa-chai-text p {
            margin: 3px 0 0;
            color: rgba(255,255,255,.8);
            font-size: 13px;
        }

        .papa-profile-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            margin-top: 34px;
            text-align: center;
            font-size: 10px;
            letter-spacing: 2.5px;
            color: rgba(255,255,255,.58);
            animation: papaHeadingEnter 1.2s ease both;
        }

        
.papa-profile-footer span {
    color: #fde68a;
    animation: papaSparklePulse 2s ease-in-out infinite;
}

/* BACK TO MENU BUTTON */

.papa-back-button {
    display: block;
    margin: 26px auto 8px;
    padding: 12px 24px;
    border: 1px solid rgba(249, 168, 212, .45);
    border-radius: 30px;
    background: linear-gradient(
        135deg,
        rgba(249, 168, 212, .15),
        rgba(196, 181, 253, .12)
    );
    color: #f9d7eb;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition:
        transform .25s ease,
        background .25s ease,
        box-shadow .25s ease;
}

.papa-back-button:hover {
    transform: translateY(-2px);
    background: linear-gradient(
        135deg,
        rgba(249, 168, 212, .28),
        rgba(196, 181, 253, .25)
    );
    box-shadow: 0 0 18px rgba(249, 168, 212, .15);
}

.papa-back-button:active {
    transform: scale(.97);
}

/* ANIMATIONS */


        @keyframes papaStarsDrift {
            from {
                transform: translateY(0);
                opacity: .45;
            }
            to {
                transform: translateY(-10px);
                opacity: .8;
            }
        }

        @keyframes papaGlowFloat {
            from {
                transform: translate(0, 0);
            }
            to {
                transform: translate(30px, -20px);
            }
        }

        @keyframes papaTitleShimmer {
            from {
                background-position: 0% center;
            }
            to {
                background-position: 250% center;
            }
        }

        @keyframes papaUnderlineGlow {
            from {
                opacity: .55;
                transform: scaleX(.8);
            }
            to {
                opacity: 1;
                transform: scaleX(1.1);
            }
        }

        @keyframes papaHeadingEnter {
            from {
                opacity: 0;
                transform: translateY(-12px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes papaPhotoEnter {
            from {
                opacity: 0;
                transform: translateX(-18px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes papaDetailsEnter {
            from {
                opacity: 0;
                transform: translateX(18px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes papaPhotoFloat {
            0%, 100% {
                transform: translateY(0);
            }
            50% {
                transform: translateY(-7px);
            }
        }

        @keyframes papaAuraPulse {
            from {
                opacity: .55;
                transform: scale(.94);
            }
            to {
                opacity: 1;
                transform: scale(1.07);
            }
        }

        @keyframes papaSparklePulse {
            0%, 100% {
                opacity: .55;
                transform: scale(.92);
            }
            50% {
                opacity: 1;
                transform: scale(1.1);
            }
        }

        @keyframes papaEmphasisPulse {
            0%, 100% {
                text-shadow: 0 0 5px rgba(253,230,138,.12);
            }
            50% {
                text-shadow: 0 0 13px rgba(253,230,138,.5);
            }
        }

        @keyframes papaSteamRise {
            0% {
                opacity: 0;
                transform: translateY(8px) scale(.7);
            }
            30% {
                opacity: .8;
            }
            100% {
                opacity: 0;
                transform: translateY(-12px) scale(1.1);
            }
        }

        @keyframes papaCupWiggle {
            0%, 90%, 100% {
                transform: rotate(0);
            }
            93% {
                transform: rotate(-5deg);
            }
            96% {
                transform: rotate(5deg);
            }
        }

        /* MOBILE LAYOUT */

        @media (max-width: 600px) {

            .papa-profile-content {
                width: 90%;
                padding: 32px 0 28px;
            }

            .papa-profile-heading {
                margin-bottom: 18px;
            }

            .papa-profile-heading h1 {
                font-size: clamp(23px, 6vw, 31px);
            }

            .papa-profile-layout {
                grid-template-columns: minmax(0, 1fr);
                gap: 20px;
            }

            .papa-photo-column {
                padding: 0;
            }

            .papa-profile-photo {
                width: auto;
                max-width: min(72%, 260px);
                max-height: 310px;
            }

            .papa-details-column {
                width: 100%;
            }

            .papa-name-block {
                text-align: center;
                margin-bottom: 20px;
            }

            .papa-name-block h2 {
                font-size: clamp(22px, 6vw, 28px);
            }

            .papa-detail-item {
                margin-top: 17px;
            }

            .papa-profile-footer {
                margin-top: 28px;
                font-size: 9px;
                letter-spacing: 1.8px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .papa-profile-scene *,
            .papa-profile-scene *::before,
            .papa-profile-scene *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
            }
        }

    `;

    document.head.appendChild(style);
}
