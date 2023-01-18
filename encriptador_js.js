const d = document,
  $btnEncriptar = d.querySelector(".encriptar-btn"),
  $btnDescifrar = d.querySelector(".descifrar-btn"),
  $txtInput = d.querySelector(".textarea-input");

function copyTxt() {
  navigator.clipboard.writeText($txtInput.value);
}

$btnEncriptar.addEventListener("click", () => {
  let input = $txtInput.value.toLowerCase();
  input = input.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtEncripted = input.replaceAll("e", "enter");
  txtEncripted = txtEncripted.replaceAll("i", "imes");
  txtEncripted = txtEncripted.replaceAll("a", "ai");
  txtEncripted = txtEncripted.replaceAll("o", "ober");
  txtEncripted = txtEncripted.replaceAll("u", "ufat");
  console.log(txtEncripted);
});

$btnDescifrar.addEventListener("click", (e) => {
  let txt = $txtInput.value.toLowerCase();
  txt = txt.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtDecripted = txt.replaceAll("enter", "e");
  txtDecripted = txtDecripted.replaceAll("imes", "i");
  txtDecripted = txtDecripted.replaceAll("ai", "a");
  txtDecripted = txtDecripted.replaceAll("ober", "o");
  txtDecripted = txtDecripted.replaceAll("ufat", "u");
  console.log(txtDecripted);
});

/* 
$btnEncriptar.addEventListener("click", () => {
  let input = $txtInput.value.toLowerCase();
  input = input.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtEncripted = input.replace(/a/gim, "ai");
  txtEncripted = txtEncripted.replace(/e/gim, "enter");
  txtEncripted = txtEncripted.replace(/i/gim, "imes");
  txtEncripted = txtEncripted.replace(/o/gim, "ober");
  txtEncripted = txtEncripted.replace(/u/gim, "ufat");
  console.log(txtEncripted);
});

$btnDescifrar.addEventListener("click", (e) => {
  let txt = $txtInput.value.toLowerCase();
  txt = txt.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
  txtDecripted = txt.replace(/ai/gim, "a");
  txtDecripted = txtDecripted.replace(/enter/gim, "e");
  txtDecripted = txtDecripted.replace(/imes/gim, "i");
  txtDecripted = txtDecripted.replace(/ober/gim, "o");
  txtDecripted = txtDecripted.replace(/ufat/gim, "u");
  console.log(txtDecripted); */

/*   $btnEncriptar.addEventListener("click", () => {
    let input = $txtInput.value.toLowerCase();
    input = input.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
    txtEncripted = input.replaceAll("a", "ai");
    txtEncripted = txtEncripted.replaceAll("e", "enter");
    txtEncripted = txtEncripted.replaceAll("i", "imes");
    txtEncripted = txtEncripted.replaceAll("o", "ober");
    txtEncripted = txtEncripted.replaceAll("u", "ufat");
    console.log(txtEncripted);
  });
  
  $btnDescifrar.addEventListener("click", (e) => {
    let txt = $txtInput.value.toLowerCase();
    txt = txt.normalize(`NFD`).replace(/[\u0300-\u036f]/g, "");
    txtDecripted = txt.replaceAll("ai", "a");
    txtDecripted = txtDecripted.replaceAll("enter", "e");
    txtDecripted = txtDecripted.replaceAll("imes", "i");
    txtDecripted = txtDecripted.replaceAll("ober", "o");
    txtDecripted = txtDecripted.replaceAll("ufat", "u");
    console.log(txtDecripted); */
