const container = document.querySelector(".container");
const dataBlock = document.querySelector(".dataBlock");

function randomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

let arr = [];
function iterateJson(obj) {
  for (prop in obj) {
    if (typeof obj[prop] === "object") {
      iterateJson(obj[prop]);
    } else {
      if (Object.keys(obj).includes("subData") && !arr.includes(obj.id)) {
        const subDataId = obj.id;
        console.log(obj);
        arr.push(subDataId);
        const subData = document.querySelector(`.subdata${subDataId}`);
        if (document.getElementsByClassName(`subdata${subDataId}`).length > 0) {
          const randomColor = Math.floor(Math.random() * 16777215).toString(16);
          for (sub in obj.subData) {
            subData.innerHTML += `
                <ul style="background:#${randomColor}">
                <li>id: ${obj.subData[sub].id}</li>
                <li>Site Name: ${obj.subData[sub].name}</li>
                <li>
                    <a href="https://${obj.subData[sub].url}">${obj.subData[sub].name}</a>
                </li>
                <li class="subdata${obj.subData[sub].id}"></li>
                </ul>`;
          }
        }
      }
    }
  }
}
function initialBlocks(obj) {
  const ul = document.createElement("ul");
  ul.classList.add("dataBlock");
  ul.innerHTML = `
    <li>id: ${obj.id}</li>
    <li>Site Name: ${obj.name}</li>
    <li>
        <a href="https://${obj.url}">${obj.name}</a>
    </li>
    <li class="subdata${obj.id}"></li>
    `;
  container.appendChild(ul);
}

function init() {
  data.forEach((site) => {
    initialBlocks(site);
  });
  iterateJson(data);
}
