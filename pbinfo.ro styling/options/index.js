"use strict";

const save = () => {
  const icons = Boolean(document.getElementById("icons-enabled").checked);
  const fontLigatures = Boolean(
    document.getElementById("font-ligatures-enabled").checked
  );
  const font = document.getElementById("custom-font").value;
  chrome.storage.sync.set(
    {
      icons: icons,
      fontLigatures: fontLigatures,
      font: font,
    },
    () => {
      document.getElementById("save").innerText = "Saved!";
      document.getElementById("save").style.backgroundColor = "rgb(0, 255, 128)";
      setTimeout(() => {
        document.getElementById("save").innerText = "Save Settings";
        document.getElementById("save").style.backgroundColor = "rgb(240, 240, 240)";
      }, 1000);
    }
  );
};

const restore = () => {
  chrome.storage.sync.get({ icons: true, fontLigatures: true, font: "cascadia-code" }, (items) => {
    document.getElementById("icons-enabled").checked = items.icons;
    document.getElementById("font-ligatures-enabled").checked =
      items.fontLigatures;
    document.getElementById("custom-font").value = items.font;
  });
};

document.getElementById("save").addEventListener("click", save);
document.addEventListener("DOMContentLoaded", restore);
