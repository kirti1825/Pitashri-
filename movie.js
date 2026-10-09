
/* =========================================
   THE PAPA FILES
   THINGS ONLY PAPA CAN DO
   Vintage birthday experience
   File: movie.js
   ========================================= */

function startPapaMovieScene() {
    const birthdayAnimation =
        document.getElementById("birthdayAnimation");

    if (!birthdayAnimation) {
        console.error("Birthday animation container not found.");
        return;
    }

    birthdayAnimation.innerHTML = `
        <section class="papa-movie-scene">

            <div class="movie-grain"></div>
            <div class="movie-vignette"></div>
            <div class="movie-leaves" aria-hidden="true"></div>

            <main class="movie-page">

                <header class="movie-cover">
                    <div class="movie-top-ornament">✦ ❧ ✦</div>

                    <p class="movie-kicker">
                        A LITTLE COLLECTION OF LEGENDARY MOMENTS
                    </p>

                    <h1>THINGS ONLY<br>PAPA CAN DO</h1>

                    <div class="movie-divider">
                        <span>❧</span>
                        <i></i>
                        <span>❧</span>
                    </div>

                    <p class="movie-cover-subtitle">
                        Some superpowers cannot be explained.
                        They can only be inherited by being Papa.
                    </p>

                    <div class="movie-cover-stamp">
                        <span>THE</span>
                        <strong>PAPA</strong>
                        <span>FILES · EST. FOREVER</span>
                    </div>

                    <p class="movie-scroll-note">
                        A few legendary abilities, preserved with love ↓
                    </p>
                </header>

                <section class="movie-intro">
                    <p class="movie-eyebrow">A VERY IMPORTANT RECORD</p>
                    <h2>One Papa. Five superpowers.</h2>
                    <p>
                        After years of observation, countless chai breaks
                        and several suspicious investigations, we present
                        the extraordinary case of our very own Papa.
                    </p>
                </section>

                <section class="movie-cards">

                    <article class="movie-card movie-card-one">
                        <div class="movie-card-top">
                            <span class="movie-number">01</span>
                            <span class="movie-icon">📹</span>
                        </div>
                        <p class="movie-card-label">THE DETECTIVE</p>
                        <h2>THE HUMAN CCTV</h2>
                        <div class="movie-card-rule"></div>
                        <p class="movie-card-copy">
                            Suspicious activity detected…
                            <strong>from three rooms away.</strong>
                        </p>
                        <p class="movie-card-fine">
                            SUPERPOWER LEVEL: LEGENDARY
                        </p>
                    </article>

                    <article class="movie-card movie-card-two">
                        <div class="movie-card-top">
                            <span class="movie-number">02</span>
                            <span class="movie-icon">☕</span>
                        </div>
                        <p class="movie-card-label">THE DAILY RITUAL</p>
                        <h2>CHAI IS ALWAYS THE ANSWER</h2>
                        <div class="movie-card-rule"></div>
                        <p class="movie-card-copy">
                            Turn any break into chai time.
                            Somehow, chai is an appropriate solution
                            to almost everything.
                        </p>
                        <p class="movie-card-fine">
                            ANYTIME. ANYWHERE. NO QUESTIONS.
                        </p>
                    </article>

                    <article class="movie-card movie-card-three">
                        <div class="movie-card-top">
                            <span class="movie-number">03</span>
                            <span class="movie-icon">🦸</span>
                        </div>
                        <p class="movie-card-label">THE FAMILY HERO</p>
                        <h2>THE EMERGENCY DEPARTMENT</h2>
                        <div class="movie-card-rule"></div>
                        <p class="movie-card-copy">
                            Fix problems everyone else has given up on.
                            When something goes wrong, everyone knows
                            exactly whom to call.
                        </p>
                        <p class="movie-card-fine">
                            PROBLEM? CALL PAPA.
                        </p>
                    </article>

                    <article class="movie-card movie-card-four">
                        <div class="movie-card-top">
                            <span class="movie-number">04</span>
                            <span class="movie-icon">📡</span>
                        </div>
                        <p class="movie-card-label">THE SIXTH SENSE</p>
                        <h2>THE PAPA RADAR</h2>
                        <div class="movie-card-rule"></div>
                        <p class="movie-card-copy">
                            Ask where everyone is going.
                            Notice when a routine changes.
                            And always have one more question. 😂
                        </p>
                        <p class="movie-card-fine">
                            NO DETAIL GOES UNNOTICED
                        </p>
                    </article>

                    <article class="movie-card movie-card-five">
                        <div class="movie-card-top">
                            <span class="movie-number">05</span>
                            <span class="movie-icon">❤️</span>
                        </div>
                        <p class="movie-card-label">THE MOST IMPORTANT ONE</p>
                        <h2>MAKING THINGS FEEL MANAGEABLE</h2>
                        <div class="movie-card-rule"></div>
                        <p class="movie-card-copy">
                            Help when a problem feels too big.
                            Show up when the family needs you.
                            Make difficult days feel a little less difficult.
                        </p>
                        <p class="movie-card-fine">
                            A SUPERPOWER MADE OF LOVE
                        </p>
                    </article>

                </section>

                <section class="movie-ending">
                    <div class="movie-ending-ornament">✧ ❧ ✧</div>
                    <p class="movie-eyebrow">AND THE FINAL VERDICT IS…</p>
                    <h2>ONE OF A KIND.<br>FOREVER OUR HERO.</h2>

                    <p class="movie-ending-message">
                        Lots of people have superpowers, but nobody does
                        things quite like you, Papa. Thank you for being
                        our problem solver, our protector and our very
                        own superhero.
                    </p>

                    <p class="movie-birthday-wish">
                        Happy Birthday, Papa. ❤️
                    </p>

                    <div class="movie-ending-ornament">✦ ❧ ✦</div>
                </section>

                <footer class="movie-footer">
                    <span>✧</span>
                    A FAMILY ORIGINAL · MADE WITH LOVE
                    <span>✧</span>
                </footer>

                <button class="movie-back-button" type="button">
                    ← Back to Menu
                </button>

            </main>
        </section>
    `;

    addPapaMovieStyles();
    startPapaMovieLeaves();

    birthdayAnimation
        .querySelector(".movie-back-button")
        .addEventListener("click", () => {
            if (typeof startMemoryMenu === "function") {
                startMemoryMenu();
            } else {
                console.error("startMemoryMenu() was not found.");
            }
        });
}


/* =========================================
   FALLING AUTUMN LEAVES
   ========================================= */

function startPapaMovieLeaves() {
    const container =
        document.querySelector(".movie-leaves");

    if (!container) return;

    container.innerHTML = "";

    const leaves = ["🍂", "🍁", "🍂", "🍃"];
    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    const count = reducedMotion ? 7 : 20;

    for (let i = 0; i < count; i++) {
        const leaf = document.createElement("span");

        leaf.className = "movie-leaf";
        leaf.textContent = leaves[i % leaves.length];

        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 12}s`;
        leaf.style.animationDuration =
            `${9 + Math.random() * 10}s`;
        leaf.style.setProperty(
            "--leaf-drift",
            `${Math.random() * 140 - 70}px`
        );
        leaf.style.fontSize = `${13 + Math.random() * 13}px`;

        container.appendChild(leaf);
    }
}


/* =========================================
   VINTAGE STYLES
   ========================================= */

function addPapaMovieStyles() {
    if (document.getElementById("papaMovieStyles")) return;

    const style = document.createElement("style");
    style.id = "papaMovieStyles";

    style.textContent = `

        .papa-movie-scene {
            position: fixed;
            inset: 0;
            z-index: 9999;
            overflow-y: auto;
            overflow-x: hidden;
            color: #3f2b1d;
            background:
                radial-gradient(
                    ellipse at top,
                    #f7e6bd 0%,
                    #dfc18b 52%,
                    #a47b4c 100%
                );
            font-family: Georgia, "Times New Roman", serif;
            isolation: isolate;
            animation: movieSceneEnter 1s ease both;
        }

        .papa-movie-scene *,
        .papa-movie-scene *::before,
        .papa-movie-scene *::after {
            box-sizing: border-box;
        }

        .movie-grain {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 10;
            opacity: .13;
            background-image:
                radial-gradient(#50351d .7px, transparent .7px);
            background-size: 5px 5px;
        }

        .movie-vignette {
            position: fixed;
            inset: 0;
            z-index: 9;
            pointer-events: none;
            box-shadow: inset 0 0 100px rgba(64, 37, 15, .35);
        }

        .movie-leaves {
            position: fixed;
            inset: 0;
            overflow: hidden;
            pointer-events: none;
            z-index: 2;
        }

        .movie-leaf {
            position: absolute;
            top: -35px;
            opacity: 0;
            animation: movieLeafFall linear infinite;
        }

        .movie-page {
            position: relative;
            width: min(92%, 800px);
            margin: 0 auto;
            padding: 34px 0 30px;
        }

        .movie-cover {
            position: relative;
            text-align: center;
            padding: 36px 20px 30px;
            border-top: 1px solid rgba(91, 58, 30, .45);
            border-bottom: 1px solid rgba(91, 58, 30, .45);
            animation: movieCoverReveal 1.2s ease both;
        }

        .movie-top-ornament,
        .movie-ending-ornament {
            color: #8b5e32;
            font-size: 23px;
            letter-spacing: 8px;
        }

        .movie-kicker,
        .movie-eyebrow {
            font-size: 10px;
            font-weight: bold;
            letter-spacing: 3px;
            line-height: 1.8;
        }

        .movie-kicker {
            margin: 20px 0 15px;
        }

        .movie-cover h1 {
            margin: 0;
            font-size: clamp(34px, 8vw, 66px);
            line-height: 1.05;
            letter-spacing: 2px;
            color: #6e3f23;
            text-shadow: 1px 1px 0 #f8e8c7, 2px 3px 0 rgba(96, 58, 29, .16);
            animation: movieTitleReveal 1.4s ease both;
        }

        .movie-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            margin: 24px auto;
            color: #8b5e32;
        }

        .movie-divider i {
            display: block;
            width: 95px;
            height: 1px;
            background: #8b5e32;
        }

        .movie-cover-subtitle {
            max-width: 420px;
            margin: 0 auto;
            font-size: 15px;
            line-height: 1.8;
            font-style: italic;
        }

        .movie-cover-stamp {
            width: 112px;
            height: 112px;
            margin: 27px auto 0;
            border: 1px solid rgba(110, 63, 35, .7);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: rotate(-9deg);
            color: #7b4929;
            animation: movieStampAppear 1.5s .5s ease both;
        }

        .movie-cover-stamp span {
            font-size: 8px;
            letter-spacing: 2px;
        }

        .movie-cover-stamp strong {
            margin: 2px 0;
            font-size: 25px;
            letter-spacing: 2px;
        }

        .movie-scroll-note {
            margin: 29px 0 0;
            font-size: 11px;
            letter-spacing: 1px;
            animation: movieNotePulse 2.5s ease-in-out infinite;
        }

        .movie-intro {
            max-width: 560px;
            margin: 50px auto 30px;
            text-align: center;
            animation: movieRiseIn .9s .2s ease both;
        }

        .movie-intro .movie-eyebrow,
        .movie-ending .movie-eyebrow {
            color: #80502e;
        }

        .movie-intro h2 {
            margin: 9px 0 12px;
            font-size: clamp(24px, 5vw, 34px);
            color: #643b23;
        }

        .movie-intro > p:last-child {
            font-size: 14px;
            line-height: 1.9;
        }

        .movie-cards {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 19px;
        }

        .movie-card {
            position: relative;
            min-width: 0;
            padding: 22px 20px;
            overflow: hidden;
            background:
                linear-gradient(
                    145deg,
                    rgba(255, 248, 225, .94),
                    rgba(237, 214, 169, .94)
                );
            border: 1px solid rgba(111, 74, 42, .4);
            box-shadow:
                0 5px 13px rgba(70, 42, 20, .12),
                inset 0 0 0 4px rgba(255, 250, 230, .28);
            animation: movieCardEnter .8s ease both;
            transition: transform .3s ease, box-shadow .3s ease;
        }

        .movie-card::before {
            content: "❧";
            position: absolute;
            top: 3px;
            right: 10px;
            color: rgba(132, 86, 49, .2);
            font-size: 36px;
        }

        .movie-card:nth-child(2) { animation-delay: .12s; }
        .movie-card:nth-child(3) { animation-delay: .22s; }
        .movie-card:nth-child(4) { animation-delay: .32s; }
        .movie-card:nth-child(5) {
            animation-delay: .42s;
            grid-column: 1 / -1;
        }

        .movie-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
        }

        .movie-number {
            font-size: 12px;
            letter-spacing: 2px;
            color: #8b5e32;
        }

        .movie-icon {
            font-size: 27px;
            filter: sepia(.2);
            animation: movieIconFloat 4s ease-in-out infinite;
        }

        .movie-card-label {
            margin: 17px 0 7px;
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 2px;
            color: #91643c;
        }

        .movie-card h2 {
            margin: 0;
            font-size: clamp(18px, 3vw, 24px);
            line-height: 1.25;
            color: #603b25;
            overflow-wrap: anywhere;
        }

        .movie-card-rule {
            width: 45px;
            height: 2px;
            margin: 15px 0;
            background: #a87949;
        }

        .movie-card-copy {
            margin: 0;
            font-size: 14px;
            line-height: 1.8;
        }

        .movie-card-copy strong {
            color: #7c4527;
        }

        .movie-card-fine {
            margin: 18px 0 0;
            padding-top: 11px;
            border-top: 1px dashed rgba(111, 74, 42, .4);
            font-size: 9px;
            font-weight: bold;
            letter-spacing: 1px;
            line-height: 1.8;
            color: #855631;
        }

        .movie-ending {
            position: relative;
            margin: 56px auto 0;
            padding: 34px 22px;
            text-align: center;
            border-top: 1px solid rgba(91, 58, 30, .45);
            border-bottom: 1px solid rgba(91, 58, 30, .45);
            animation: movieRiseIn 1s ease both;
        }

        .movie-ending h2 {
            margin: 16px 0;
            font-size: clamp(28px, 6vw, 43px);
            line-height: 1.2;
            color: #6e3f23;
        }

        .movie-ending-message {
            max-width: 530px;
            margin: 0 auto;
            font-size: 15px;
            line-height: 2;
        }

        .movie-birthday-wish {
            margin: 22px 0;
            color: #7b4929;
            font-size: 23px;
            font-style: italic;
            font-weight: bold;
            animation: movieWishGlow 3s ease-in-out infinite;
        }

        .movie-footer {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            text-align: center;
            font-size: 9px;
            letter-spacing: 2px;
            line-height: 1.8;
            color: #704c31;
        }

        .movie-footer span {
            color: #98673c;
        }

        .movie-back-button {
            display: block;
            margin: 25px auto 5px;
            padding: 12px 24px;
            border: 1px solid #80502e;
            border-radius: 2px;
            background: rgba(255, 245, 218, .45);
            color: #603b25;
            font-family: inherit;
            font-size: 13px;
            cursor: pointer;
            transition: background .25s ease, transform .25s ease;
        }

        .movie-back-button:hover {
            background: rgba(255, 250, 231, .85);
            transform: translateY(-2px);
        }

        .movie-back-button:active {
            transform: scale(.97);
        }

        @keyframes movieSceneEnter {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes movieCoverReveal {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes movieTitleReveal {
            from { opacity: 0; letter-spacing: 8px; }
            to { opacity: 1; letter-spacing: 2px; }
        }

        @keyframes movieStampAppear {
            from { opacity: 0; transform: rotate(-20deg) scale(.7); }
            to { opacity: 1; transform: rotate(-9deg) scale(1); }
        }

        @keyframes movieRiseIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes movieCardEnter {
            from { opacity: 0; transform: translateY(20px) rotate(-1deg); }
            to { opacity: 1; transform: translateY(0) rotate(0); }
        }

        @keyframes movieLeafFall {
            0% {
                opacity: 0;
                transform: translate3d(0, -20px, 0) rotate(0deg);
            }
            10% { opacity: .8; }
            90% { opacity: .65; }
            100% {
                opacity: 0;
                transform: translate3d(var(--leaf-drift), 110vh, 0)
                    rotate(300deg);
            }
        }

        @keyframes movieNotePulse {
            0%, 100% { opacity: .65; }
            50% { opacity: 1; }
        }

        @keyframes movieIconFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
        }

        @keyframes movieWishGlow {
            0%, 100% { text-shadow: 0 0 0 rgba(123, 73, 41, 0); }
            50% { text-shadow: 0 0 13px rgba(123, 73, 41, .2); }
        }

        @media (hover: hover) and (pointer: fine) {
            .movie-card:hover {
                transform: translateY(-5px) rotate(-.3deg);
                box-shadow: 0 12px 24px rgba(70, 42, 20, .2);
            }
        }

        @media (max-width: 600px) {
            .movie-page {
                width: 90%;
                padding-top: 20px;
            }

            .movie-cover {
                padding: 25px 8px;
            }

            .movie-kicker {
                font-size: 8px;
                letter-spacing: 2px;
            }

            .movie-cover-subtitle {
                font-size: 14px;
            }

            .movie-intro {
                margin-top: 35px;
            }

            .movie-cards {
                grid-template-columns: minmax(0, 1fr);
                gap: 15px;
            }

            .movie-card:nth-child(5) {
                grid-column: auto;
            }

            .movie-card {
                padding: 21px;
            }

            .movie-ending {
                margin-top: 40px;
                padding: 28px 10px;
            }

            .movie-ending-message {
                font-size: 14px;
            }

            .movie-footer {
                font-size: 8px;
                letter-spacing: 1.3px;
            }
        }

        @media (prefers-reduced-motion: reduce) {
            .papa-movie-scene *,
            .papa-movie-scene *::before,
            .papa-movie-scene *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
                transition-duration: .01ms !important;
            }
        }
    `;

    document.head.appendChild(style);
}
