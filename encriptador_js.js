const d = document,
  $btnEncriptar = d.querySelector(".encriptar-btn"),
  $btnDescifrar = d.querySelector(".descifrar-btn"),
  $txtInput = d.querySelector(".textarea-input"),
  $encriptadoContainer = d.querySelector(".container-txt-encriptado");

$btnEncriptar.addEventListener("click", () => {
  let input = $txtInput.value.toLowerCase();
  input = input.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtEncripted = input.replaceAll("e", "enter");
  txtEncripted = txtEncripted.replaceAll("i", "imes");
  txtEncripted = txtEncripted.replaceAll("a", "ai");
  txtEncripted = txtEncripted.replaceAll("o", "ober");
  txtEncripted = txtEncripted.replaceAll("u", "ufat");
  console.log(txtEncripted);

  $encriptadoContainer.innerHTML = `
  <div class="div-encriptado">
  <article
            class="parrafo-encriptado"
          >${txtEncripted}</article>
          <button class="copy-btn">Copiar</button>
          </div>
  `;
});

$btnDescifrar.addEventListener("click", (e) => {
  const $encriptadoContainer = d.querySelector(".container-txt-encriptado");

  let txt = $txtInput.value.toLowerCase();
  txt = txt.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtDecripted = txt.replaceAll("enter", "e");
  txtDecripted = txtDecripted.replaceAll("imes", "i");
  txtDecripted = txtDecripted.replaceAll("ai", "a");
  txtDecripted = txtDecripted.replaceAll("ober", "o");
  txtDecripted = txtDecripted.replaceAll("ufat", "u");
  console.log(txtDecripted);

  $encriptadoContainer.innerHTML = `
  <div class="div-encriptado">
  <article
            class="parrafo-encriptado"
          >${txtDecripted}</article>
          <button class="copy-btn">Copiar</button>
          </div>
  `;
});

$encriptadoContainer.addEventListener("click", (e) => {
  const $copyButton = d.querySelector(".copy-btn"),
    $contenedorInput = d.querySelector(".textarea-input"),
    txtCopy = d.querySelector(".parrafo-encriptado").textContent;

  if (e.target.matches(".copy-btn")) {
    $contenedorInput.value = `${txtCopy}`;
    $copyButton.textContent = "Copiado a la izquierda";
    $copyButton.classList.add("btn-azul");
    $copyButton.classList.remove("copy-btn");
  }
});
