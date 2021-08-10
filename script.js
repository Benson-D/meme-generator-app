//Variables Form and Adding new meme
const form = document.querySelector(".meme__form");
const newMeme = document.querySelector(".new__meme");

function renderMeme(img, top, bottom) {
  const generate = document.createElement("div");
  generate.classList.add("generate__meme");
  generate.style.backgroundImage = `url('${img}')`;
  generate.style.backgroundSize = "cover";
  generate.style.backgroundPosition = "center";
  newMeme.appendChild(generate);

  const html = `
            <button class="gen__btn"><i class="fas fa-trash-alt"></i></button>
            <h2 class="gen__top">${top}</h2>
            <h2 class="gen__bottom">${bottom}</h2>
            `;

  generate.insertAdjacentHTML("afterbegin", html);
}

function processForm(e) {
  e.preventDefault();
  let top = form.topH2.value;
  let bottom = form.bottomH2.value;
  let image = form.image.value;

  renderMeme(image, top, bottom);

  form.reset();
}

//Deleting Individual meme
function deleteMeme(e) {
  const meme = e.target;

  if (meme.classList[0] === "gen__btn" || meme.classList[0] === "fas") {
    const current = meme.parentElement;
    current.remove();
  }
}

form.addEventListener("submit", processForm);
newMeme.addEventListener("click", deleteMeme);
