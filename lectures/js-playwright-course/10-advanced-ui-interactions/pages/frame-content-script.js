document.getElementById("frame-button").addEventListener("click", function () {
  const input = document.getElementById("frame-input").value;
  document.getElementById("frame-result").textContent = "You typed: " + input;
});
