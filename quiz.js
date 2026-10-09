
function startPapaScrapbook() {
  const screen = document.getElementById("birthdayAnimation");
  if (!screen) return;

  const photos = [
    "IMG_20261009_164236_022~2.jpg",
    "IMG_20261009_170119_571~2.jpg",
    "IMG_20261009_170223_356~2.jpg",
    "IMG_20261009_170249_237~2.jpg",
    "IMG_20261009_170457_854~2.jpg",
    "IMG_20261009_170531_260~2.jpg",
    "IMG_20261009_170756_427~2.jpg",
    "IMG_20261009_172247_204~2.jpg"
  ];

  let page = 0;

  screen.innerHTML = `
    <section id="papaScrapbook">
      <div class="sb-book">
        <div class="sb-cover" id="sbCover">
          <div class="sb-cover-decoration">♡ ✿ ♡</div>
          <div class="sb-cover-title">Scrapbook</div>
          <div class="sb-cover-subtitle">little pieces of lovely memories</div>
          <button id="sbOpen" class="sb-button">Open book ✨</button>
        </div>

        <div class="sb-inside" id="sbInside" hidden>
          <div class="sb-page" id="sbPage"></div>
          <div class="sb-controls">
            <button class="sb-button" id="sbPrev">← Previous</button>
            <span id="sbCounter">1 / 8</span>
            <button class="sb-button" id="sbNext">Next →</button>
          </div>
        </div>
      </div>

      <button class="sb-menu-button" id="sbBack">← Back to Menu</button>
    </section>
  `;

  addScrapbookStyles();

  const cover = document.getElementById("sbCover");
  const inside = document.getElementById("sbInside");
  const pageBox = document.getElementById("sbPage");
  const counter = document.getElementById("sbCounter");
  const prev = document.getElementById("sbPrev");
  const next = document.getElementById("sbNext");

  function renderPage(animate = false) {
    pageBox.classList.remove("sb-turn");
    void pageBox.offsetWidth;

    const photo = photos[page];

    pageBox.innerHTML = `
      <div class="sb-paper">
        <div class="sb-tape"></div>
        <div class="sb-photo-frame">
          <img src="${photo}" alt="Scrapbook memory"
               onerror="this.alt='Photo could not load'; this.style.display='none';">
        </div>
        <div class="sb-heart-doodle">♡ ✿ ♡</div>
      </div>
    `;

    if (animate) pageBox.classList.add("sb-turn");

    counter.textContent = `${page + 1} / ${photos.length}`;
    prev.disabled = page === 0;
    next.disabled = page === photos.length - 1;
  }

  document.getElementById("sbOpen").addEventListener("click", () => {
    cover.classList.add("sb-cover-open");
    window.setTimeout(() => {
      cover.hidden = true;
      inside.hidden = false;
      renderPage();
    }, 550);
  });

  prev.addEventListener("click", () => {
    if (page > 0) {
      page--;
      renderPage(true);
    }
  });

  next.addEventListener("click", () => {
    if (page < photos.length - 1) {
      page++;
      renderPage(true);
    }
  });

  document.getElementById("sbBack").addEventListener("click", () => {
    startMemoryMenu();
  });
}

function addScrapbookStyles() {
  if (document.getElementById("sbStyles")) return;

  const style = document.createElement("style");
  style.id = "sbStyles";
  style.textContent = `
    #papaScrapbook {
      min-height: 100vh;
      padding: 28px 14px 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 25px;
      background:
        radial-gradient(ellipse at top, #fff4d9, transparent 65%),
        linear-gradient(145deg, #f8e8d5, #ead7c4);
      color: #68483d;
      font-family: Georgia, serif;
      text-align: center;
    }

    #papaScrapbook * { box-sizing: border-box; }

    #papaScrapbook .sb-book {
      width: min(100%, 390px);
      min-height: 490px;
      position: relative;
      perspective: 1400px;
      border-radius: 8px 18px 18px 8px;
      background: #6e4433;
      padding: 10px 10px 10px 17px;
      box-shadow: 0 18px 35px #67412c45;
    }

    #papaScrapbook .sb-cover {
      min-height: 470px;
      padding: 35px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 22px;
      border: 3px double #d8b47d;
      border-radius: 4px 14px 14px 4px;
      color: #f9e8c5;
      background:
        radial-gradient(circle at 20% 20%, #ffffff16 0 2px, transparent 3px),
        linear-gradient(135deg, #8c6045, #573829);
      transform-origin: left center;
      transition: transform .6s ease, opacity .4s ease;
    }

    #papaScrapbook .sb-cover-decoration {
      font-size: 35px;
      color: #e9c99a;
    }

    #papaScrapbook .sb-cover-title {
      font-size: clamp(36px, 10vw, 49px);
      line-height: 1.1;
      font-style: italic;
    }

    #papaScrapbook .sb-cover-subtitle {
      font-size: 13px;
      line-height: 1.6;
      color: #f3d9b4;
    }

    #papaScrapbook .sb-cover-open {
      transform: rotateY(-105deg);
      opacity: 0;
    }

    #papaScrapbook .sb-inside {
      min-height: 470px;
      padding: 12px;
      background: #f5e8d0;
      border-radius: 4px 12px 12px 4px;
    }

    #papaScrapbook .sb-page {
      transform-origin: left center;
    }

    #papaScrapbook .sb-turn {
      animation: sbPageTurn .45s ease both;
    }

    #papaScrapbook .sb-paper {
      min-height: 410px;
      padding: 24px 15px 18px;
      position: relative;
      background:
        repeating-linear-gradient(
          0deg, transparent 0 29px, #c6b18b18 30px
        ),
        #fffaf0;
      border: 1px solid #e1d0ad;
      box-shadow: inset 5px 0 8px #8b6b3a12;
    }

    #papaScrapbook .sb-tape {
      width: 85px;
      height: 22px;
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%) rotate(-4deg);
      background: #e8c9a5bb;
      z-index: 2;
    }

    #papaScrapbook .sb-photo-frame {
      width: 100%;
      max-width: 300px;
      margin: 10px auto 0;
      padding: 9px 9px 14px;
      background: white;
      box-shadow: 0 5px 13px #5c453024;
      transform: rotate(-1.5deg);
    }

    #papaScrapbook .sb-photo-frame img {
      display: block;
      width: 100%;
      max-height: 345px;
      object-fit: contain;
      background: #f2e8d9;
    }

    #papaScrapbook .sb-heart-doodle {
      margin-top: 12px;
      color: #bd817e;
      font-size: 23px;
      letter-spacing: 7px;
    }

    #papaScrapbook .sb-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 7px;
      margin-top: 12px;
      font: 11px system-ui, sans-serif;
    }

    #papaScrapbook .sb-button,
    #papaScrapbook .sb-menu-button {
      min-height: 42px;
      padding: 10px 13px;
      border: 1px solid #d8b996;
      border-radius: 24px;
      background: #fff8eb;
      color: #76503e;
      font: 12px system-ui, sans-serif;
      cursor: pointer;
      touch-action: manipulation;
    }

    #papaScrapbook .sb-button:disabled {
      opacity: .35;
      cursor: default;
    }

    #papaScrapbook .sb-menu-button {
      background: #fffaf2;
    }

    @keyframes sbPageTurn {
      from { opacity: .5; transform: rotateY(-18deg) translateX(12px); }
      to { opacity: 1; transform: rotateY(0) translateX(0); }
    }

    @media (prefers-reduced-motion: reduce) {
      #papaScrapbook *,
      #papaScrapbook *::before,
      #papaScrapbook *::after {
        animation-duration: .01ms !important;
        transition-duration: .01ms !important;
      }
    }
  `;

  document.head.appendChild(style);
}
