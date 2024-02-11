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
      document.getElementById("save").classList.add("active");
      document.getElementById("save_text").innerText = document.getElementById("save").innerText.replace("Save Settings", "Saved!");
      document.getElementById("save").style.backgroundColor =
      "rgb(0, 255, 128)";
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
      });
      setTimeout(() => {
        document.getElementById("save_text").innerText = document.getElementById("save").innerText.replace("Saved!", "Save Settings");
        document.getElementById("save").style.backgroundColor =
          "rgb(240, 240, 240)";
        document.getElementById("save").classList.remove("active");
      }, 3000);
    }
  );
};

const restore = () => {
  chrome.storage.sync.get(
    { icons: true, fontLigatures: true, font: "cascadia code" },
    (items) => {
      document.getElementById("icons-enabled").checked = items.icons;
      document.getElementById("font-ligatures-enabled").checked =
        items.fontLigatures;
      document.getElementById("custom-font").value = items.font;
    }
  );
};

const showLigsHelp = () => {
  document.getElementById("ligaturesHelp").showModal();
};

const hideLigsHelp = () => {
  document.getElementById("ligaturesHelp").close();
};

document.getElementById("hideLigsHelp").addEventListener("click", hideLigsHelp);
document.getElementById("showLigsHelp").addEventListener("click", showLigsHelp);
document.getElementById("save").addEventListener("click", save);
document.addEventListener("DOMContentLoaded", restore);
