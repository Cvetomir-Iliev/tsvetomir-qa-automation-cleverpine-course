document.getElementById("load-content").addEventListener("click", function () {
  const loading = document.getElementById("loading");
  const content = document.getElementById("content");

  // Show loading indicator
  loading.style.display = "block";
  content.style.display = "none";

  // Simulate async loading (2 seconds)
  setTimeout(function () {
    loading.style.display = "none";
    content.style.display = "block";
  }, 2000);
});

document.getElementById("show-hidden").addEventListener("click", function () {
  const hidden = document.getElementById("hidden-element");
  setTimeout(function () {
    hidden.classList.remove("hidden");
  }, 1000);
});

document.getElementById("show-alert").addEventListener("click", function () {
  alert("This is an alert!");
});

document.getElementById("show-confirm").addEventListener("click", function () {
  if (confirm("Do you confirm this action?")) {
    alert("You clicked OK!");
  } else {
    alert("You clicked Cancel!");
  }
});
