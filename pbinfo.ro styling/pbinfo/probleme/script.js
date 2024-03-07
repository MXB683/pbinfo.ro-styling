"use strict";

chrome.storage.sync.get(
  {
    algorithms: [{}],
  },
  (items = { algorithms: [{ title: "", algorithm: "" }] }) => {
    let algorithmMenuParentNode = document.querySelector("#form-incarcare-solutie > div:nth-child(6) > div.form-group");
    let selectMenu = document.createElement("select");
    selectMenu.classList.add("form-control");
    algorithmMenuParentNode.appendChild(document.createElement("br"));
    algorithmMenuParentNode.innerHTML += "Algoritme";
    items.algorithms.forEach((element) => {
      let option = document.createElement("option");
      option.setAttribute("value", `${element.algorithm}`);
      option.innerText = element.title;
      selectMenu.appendChild(option);
    })
    algorithmMenuParentNode.appendChild(selectMenu);
    selectMenu.addEventListener("change", () => {
      let algorithm = selectMenu.value.replaceAll("&lt;", "<");
      algorithm = algorithm.replaceAll("&gt;", ">");
      navigator.clipboard.writeText(algorithm);
    })
  }
)