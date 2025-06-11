console.log("Página divertida da Ingrid carregada! 🎉");

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("playSurpresa");
  const surpresa = document.getElementById("surpresa");
  const audio = document.getElementById("audio");

  btn.addEventListener("click", () => {
    surpresa.style.display = "block";
    btn.style.display = "none";
    audio.play();
  });
});
