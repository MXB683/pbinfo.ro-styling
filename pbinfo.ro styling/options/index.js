"use strict";

const save = () => {
  const icons = Boolean(document.getElementById("icons-enabled").checked);
  const fontLigatures = Boolean(
    document.getElementById("font-ligatures-enabled").checked
  );
  const font = document.getElementById("custom-font").value;
  const customFontLink = document.getElementById("custom-font-link").value;
  let algorithmNodes = document.querySelectorAll("#algs > fieldset.algorithm");
  let algorithms = [];
  algorithmNodes.forEach((element) => {
    try {
      algorithms.push({
        title: `${element.childNodes.item(3).value}`,
        algorithm: `${element.childNodes.item(9).innerHTML}`
      });
    } catch (error) {};
  })
  chrome.storage.sync.set(
    {
      icons: icons,
      fontLigatures: fontLigatures,
      font: font,
      customFontLink: customFontLink,
      algorithms: algorithms,
    },
    () => {
      console.log(algorithms);
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
    {
      icons: true,
      fontLigatures: true,
      font: "cascadia code",
      customFontLink: "@import url('https://fonts.cdnfonts.com/css/cascadia-code');",
      algorithms: [{}],
    },
    (items) => {
      document.getElementById("icons-enabled").checked = items.icons;
      document.getElementById("font-ligatures-enabled").checked =
        items.fontLigatures;
      document.getElementById("custom-font").value = items.font;
      document.getElementById("custom-font-link").value = items.customFontLink;
      console.log(items);
      // Algorithms
      items.algorithms.forEach((element) => {
        let node = document.createElement("fieldset");
        node.classList.add("algorithm");

        // Legend
        let legend = document.createElement("legend");
        let button = document.createElement("button");
        button.innerText = "X";
        legend.style.float = "right";
        legend.appendChild(button);
        node.appendChild(legend);

        // Input
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.classList.add("title");
        input.value = element.title;
        node.appendChild(input);

        // Line breaks
        node.appendChild(document.createElement("br"));
        node.appendChild(document.createElement("br"));

        // Textarea
        let textarea = document.createElement("textarea");
        textarea.style.height = "10em";
        textarea.style.width = "20em";
        textarea.setAttribute("placeholder", `// Write code here and paste it into the editor on pbinfo.ro
// Accepts any programming language
//
// Scrie cod aici și lipește-l în editor-ul de pe pbinfo.ro
// Acceptă orice limbaj de programare`);
        textarea.innerHTML = `#include <iostream>

using namespace std;

int main()
{
  cout << "Hello World!" << endl;
}`;
        node.appendChild(textarea);

        document.getElementById("algs").appendChild(node);
      })
    }
  );
};

const showLigsHelp = () => {
  document.getElementById("ligaturesHelp").showModal();
};

const hideLigsHelp = () => {
  document.getElementById("ligaturesHelp").close();
};

document.getElementById("algConfig").addEventListener("click", () => {
  document.getElementById('algs').showModal();
})

document.getElementById("closeAlgs").addEventListener("click", () => {
  document.getElementById('algs').close();
})

let algorithmNode = document.querySelector("fieldset.algorithm").cloneNode(true);
document.getElementById("addAlg").addEventListener("click", () => {
  let node = algorithmNode.cloneNode(true);
  document.getElementById("algs").appendChild(node);
})

setInterval(() => {
  document.querySelectorAll("fieldset.algorithm > legend > button").forEach((element) => {
    element.onclick = () => {
      element.parentElement.parentElement.remove();
      //  |        |              |
      //  V        V              V
      // btn  |  legend   |   fieldset
    }
  })
}, 1000);

document.getElementById("hideLigsHelp").addEventListener("click", hideLigsHelp);
document.getElementById("showLigsHelp").addEventListener("click", showLigsHelp);
document.getElementById("save").addEventListener("click", save);
document.addEventListener("DOMContentLoaded", restore);
