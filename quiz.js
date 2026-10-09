function openPapaPhoto(event) {
    const img = event.target.closest(".scrapbook-photo img");
    if (!img) return;

    const overlay = document.createElement("div");
    overlay.className = "papa-photo-overlay";

    const enlarged = document.createElement("img");
    enlarged.src = img.src;
    enlarged.alt = img.alt;

    overlay.appendChild(enlarged);
    overlay.addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
}

function startPapaScrapbook() {
    const root = document.getElementById("birthdayAnimation");

    if (!root) {
        console.error("Scrapbook: birthdayAnimation container not found.");
        return;
    }

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

    root.innerHTML = `
        <section class="papa-scrapbook">
            <header class="scrapbook-header">
                <div class="scrapbook-kicker">A LITTLE COLLECTION OF LOVE</div>
                <h1>Papa Through the Years 💗</h1>
                <p>Some moments deserve to stay forever.</p>
                <div class="scrapbook-count">8 SPECIAL MEMORIES</div>
            </header>
<div class="scrapbook-gallery" onclick="openPapaPhoto(event)">
            
                ${photos.map((photo, index) => `
                    <figure class="scrapbook-photo">
                        <img
                            src="${photo}"
                            alt="Papa memory ${index + 1}"
                            loading="${index < 2 ? "eager" : "lazy"}"
                            onerror="this.closest('figure').classList.add('photo-error')"
                        >
                        <figcaption>
                            <span>MEMORY ${String(index + 1).padStart(2, "0")}</span>
                            <span>♡</span>
                        </figcaption>
                        <div class="scrapbook-photo-error">
                            This photo couldn't load. Please check its filename.
                        </div>
                    </figure>
                `).join("")}
            </div>

            <footer class="scrapbook-footer">
                <div class="scrapbook-heart">♡</div>
                <h2>Every picture holds a little piece of our story.</h2>
                <p>And every memory with you is special, Papa.</p>

                <button
                    type="button"
                    class="scrapbook-menu-button"
                    onclick="startMemoryMenu()"
                >
                    ← Go to Menu
                </button>
            </footer>
        </section>

        <style>
            .papa-scrapbook {
                min-height: 100%;
                padding: 28px 16px 40px;
                box-sizing: border-box;
                background:
                    radial-gradient(ellipse at top, #45303e 0%, transparent 55%),
                    linear-gradient(160deg, #17131b, #251923 55%, #17131b);
                color: #fff5f7;
                font-family: Georgia, "Times New Roman", serif;
                overflow: auto;
            }

            .scrapbook-header {
                max-width: 620px;
                margin: 0 auto 28px;
                text-align: center;
            }

            .scrapbook-kicker {
                color: #efb8cb;
                font: 11px/1.6 Arial, sans-serif;
                letter-spacing: 3px;
            }

            .scrapbook-header h1 {
                margin: 12px 0;
                font-size: clamp(30px, 7vw, 46px);
                line-height: 1.15;
            }

            .scrapbook-header p,
            .scrapbook-footer p {
                color: #e5ccd5;
                font: 14px/1.7 Arial, sans-serif;
            }

            .scrapbook-count {
                display: inline-block;
                margin-top: 12px;
                padding: 8px 14px;
                border: 1px solid #b98299;
                border-radius: 30px;
                color: #f4c9d9;
                font: 10px Arial, sans-serif;
                letter-spacing: 2px;
            }

            .scrapbook-gallery {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 16px;
                max-width: 760px;
                margin: 0 auto;
            }

            .scrapbook-photo {
                min-width: 0;
                margin: 0;
                padding: 8px;
                border: 1px solid #684654;
                border-radius: 5px;
                background: #fff8f5;
                color: #553744;
                box-shadow: 0 8px 24px #0003;
            }

            .scrapbook-photo img {
                display: block;
                width: 100%;
                height: clamp(145px, 42vw, 300px);
                object-fit: contain;
                background: #eee5e8;
                border-radius: 2px;
            }

            .scrapbook-photo figcaption {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 5px;
                padding: 10px 3px 4px;
                font: 10px Arial, sans-serif;
                letter-spacing: 1px;
            }

            .scrapbook-photo figcaption span:last-child {
                color: #b25f7d;
                font-size: 18px;
            }

            .scrapbook-photo-error {
                display: none;
                padding: 8px 2px;
                color: #9b254d;
                font: 12px/1.5 Arial, sans-serif;
            }

            .scrapbook-photo.photo-error .scrapbook-photo-error {
                display: block;
            }

            .scrapbook-footer {
                max-width: 600px;
                margin: 38px auto 0;
                text-align: center;
            }

            .scrapbook-heart {
                color: #f2b6cd;
                font-size: 36px;
            }

            .scrapbook-footer h2 {
                font-size: 25px;
                line-height: 1.4;
            }

            .scrapbook-menu-button {
                display: inline-block;
                margin-top: 18px;
                padding: 14px 24px;
                border: 1px solid #e4a9c0;
                border-radius: 30px;
                background: #f1bfd0;
                color: #38202c;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
            }

            .scrapbook-menu-button:focus-visible {
                outline: 3px solid white;
                outline-offset: 4px;
            }

            @media (max-width: 360px) {
                .scrapbook-gallery {
                    gap: 10px;
                }

                .scrapbook-photo {
                    padding: 5px;
                }

                .scrapbook-photo img {
                    height: 140px;
                }
            }
            html:has(.papa-scrapbook),
body:has(.papa-scrapbook) {
    overflow: hidden !important;
    height: 100% !important;
}

#birthdayAnimation:has(.papa-scrapbook) {
    position: fixed !important;
    inset: 0 !important;
    width: 100% !important;
    height: 100vh !important;
    height: 100dvh !important;
    overflow-y: auto !important;
    overflow-x: hidden !important;
    margin: 0 !important;
    padding: 0 !important;
}

#birthdayAnimation:has(.papa-scrapbook) .papa-scrapbook {
    min-height: 0 !important;
    padding-bottom: 12px !important;
    overflow: visible !important;
}

#birthdayAnimation:has(.papa-scrapbook) .scrapbook-footer {
    margin-bottom: 0 !important;
}
        </style>
    `;

    root.scrollTop = 0;
}
