
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

    let page = -1;

    screen.innerHTML = `
        <section id="papaScrapbook">
            <button id="sbBack" type="button">← Back to Menu</button>

            <div class="sb-book" id="sbBook">
                <div class="sb-cover">
                    <div class="sb-cover-decoration">✦ ❀ ✦</div>
                    <div class="sb-cover-title">Our Little<br>Scrapbook</div>
                    <div class="sb-cover-subtitle">A book full of Papa 💗</div>
                    <div class="sb-cover-flower">❀</div>
                    <button id="sbOpen" type="button">Open the Book ♡</button>
                </div>

                <div class="sb-page" id="sbPage" hidden>
                    <img id="sbPhoto" alt="A special family memory">
                    <div class="sb-page-number" id="sbPageNumber"></div>
                    <button class="sb-arrow sb-prev" id="sbPrev"
                        type="button" aria-label="Previous photo">‹</button>
                    <button class="sb-arrow sb-next" id="sbNext"
                        type="button" aria-label="Next photo">›</button>
                </div>
            </div>

            <div class="sb-controls" id="sbControls" hidden>
                <span id="sbCount"></span>
                <button id="sbClose" type="button">Close Book</button>
            </div>
        </section>
    `;

    addScrapbookStyles();

    const book = document.getElementById("sbBook");
    const cover = book.querySelector(".sb-cover");
    const photoPage = document.getElementById("sbPage");
    const photo = document.getElementById("sbPhoto");
    const controls = document.getElementById("sbControls");

    function showPhoto(index) {
        page = Math.max(0, Math.min(index, photos.length - 1));

        photo.style.opacity = "0";

        window.setTimeout(() => {
            photo.src = photos[page];
            photo.style.opacity = "1";
        }, 100);

        document.getElementById("sbPageNumber").textContent =
            `${page + 1} / ${photos.length}`;

        document.getElementById("sbCount").textContent =
            `Memory ${page + 1} of ${photos.length}`;

        document.getElementById("sbPrev").disabled = page === 0;
        document.getElementById("sbNext").disabled =
            page === photos.length - 1;
    }

    function openBook() {
        cover.hidden = true;
        photoPage.hidden = false;
        controls.hidden = false;
        book.classList.add("sb-book-open");
        showPhoto(0);
    }

    function closeBook() {
        photoPage.hidden = true;
        controls.hidden = true;
        cover.hidden = false;
        book.classList.remove("sb-book-open");
        page = -1;
    }

    document.getElementById("sbOpen").addEventListener("click", openBook);

    document.getElementById("sbPrev").addEventListener("click", () => {
        if (page > 0) showPhoto(page - 1);
    });

    document.getElementById("sbNext").addEventListener("click", () => {
        if (page < photos.length - 1) showPhoto(page + 1);
    });

    document.getElementById("sbClose").addEventListener("click", closeBook);

    document.getElementById("sbBack").addEventListener("click", () => {
        if (typeof startMemoryMenu === "function") {
            startMemoryMenu();
        }
    });
}

function addScrapbookStyles() {
    let oldStyle = document.getElementById("papaScrapbookStyles");
    if (oldStyle) oldStyle.remove();

    const style = document.createElement("style");
    style.id = "papaScrapbookStyles";

    style.textContent = `
        #papaScrapbook {
            position: fixed;
            inset: 0;
            z-index: 10000;
            width: 100%;
            height: 100%;
            height: 100dvh;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;
            background:
                radial-gradient(ellipse at top, #51354f, #21182c 60%, #100e19);
            color: #fff5f8;
            font-family: Georgia, serif;
            padding: 12px;
            padding-top: max(12px, env(safe-area-inset-top));
            padding-bottom: max(12px, env(safe-area-inset-bottom));
        }

        #papaScrapbook * {
            box-sizing: border-box;
        }

        #papaScrapbook button {
            font: inherit;
            cursor: pointer;
            touch-action: manipulation;
        }

        #papaScrap #sbBack {
            align-self: flex-start;
            flex: 0 0 auto;
            border: 1px solid #f3c9db88;
            border-radius: 22px;
            padding: 10px 16px;
            background: #241725;
            color: #fff4fa;
            font-size: 14px;
            margin-bottom: 10px;
        }

        #papaScrap .sb-book {
            position: relative;
            flex: 1 1 auto;
            min-height: 0;
            width: min(100%, 650px);
            max-height: 100%;
            border: 3px solid #b77a57;
            border-radius: 12px;
            overflow: hidden;
            background: #492b31;
            box-shadow: 0 8px 28px #0008;
        }

        #papaScrap .sb-cover {
            width: 100%;
            height: 100%;
            min-height: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 22px;
            text-align: center;
            padding: 20px;
            background:
                radial-gradient(circle at 50% 40%, #81535b, #492b31 72%);
            border: 8px double #d9ad80;
        }

        #papaScrap .sb-cover-decoration {
            color: #f6d5ac;
            font-size: 24px;
            letter-spacing: 7px;
        }

        #papaScrap .sb-cover-title {
            font-size: clamp(34px, 8vw, 58px);
            line-height: 1.12;
            color: #fff0d8;
            text-shadow: 0 3px 12px #160b15;
        }

        #papaScrap .sb-cover-subtitle {
            font-size: 16px;
            color: #f8dce6;
        }

        #papaScrap .sb-cover-flower {
            font-size: 40px;
            color: #f5c6d7;
        }

        #papaScrap #sbOpen,
        #papaScrap #sbClose {
            border: 1px solid #f8d7e5;
            border-radius: 24px;
            background: #f4d4df;
            color: #432633;
            padding: 12px 20px;
        }

        #papaScrap .sb-page {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #100d12;
            animation: sbPageIn .35s ease both;
        }

        #papaScrap .sb-page[hidden],
        #papaScrap .sb-cover[hidden],
        #papaScrap .sb-controls[hidden] {
            display: none !important;
        }

        #papaScrap #sbPhoto {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            transition: opacity .18s ease;
        }

        #papaScrap .sb-page-number {
            position: absolute;
            left: 50%;
            bottom: 12px;
            transform: translateX(-50%);
            border-radius: 18px;
            padding: 6px 13px;
            background: #180f18cc;
            color: white;
            font: 13px Arial, sans-serif;
        }

        #papaScrap .sb-arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 42px;
            height: 54px;
            border: 1px solid #ffffff80;
            border-radius: 12px;
            background: #1c1019a8;
            color: white;
            font: 34px Arial, sans-serif;
            line-height: 1;
        }

        #papaScrap .sb-prev { left: 9px; }
        #papaScrap .sb-next { right: 9px; }

        #papaScrap .sb-arrow:disabled {
            opacity: .3;
            cursor: default;
        }

        #papaScrap .sb-controls {
            flex: 0 0 auto;
            width: min(100%, 650px);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding-top: 10px;
            font: 13px Arial, sans-serif;
        }

        #papaScrap #sbClose {
            padding: 9px 15px;
            font: 14px Arial, sans-serif;
        }

        @keyframes sbPageIn {
            from { opacity: .5; transform: scale(.985); }
            to { opacity: 1; transform: scale(1); }
        }

        @media (prefers-reduced-motion: reduce) {
            #papaScrap .sb-page {
                animation: none;
            }
        }
    `;

    document.head.appendChild(style);
}
