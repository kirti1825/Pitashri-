
/* ==========================================
   PART 4: PAPA'S GYAAN & DIL KI BAATEIN
   Updated portrait photo puzzle + voice notes
========================================== */

function startPapaGyaanScene() {
    const screen = document.getElementById("birthdayAnimation");

    if (!screen) {
        console.error("Could not find #birthdayAnimation");
        return;
    }

    screen.innerHTML = `
      <section id="papaGyaanScene">
        <div class="pg-glow pg-glow-one"></div>
        <div class="pg-glow pg-glow-two"></div>

        <div class="pg-content">
          <p class="pg-eyebrow">A LITTLE MEMORY, A LOT OF LOVE ♡</p>

          <h1 class="pg-title">
            Papa's Gyaan <span>&</span><br>Dil Ki Baatein ❤️
          </h1>

          <p class="pg-subtitle">
            First, put our little memory back together...
          </p>

          <div id="pgPuzzlePanel" class="pg-panel">
            <div class="pg-photo-frame">
              <div id="pgPuzzle" class="pg-puzzle"
                   role="group"
                   aria-label="Photo jigsaw puzzle"></div>
            </div>

            <p id="pgPuzzleMessage" class="pg-message">
              Tap two pieces to swap them until our picture is complete ✨
            </p>

            <div class="pg-progress-track">
              <div id="pgProgress" class="pg-progress"></div>
            </div>

            <p id="pgProgressText" class="pg-progress-text">
              0% complete
            </p>
          </div>

          <div id="pgVoicePanel"
               class="pg-panel pg-voice-panel"
               hidden>

            <div class="pg-success-heart">♡</div>

            <p class="pg-eyebrow">OUR MEMORY IS WHOLE</p>

            <h2 class="pg-reveal-title">
              Now, a little Gyaan from Papa…
            </h2>

            <p class="pg-subtitle">
              Three little recordings, three pieces of you that stay with us.
            </p>

            <div class="pg-voice-list">

              <article class="pg-voice-card">
                <span class="pg-voice-icon">💪</span>

                <div class="pg-voice-copy">
                  <h3>M Square</h3>
                  <p>Money, muscles, and Papa's life lessons.</p>

                  <audio controls preload="none"
                         aria-label="M Square voice note">
                    <source src="m-square.mp3"
                            type="audio/mpeg">
                    Your browser does not support audio.
                  </audio>
                </div>
              </article>

              <article class="pg-voice-card">
                <span class="pg-voice-icon">🌱</span>

                <div class="pg-voice-copy">
                  <h3>First Deserve, Then Desire</h3>
                  <p>A lesson worth carrying through life.</p>

                  <audio controls preload="none"
                         aria-label="First Deserve, Then Desire voice note">
                    <source
                      src="first-deserve-then-desire.mp3"
                      type="audio/mpeg">
                    Your browser does not support audio.
                  </audio>
                </div>
              </article>

              <article class="pg-voice-card">
                <span class="pg-voice-icon">🌙</span>

                <div class="pg-voice-copy">
                  <h3>Shayari</h3>
                  <p>A few poetic words, straight from the heart.</p>

                  <audio controls preload="none"
                         aria-label="Shayari voice note">
                    <source src="shayari.mp3"
                            type="audio/mpeg">
                    Your browser does not support audio.
                  </audio>
                </div>
              </article>

            </div>

            <p class="pg-footer-note">
              Some lessons become memories. Some voices become home. ❤️
            </p>

            <!-- Back button appears ONLY after the puzzle is solved -->
            <div class="pg-back-wrap">
              <button class="pg-back-button"
                      type="button"
                      onclick="startMemoryMenu()">
                ← Back to Menu
              </button>
            </div>

          </div>
        </div>
      </section>
    `;
document.body.classList.add("pg-gyaan-active");
    addPapaGyaanStyles();
    startPapaHorizontalPuzzle();
}


function startPapaHorizontalPuzzle() {
    const puzzle = document.getElementById("pgPuzzle");
    const message = document.getElementById("pgPuzzleMessage");
    const progress = document.getElementById("pgProgress");
    const progressText = document.getElementById("pgProgressText");

    if (!puzzle || !message || !progress || !progressText) {
        console.error("Papa Gyaan puzzle elements are missing.");
        return;
    }

    // NEW PHOTO: keep this file beside index.html
    const photoPath = "IMG_20261009_164236_022~2.jpg";

    // 12 pieces arranged in a portrait-friendly 3-column × 4-row grid
    const rows = 4;
    const cols = 3;
    const total = rows * cols;

    puzzle.style.setProperty("--pg-cols", cols);
    puzzle.style.setProperty("--pg-rows", rows);

    const image = new Image();
    image.onload = () => {
        // Preserve the photo's exact original aspect ratio
        puzzle.style.aspectRatio =
            `${image.naturalWidth} / ${image.naturalHeight}`;

        let order = Array.from(
            { length: total },
            (_, index) => index
        );

        // Shuffle, making sure the puzzle isn't already solved
        do {
            for (let i = order.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [order[i], order[j]] = [order[j], order[i]];
            }
        } while (order.every(
            (value, index) => value === index
        ));

        let firstSelected = null;
        let puzzleSolved = false;
        let revealTimer = null;

        function updateProgress() {
            const correct = order.filter(
                (value, index) => value === index
            ).length;

            const percent = Math.round(
                (correct / total) * 100
            );

            progress.style.width = percent + "%";
            progressText.textContent = percent + "% complete";

            if (correct === total && !puzzleSolved) {
                puzzleSolved = true;

                message.textContent =
                    "You did it, Papa! Our memory is whole. ❤️";

                puzzle.classList.add("pg-solved");

                // Reveal the voice notes after the celebration
                revealTimer = window.setTimeout(() => {
                    const puzzlePanel =
                        document.getElementById("pgPuzzlePanel");
                    const voicePanel =
                        document.getElementById("pgVoicePanel");

                    if (puzzlePanel && voicePanel) {
                        puzzlePanel.hidden = true;
                        voicePanel.hidden = false;
                        voicePanel.classList.add("pg-reveal");

                        voicePanel.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });
                    }
                }, 750);
            }
        }

        function renderPieces() {
            puzzle.innerHTML = "";

            order.forEach((imageIndex, position) => {
                const tile = document.createElement("button");

                tile.type = "button";
                tile.className = "pg-piece";
                tile.setAttribute(
                    "aria-label",
                    `Puzzle piece ${position + 1}`
                );

                tile.style.backgroundImage =
                    `url("${photoPath}")`;

                // Each tile shows its matching crop of the original photo
                tile.style.backgroundSize =
                    `${cols * 100}% ${rows * 100}%`;

                const sourceRow = Math.floor(imageIndex / cols);
                const sourceCol = imageIndex % cols;

                const x = cols === 1
                    ? 0
                    : (sourceCol / (cols - 1)) * 100;

                const y = rows === 1
                    ? 0
                    : (sourceRow / (rows - 1)) * 100;

                tile.style.backgroundPosition = `${x}% ${y}%`;

                if (imageIndex === position) {
                    tile.classList.add("pg-piece-correct");
                }

                if (firstSelected === position) {
                    tile.classList.add("pg-piece-selected");
                    tile.setAttribute("aria-pressed", "true");
                } else {
                    tile.setAttribute("aria-pressed", "false");
                }

                tile.addEventListener("click", () => {
                    if (puzzleSolved) return;

                    // First tap selects a piece
                    if (firstSelected === null) {
                        firstSelected = position;

                        message.textContent =
                            "Now choose the piece you want to swap it with 💗";

                        renderPieces();
                        return;
                    }

                    // Tapping the same piece cancels the selection
                    if (firstSelected === position) {
                        firstSelected = null;

                        message.textContent =
                            "Selection cancelled. Choose two pieces to swap ✨";

                        renderPieces();
                        return;
                    }

                    // Second tap swaps the two pieces
                    const firstPosition = firstSelected;

                    [
                        order[firstPosition],
                        order[position]
                    ] = [
                        order[position],
                        order[firstPosition]
                    ];

                    firstSelected = null;

                    renderPieces();
                    updateProgress();
                });

                puzzle.appendChild(tile);
            });
        }

        renderPieces();
        updateProgress();
    };

    image.onerror = () => {
        message.textContent =
            "The photo couldn't load. Check that IMG_20261009_164236_022~2.jpg is beside index.html.";
        progressText.textContent = "Photo not loaded";
        console.error("Could not load puzzle photo:", photoPath);
    };

    image.src = photoPath;
}


function addPapaGyaanStyles() {
    if (document.getElementById("pgGyaanStyles")) return;

    const style = document.createElement("style");
    style.id = "pgGyaanStyles";

    style.textContent = `
      #papaGyaanScene {
        --pg-ink: #704d55;
        --pg-muted: #987782;
        position: relative;
        isolation: isolate;
        overflow: hidden;
        min-height: 100vh;
        padding: 32px 16px 44px;
        color: var(--pg-ink);
        background:
          radial-gradient(ellipse at 15% 15%, #fbe3ec 0, transparent 40%),
          radial-gradient(ellipse at 90% 65%, #e8e8f8 0, transparent 38%),
          linear-gradient(145deg, #fff8f4, #f9eff5 55%, #f7f4ff);
        font-family: Georgia, "Times New Roman", serif;
        text-align: center;
      }

      #papaGyaanScene * {
        box-sizing: border-box;
      }

      #papaGyaanScene .pg-content {
        position: relative;
        z-index: 1;
        width: min(100%, 620px);
        margin: 0 auto;
      }

      #papaGyaanScene .pg-glow {
        position: absolute;
        z-index: -1;
        width: 180px;
        height: 180px;
        border-radius: 50%;
        filter: blur(35px);
        opacity: .55;
        pointer-events: none;
        animation: pgFloat 7s ease-in-out infinite alternate;
      }

      #papaGyaanScene .pg-glow-one {
        top: 10%;
        left: -65px;
        background: #f5c4d5;
      }

      #papaGyaanScene .pg-glow-two {
        right: -70px;
        bottom: 15%;
        background: #d6d5f4;
        animation-delay: -3s;
      }

      #papaGyaanScene .pg-eyebrow {
        color: #ad7b8a;
        font: 700 11px/1.5 system-ui, sans-serif;
        letter-spacing: .19em;
      }

      #papaGyaanScene .pg-title {
        margin: 12px 0;
        font-size: clamp(30px, 8vw, 48px);
        line-height: 1.13;
        font-weight: 600;
      }

      #papaGyaanScene .pg-title span {
        color: #d98da8;
        font-style: italic;
      }

      #papaGyaanScene .pg-subtitle {
        color: var(--pg-muted);
        font: 14px/1.7 system-ui, sans-serif;
      }

      #papaGyaanScene .pg-panel {
        margin: 24px auto;
        padding: clamp(14px, 4vw, 24px);
        border: 1px solid rgba(255,255,255,.9);
        border-radius: 25px;
        background: rgba(255,255,255,.69);
        box-shadow: 0 16px 45px rgba(135,91,112,.12);
        backdrop-filter: blur(8px);
      }

      #papaGyaanScene .pg-photo-frame {
        width: 100%;
        padding: 8px;
        border-radius: 17px;
        background: #fff;
        box-shadow: 0 5px 20px rgba(115,75,92,.1);
      }

      /* Portrait frame follows the image's natural ratio */
      #papaGyaanScene .pg-puzzle {
        display: grid;
        grid-template-columns:
          repeat(var(--pg-cols), minmax(0, 1fr));
        grid-template-rows:
          repeat(var(--pg-rows), minmax(0, 1fr));
        gap: 0;
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        background: #fff;
      }

      /* No gaps, borders or lines between photo pieces */
      #papaGyaanScene .pg-piece {
        display: block;
        width: 100%;
        height: 100%;
        min-width: 0;
        min-height: 0;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        outline: none;
        background-repeat: no-repeat;
        cursor: pointer;
        touch-action: manipulation;
        -webkit-tap-highlight-color: transparent;
        transition:
          filter .2s ease,
          box-shadow .2s ease;
      }

      #papaGyaanScene .pg-piece:focus-visible {
        position: relative;
        z-index: 2;
        outline: 2px solid #bf7892;
        outline-offset: -2px;
      }

      #papaGyaanScene .pg-piece-selected {
        position: relative;
        z-index: 1;
        box-shadow: inset 0 0 0 3px #df9bb3;
        filter: brightness(1.12);
      }

      #papaGyaanScene .pg-solved .pg-piece {
        animation: pgCelebrate .45s ease both;
      }

      #papaGyaanScene .pg-message {
        min-height: 42px;
        margin: 17px 0 10px;
        color: #916b7a;
        font: 13px/1.6 system-ui, sans-serif;
      }

      #papaGyaanScene .pg-progress-track {
        height: 6px;
        overflow: hidden;
        border-radius: 20px;
        background: #f0dfe7;
      }

      #papaGyaanScene .pg-progress {
        width: 0;
        height: 100%;
        border-radius: inherit;
        background: linear-gradient(90deg, #e8a8be, #b9b2e9);
        transition: width .35s ease;
      }

      #papaGyaanScene .pg-progress-text {
        margin: 8px 0 0;
        color: #aa8290;
        font: 11px system-ui, sans-serif;
      }

      #papaGyaanScene [hidden] {
        display: none !important;
      }

      #papaGyaanScene .pg-voice-panel {
        text-align: left;
      }

      #papaGyaanScene .pg-voice-panel > .pg-eyebrow,
      #papaGyaanScene .pg-voice-panel > .pg-reveal-title,
      #papaGyaanScene .pg-voice-panel > .pg-subtitle,
      #papaGyaanScene .pg-voice-panel > .pg-footer-note {
        text-align: center;
      }

      #papaGyaanScene .pg-success-heart {
        text-align: center;
        color: #d990aa;
        font-size: 38px;
        animation: pgHeartbeat 1.8s ease-in-out infinite;
      }

      #papaGyaanScene .pg-reveal-title {
        margin: 10px 0;
        font-size: clamp(23px, 6vw, 32px);
        line-height: 1.25;
      }

      #papaGyaanScene .pg-voice-list {
        display: grid;
        gap: 13px;
        margin-top: 22px;
      }

      #papaGyaanScene .pg-voice-card {
        display: flex;
        gap: 13px;
        align-items: flex-start;
        min-width: 0;
        padding: 16px;
        border: 1px solid #f3e1e8;
        border-radius: 18px;
        background: linear-gradient(135deg, #fffaf8, #fff3f7);
        animation: pgRise .7s ease both;
      }

      #papaGyaanScene .pg-voice-card:nth-child(2) {
        animation-delay: .12s;
      }

      #papaGyaanScene .pg-voice-card:nth-child(3) {
        animation-delay: .24s;
      }

      #papaGyaanScene .pg-voice-icon {
        display: grid;
        flex: 0 0 43px;
        height: 43px;
        place-items: center;
        border-radius: 14px;
        background: #f8e4ec;
        font-size: 22px;
      }

      #papaGyaanScene .pg-voice-copy {
        min-width: 0;
        flex: 1;
      }

      #papaGyaanScene .pg-voice-copy h3 {
        margin: 2px 0 6px;
        font-size: 17px;
        line-height: 1.3;
        overflow-wrap: anywhere;
      }

      #papaGyaanScene .pg-voice-copy p {
        margin: 0 0 12px;
        color: #9b7a86;
        font: 12px/1.6 system-ui, sans-serif;
      }

      #papaGyaanScene audio {
        display: block;
        width: 100%;
        max-width: 100%;
        height: 40px;
      }

      #papaGyaanScene .pg-footer-note {
        margin: 25px 0 4px;
        color: #987782;
        font: italic 14px/1.7 Georgia, serif;
      }

      #papaGyaanScene .pg-back-wrap {
        display: flex;
        justify-content: center;
        margin-top: 20px;
      }

      #papaGyaanScene .pg-back-button {
        display: inline-block;
        min-height: 44px;
        padding: 11px 20px;
        border: 1px solid #ebcad7;
        border-radius: 30px;
        color: #865b6c;
        background: rgba(255,255,255,.8);
        font: 13px system-ui, sans-serif;
        cursor: pointer;
        touch-action: manipulation;
      }

      #papaGyaanScene .pg-back-button:active {
        transform: scale(.97);
      }

      #papaGyaanScene .pg-reveal {
        animation: pgRise .8s ease both;
      }

      @keyframes pgFloat {
        from { transform: translateY(-10px); }
        to { transform: translateY(20px); }
      }

      @keyframes pgRise {
        from {
          opacity: 0;
          transform: translateY(18px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pgCelebrate {
        0% { filter: brightness(1); }
        50% { filter: brightness(1.08); }
        100% { filter: brightness(1); }
      }

      @keyframes pgHeartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.12); }
      }
      body.pg-gyaan-active #youtubePlayer,
body.pg-gyaan-active #youtube-player,
body.pg-gyaan-active .youtube-player,
body.pg-gyaan-active .youtube-container,
body.pg-gyaan-active iframe[src*="youtube.com"] {
    display: none !important;
    visibility: hidden !important;
    pointer-events: none !important;
}

      @media (prefers-reduced-motion: reduce) {
        #papaGyaanScene *,
        #papaGyaanScene *::before,
        #papaGyaanScene *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: .01ms !important;
          scroll-behavior: auto !important;
        }
      
      }
    `;

    document.head.appendChild(style);
}
