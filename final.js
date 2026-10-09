
function startPapaFamilyQuizScene() {
  const root = document.getElementById("birthdayAnimation");
  if (!root) return;

  addScratchStyles();

  const prizes = [
    {
      emoji: "🍦",
      title: "Sweet Prize",
      message: "PAPA, BUY US ICE CREAM! 🍦",
      note: "Papa's family has a sweet tooth! 😂"
    },
    {
      emoji: "🎂",
      title: "Cake Time",
      message: "PAPA, BUY US A CAKE! 🎂",
      note: "Family happiness tax. No arguments! 😌"
    },
    {
      emoji: "🍫",
      title: "Chocolate Deal",
      message: "PAPA, BUY US CHOCOLATES! 🍫",
      note: "Payment accepted in chocolates only!"
    },
    {
      emoji: "☕",
      title: "The Chai Pass",
      message: "ONE MONTH OF CHAI! ☕",
      note: "Whenever you ask, we'll make your chai. Valid for one month!"
    }
  ];

  root.innerHTML = `
    <section class="scratch-world">
      <div class="bubble b1">♡</div>
      <div class="bubble b2">○</div>
      <div class="bubble b3">✦</div>
      <div class="bubble b4">♡</div>
      <div class="bubble b5">○</div>

      <main class="scratch-content">
        <div class="scratch-kicker">✿ A LITTLE SURPRISE FOR PAPA ✿</div>
        <h1>Scratch to Win! 🎁</h1>
        <p class="scratch-intro">
          Scratch all four cards and discover your prizes, Papa! 🫧
        </p>

        <div class="scratch-grid" id="scratchGrid"></div>

        <p class="scratch-status" id="scratchStatus" aria-live="polite">
          0 of 4 prizes revealed. Let's scratch! 💗
        </p>

        <button id="scratchContinue" class="scratch-continue" hidden>
          Continue, Papa! 🐾 →
        </button>
        
      </main>
    </section>
  `;

  const grid = document.getElementById("scratchGrid");
  const status = document.getElementById("scratchStatus");
  const continueButton = document.getElementById("scratchContinue");

  let completed = 0;

  prizes.forEach((prize, index) => {
    const card = document.createElement("article");
    card.className = "scratch-card";

    card.innerHTML = `
      <div class="prize-under">
        <div class="prize-emoji">${prize.emoji}</div>
        <h2>${prize.title}</h2>
        <p class="prize-message">${prize.message}</p>
        <p class="prize-note">${prize.note}</p>
      </div>

      <canvas class="scratch-coating"
        aria-label="Scratch card ${index + 1} to reveal its prize"></canvas>

      <div class="scratch-hint">✧ SCRATCH ME ✧</div>
    `;

    grid.appendChild(card);

    const canvas = card.querySelector("canvas");
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true
    });

    let drawing = false;
    let revealed = false;
    let lastCheck = 0;

    function paintCoating() {
      const rect = card.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      canvas.width = Math.round(rect.width);
      canvas.height = Math.round(rect.height);

      const gradient = ctx.createLinearGradient(
        0, 0, canvas.width, canvas.height
      );

      gradient.addColorStop(0, "#ffc7e3");
      gradient.addColorStop(0.5, "#dfd1ff");
      gradient.addColorStop(1, "#ffe0ef");

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255,255,255,.8)";
      ctx.font = "22px sans-serif";
      ctx.fillText("✦ ♡ ✦", 14, 30);

      ctx.font = "17px sans-serif";
      ctx.fillText("♡ ✧ ♡", 14, canvas.height - 16);
    }

    function revealCard() {
      if (revealed) return;

      revealed = true;
      drawing = false;
      canvas._lastPoint = null;
      canvas.classList.add("coating-gone");
      card.classList.add("prize-revealed");
      canvas.style.pointerEvents = "none";

      completed++;

      status.textContent = completed === 4
        ? "ALL FOUR PRIZES UNLOCKED! Papa, you're not ready! 😂💗"
        : `${completed} of 4 prizes revealed. Keep scratching, Papa! 🫧`;

      if (completed === 4) {
        continueButton.hidden = false;
        continueButton.classList.add("button-pop");
      }
    }

    function checkProgress() {
      if (revealed) return;

      try {
        const pixels = ctx.getImageData(
          0, 0, canvas.width, canvas.height
        ).data;

        let transparent = 0;
        let total = 0;

        for (let i = 3; i < pixels.length; i += 4 * 10) {
          total++;
          if (pixels[i] < 80) transparent++;
        }

        if (total > 0 && transparent / total >= 0.40) {
          revealCard();
        }
      } catch (error) {
        console.warn("Could not check scratch progress.", error);
      }
    }

    function scratch(event) {
      if (!drawing || revealed) return;

      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      ctx.globalCompositeOperation = "destination-out";
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 35;

      if (canvas._lastPoint) {
        ctx.beginPath();
        ctx.moveTo(canvas._lastPoint.x, canvas._lastPoint.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.arc(x, y, 17.5, 0, Math.PI * 2);
        ctx.fill();
      }

      canvas._lastPoint = { x, y };

      const now = Date.now();
      if (now - lastCheck > 300) {
        lastCheck = now;
        checkProgress();
      }
    }

    canvas.addEventListener("pointerdown", event => {
      if (revealed) return;

      drawing = true;
      canvas._lastPoint = null;

      if (canvas.setPointerCapture) {
        canvas.setPointerCapture(event.pointerId);
      }

      scratch(event);
      event.preventDefault();
    });

    canvas.addEventListener("pointermove", event => {
      if (!drawing || revealed) return;
      scratch(event);
      event.preventDefault();
    });

    function stopScratch() {
      drawing = false;
      canvas._lastPoint = null;
      checkProgress();
    }

    canvas.addEventListener("pointerup", stopScratch);
    canvas.addEventListener("pointercancel", stopScratch);

    requestAnimationFrame(paintCoating);
  });

  continueButton.addEventListener("click", showPapaCatFinale);
}

function showPapaCatFinale() {
  const root = document.getElementById("birthdayAnimation");
  if (!root) return;

  root.innerHTML = `
    <section class="scratch-world cat-finale">
      <div class="bubble b1">♡</div>
      <div class="bubble b2">○</div>
      <div class="bubble b3">✦</div>
      <div class="bubble b4">♡</div>
      <div class="bubble b5">○</div>

      <main class="cat-final-content">
        <div class="scratch-kicker">✿ PRIZE DISTRIBUTION COMPLETE ✿</div>

        <div class="cat-photo-frame">
          <img
            src="607f3e590acd7cbb41507ed8acb3b353~2.jpg"
            alt="Papa's funny cat"
          >
        </div>

        <h1>पापा, एक मिनट! 😼</h1>

        <p class="cat-final-line">
          इतनी मेहनत से बनाया है… तारीफ़ से काम नहीं चलेगा,
          पापा! ₹2,000 निकालो! 💸😂
        </p>

        <div class="cat-stamp">मेहनताना तो बनता है! ✨</div>
        <button class="back-menu-btn" onclick="startMemoryMenu()">
  🏡 Back to Menu
</button>
      </main>
    </section>
  `;

  const catImage = root.querySelector(".cat-photo-frame img");

  catImage.addEventListener("error", () => {
    catImage.alt = "Cat image could not be loaded. Check its filename.";
    catImage.style.display = "none";

    const fallback = document.createElement("div");
    fallback.className = "cat-photo-placeholder";
    fallback.textContent = "🐱💸";
    catImage.parentElement.appendChild(fallback);
  }, { once: true });
}

function addScratchStyles() {
  if (document.getElementById("scratchStyles")) return;

  const style = document.createElement("style");
  style.id = "scratchStyles";

  style.textContent = `
    .scratch-world {
      position: fixed;
      inset: 0;
      z-index: 9999;
      overflow-y: auto;
      overflow-x: hidden;
      box-sizing: border-box;
      color: #713b63;
      background: linear-gradient(145deg, #fff0f8, #f8edff 48%, #eaf8ff);
      font-family: inherit;
    }

    .scratch-content, .cat-final-content {
      position: relative;
      z-index: 2;
      width: min(92%, 620px);
      margin: 0 auto;
      padding: 34px 0 45px;
      text-align: center;
      box-sizing: border-box;
    }

    .scratch-kicker {
      color: #b65c94;
      font-size: 11px;
      letter-spacing: 2px;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .scratch-content h1, .cat-final-content h1 {
      font-size: clamp(29px, 7vw, 42px);
      line-height: 1.1;
      margin: 8px 0 12px;
      color: #a94f8b;
      text-shadow: 0 3px 0 #fff;
    }

    .scratch-intro {
      margin: 0 auto 23px;
      font-size: 14px;
    }

    .scratch-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 13px;
    }

    .scratch-card {
      position: relative;
      min-width: 0;
      min-height: 210px;
      border: 2px solid #fff;
      border-radius: 24px;
      overflow: hidden;
      background: #fff9fd;
      box-shadow: 0 9px 22px #c88ab52b;
      animation: cardFloat 3s ease-in-out infinite alternate;
    }

    .scratch-card:nth-child(even) {
      animation-delay: -1.5s;
    }

    .prize-under {
      min-height: 210px;
      padding: 17px 10px 14px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .prize-emoji {
      font-size: 35px;
    }

    .prize-under h2 {
      font-size: 16px;
      margin: 7px 0;
    }

    .prize-message {
      font-size: 14px;
      font-weight: 900;
      line-height: 1.35;
      margin: 5px 0;
    }

    .prize-note {
      font-size: 11px;
      line-height: 1.4;
      margin: 5px 0 0;
    }

    .scratch-coating {
      position: absolute;
      inset: 0;
      display: block;
      z-index: 2;
      width: 100%;
      height: 100%;
      border-radius: 21px;
      touch-action: none;
      cursor: crosshair;
    }

    .scratch-hint {
      position: absolute;
      z-index: 3;
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      color: #965c98;
      font-size: 13px;
      font-weight: 900;
      pointer-events: none;
      text-shadow: 0 1px 2px white;
    }

    .scratch-coating.coating-gone {
      opacity: 0;
      transition: opacity .45s ease;
    }

    .prize-revealed {
      animation: revealBounce .55s ease;
    }

    .prize-revealed .scratch-hint {
      display: none;
    }

    .scratch-status {
      min-height: 22px;
      font-size: 13px;
      font-weight: 700;
      margin: 20px 0 14px;
    }

    .scratch-continue {
      border: 0;
      border-radius: 999px;
      padding: 15px 27px;
      color: white;
      font-size: 15px;
      font-weight: 900;
      background: linear-gradient(100deg, #ed86bc, #a98bf4);
      box-shadow: 0 7px 18px #c58dc955;
      cursor: pointer;
    }

    .scratch-continue[hidden] {
      display: none;
    }

    .button-pop {
      animation: revealBounce .6s ease infinite alternate;
    }

    .bubble {
      position: absolute;
      z-index: 1;
      pointer-events: none;
      color: #e99dcd;
      opacity: .65;
      font-size: 30px;
      animation: bubbleUp 5s ease-in-out infinite alternate;
    }

    .b1 { left: 4%; top: 15%; }
    .b2 { right: 6%; top: 25%; animation-delay: -2s; font-size: 38px; }
    .b3 { left: 8%; bottom: 12%; animation-delay: -1s; }
    .b4 { right: 9%; bottom: 17%; animation-delay: -3s; }
    .b5 { right: 45%; top: 7%; animation-delay: -2.5s; }

    .cat-final-content {
      padding-top: 30px;
    }

    .cat-photo-frame {
      width: min(70vw, 270px);
      aspect-ratio: 1 / 1;
      margin: 22px auto;
      border: 6px solid white;
      border-radius: 32px;
      overflow: hidden;
      background: #ffe0f1;
      box-shadow: 0 12px 30px #c58dbb44;
      animation: revealBounce .7s ease both;
    }

    .cat-photo-frame img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .cat-photo-placeholder {
      padding-top: 70px;
      font-size: 55px;
    }

    .cat-final-line {
      background: white;
      border: 2px dashed #efacd2;
      border-radius: 23px;
      padding: 19px 17px;
      font-size: clamp(18px, 4.7vw, 23px);
      font-weight: 900;
      line-height: 1.65;
      box-shadow: 0 8px 20px #c58dbb26;
    }

    .cat-stamp {
      display: inline-block;
      background: #ffe1f0;
      padding: 10px 17px;
      border-radius: 999px;
      font-weight: 800;
      transform: rotate(-2deg);
    }

    @keyframes bubbleUp {
      from { transform: translateY(7px) rotate(-8deg); }
      to { transform: translateY(-18px) rotate(9deg); }
    }

    @keyframes cardFloat {
      from { transform: translateY(0); }
      to { transform: translateY(-4px); }
    }

    @keyframes revealBounce {
      0% { opacity: .4; transform: scale(.88); }
      70% { transform: scale(1.04); }
      100% { opacity: 1; transform: scale(1); }
    }

    @media (max-width: 380px) {
      .scratch-grid { gap: 9px; }
      .scratch-card, .prize-under { min-height: 200px; }
      .prize-under { padding: 12px 7px; }
    }
    @media (prefers-reduced-motion: reduce) {
      .scratch-world *, .scratch-world *::before {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
      }
    }

    .back-menu-btn {
      display: block;
      margin: 18px auto 12px;
      padding: 12px 24px;
      border: 2px solid #ffb7d5;
      border-radius: 999px;
      background: linear-gradient(135deg, #ffe0ef, #fff0f7);
      color: #a83268;
      font: inherit;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 5px 0 #f4b0ce;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .back-menu-btn:hover {
      transform: translateY(-2px);
    }

    .back-menu-btn:active {
      transform: translateY(3px);
      box-shadow: 0 2px 0 #f4b0ce;
    }
    `;
  document.head.appendChild(style);
}
