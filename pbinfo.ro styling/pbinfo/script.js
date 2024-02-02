"use strict";

chrome.storage.sync.get(
  { icons: true, fontLigatures: true, font: "cascadia-code" },
  (items) => {
    // Icons
    if (items.icons) {
      document.querySelector(
        "#bara_navigare > div > div.navbar-header > a"
      ).innerHTML = `
    <svg style="height: 20px; width: 20px;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
      <path fill="#ffffff"
        d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
    </svg>
    `;
      document.querySelector(
        "#bara_navigare > div > div.navbar-header > a"
      ).title = "Acasă";

      document.querySelector("#navigare-li-probleme > a").innerHTML = `
    <svg style="height: 20px; width: 20px;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path fill="#ffffff"
      d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
    </svg>
    `;
      document.querySelector("#navigare-li-probleme > a").title = "Probleme";

      document.querySelector("#navigare-li-solutii > a").innerHTML = `
    <svg style="height: 20px; width: 20px;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path fill="#ffffff"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
    </svg>
    `;
      document.querySelector("#navigare-li-solutii > a").title = "Soluții";

      document.querySelector("#navigare-li-resurse > a").innerHTML = `
    <svg style="height: 20px; width: 20px;"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512">
      <path fill="#ffffff"
        d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </svg>
    `;
      document.querySelector("#navigare-li-resurse > a").title = "Resurse";

      document.querySelector(
        "#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a"
      ).innerHTML = `
    <svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M160 64c0-35.3 28.7-64 64-64H576c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H336.8c-11.8-25.5-29.9-47.5-52.4-64H384V320c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v32h64V64L224 64v49.1C205.2 102.2 183.3 96 160 96V64zm0 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zM133.3 352h53.3C260.3 352 320 411.7 320 485.3c0 14.7-11.9 26.7-26.7 26.7H26.7C11.9 512 0 500.1 0 485.3C0 411.7 59.7 352 133.3 352z"/></svg>
    `;
      document.querySelector(
        "#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a"
      ).title = "Profesor";

      document.querySelector(
        "#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
      ).innerHTML = `
    <svg style="heigth: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"/></svg>
    `;
      document.querySelector(
        "#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a"
      ).title = "Profil";

      try {
        document.querySelector(
          '#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a[data-target="#modal_login"]'
        ).innerHTML = `
      <svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
      `;
        document.querySelector(
          '#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(1) > a[data-target="#modal_login"]'
        ).title = "Autentificare";

        document.querySelector(
          '#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a[href="/?pagina=creare-cont"]'
        ).innerHTML = `
      <svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
      `;
        document.querySelector(
          '#navbar > ul.nav.navbar-nav.navbar-right > li:nth-child(2) > a[href="/?pagina=creare-cont"]'
        ).title = "Înregistrare";
      } catch {}
    }

    // Font ligatures
    if (items.fontLigatures) {
      document.querySelector("body").style.fontVariantLigatures = "normal";
    } else {
      document.querySelector("body").style.fontVariantLigatures = "none";
    }

    // Font
    document.querySelector("body").style.fontFamily = `${items.font}, sans-serif`;

    // cuz y not
    if (
      document
        .querySelector(
          "body > div:nth-child(2) > div.bg-primary > div > div > div.col-lg-10.col-md-9.col-sd-8 > p.very-big"
        )
        .innerHTML.includes("Aici ai probleme!")
    ) {
      document.querySelector(
        "body > div:nth-child(2) > div.bg-primary > div > div > div.col-lg-10.col-md-9.col-sd-8 > p.very-big"
      ).innerHTML = document
        .querySelector(
          "body > div:nth-child(2) > div.bg-primary > div > div > div.col-lg-10.col-md-9.col-sd-8 > p.very-big"
        )
        .innerHTML.replace(" De informatică :)", "");
    }

    
  }
);
