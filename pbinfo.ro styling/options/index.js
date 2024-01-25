const save = () => {
  const pbinfoStyling = Boolean(
    document.getElementById("mxbsbrowserkit_pbinfoStylesEnabled").checked
  );
  chrome.storage.sync.set({ pbinfoStyling: pbinfoStyling }, () => {
    alert("Options Saved!");
  });
};

const restore = () => {
  chrome.storage.sync.get({ pbinfoStyling: true }, (items) => {
    document.getElementById("mxbsbrowserkit_pbinfoStylesEnabled").checked =
      items.pbinfoStyling;
  });
};

document.getElementById("save").addEventListener("click", save);
document.addEventListener("DOMContentLoaded", restore);