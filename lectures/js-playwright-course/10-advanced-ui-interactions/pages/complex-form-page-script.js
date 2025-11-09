// File upload feedback
document.getElementById("resume").addEventListener("change", function () {
  const fileInfo = document.getElementById("file-info");
  if (this.files.length > 0) {
    const names = Array.from(this.files)
      .map((f) => f.name)
      .join(", ");
    const totalSizeKb =
      Array.from(this.files).reduce((sum, f) => sum + f.size, 0) / 1024;
    fileInfo.textContent = `Selected: ${names} (${totalSizeKb.toFixed(2)} KB total)`;
  } else {
    fileInfo.textContent = "No file selected";
  }
});

// Form submission
document
  .getElementById("registration-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const country = document.getElementById("country").value;
    const interests = Array.from(
      document.querySelectorAll('input[name="interests"]:checked')
    ).map((cb) => cb.value);
    const experience = document.querySelector(
      'input[name="experience"]:checked'
    )?.value;
    const resumeFiles = Array.from(document.getElementById("resume").files);
    const termsAccepted = document.getElementById("terms").checked;

    // Validate
    if (!country) {
      alert("Please select a country");
      return;
    }
    if (interests.length === 0) {
      alert("Please select at least one interest");
      return;
    }
    if (!experience) {
      alert("Please select your experience level");
      return;
    }
    if (!termsAccepted) {
      alert("Please accept the terms and conditions");
      return;
    }

    // Display results
    document.getElementById("result-country").textContent =
      document.querySelector(`#country option[value="${country}"]`).textContent;
    document.getElementById("result-interests").textContent =
      interests.join(", ");
    document.getElementById("result-experience").textContent = experience;
    document.getElementById("result-resume").textContent =
      resumeFiles.length > 0
        ? resumeFiles.map((f) => f.name).join(", ")
        : "Not uploaded";

    document.getElementById("result").style.display = "block";
    document.getElementById("result").scrollIntoView({ behavior: "smooth" });
  });
