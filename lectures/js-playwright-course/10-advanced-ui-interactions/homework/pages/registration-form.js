// Ensure DOM is ready even if this script is moved in the future
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("session-form");
  const formatSelect = document.getElementById("session-format");
  const topicCheckboxes = document.querySelectorAll('input[name="topics"]');
  const levelRadios = document.querySelectorAll('input[name="sessionLevel"]');
  const materialsInput = document.getElementById("materials");
  const codeOfConductCheckbox = document.getElementById("code-of-conduct");
  const resultPanel = document.getElementById("result");
  const fileInfo = document.getElementById("file-info");
  const formatHidden = document.getElementById("format-hidden");
  const levelHidden = document.getElementById("level-hidden");
  const topicsHidden = document.getElementById("topics-hidden");
  const filesHidden = document.getElementById("files-hidden");

  function getFormatLabel(value) {
    const option = formatSelect.querySelector(`option[value="${value}"]`);
    return option ? option.textContent : "";
  }

  function getCheckedEntries(nodeList) {
    return Array.from(nodeList)
      .filter((node) => node.checked)
      .map((node) => {
        const rawText = node.parentElement?.textContent ?? node.value;
        const labelText = rawText.replace(/\s+/g, " ").trim();
        return { value: node.value, label: labelText };
      });
  }

  function updateFileInfo() {
    if (materialsInput.files.length === 0) {
      fileInfo.textContent = "No file selected";
      return;
    }

    const names = Array.from(materialsInput.files).map((file) => file.name);
    const totalSize = Array.from(materialsInput.files).reduce(
      (sum, file) => sum + file.size,
      0
    );
    fileInfo.textContent = `${names.join(", ")} (${(totalSize / 1024).toFixed(1)} KB)`;
  }

  function setHiddenMultiInputs(containerEl, name, values) {
    if (!containerEl) return;
    containerEl.innerHTML = "";
    values.forEach((val) => {
      const i = document.createElement("input");
      i.type = "hidden";
      i.name = name;
      i.value = val;
      containerEl.appendChild(i);
    });
  }

  function syncHiddenFields() {
    const selectedFormatLabel = getFormatLabel(formatSelect.value) ?? "";
    if (formatHidden) formatHidden.value = selectedFormatLabel;

    const selectedLevel = getCheckedEntries(levelRadios)[0]?.label ?? "";
    if (levelHidden) levelHidden.value = selectedLevel;

    const selectedTopics = getCheckedEntries(topicCheckboxes).map(
      (t) => t.label
    );
    setHiddenMultiInputs(topicsHidden, "topic", selectedTopics);

    const selectedFiles = Array.from(materialsInput.files).map((f) => f.name);
    setHiddenMultiInputs(filesHidden, "file", selectedFiles);
  }

  // Initial sync on load
  syncHiddenFields();

  // Keep hidden fields in sync as the user interacts
  formatSelect.addEventListener("change", syncHiddenFields);
  Array.from(levelRadios).forEach((r) =>
    r.addEventListener("change", syncHiddenFields)
  );
  Array.from(topicCheckboxes).forEach((c) =>
    c.addEventListener("change", syncHiddenFields)
  );
  materialsInput.addEventListener("change", () => {
    updateFileInfo();
    syncHiddenFields();
  });

  form.addEventListener("submit", (event) => {
    const format = formatSelect.value;
    const topicSelections = getCheckedEntries(topicCheckboxes);
    const audienceSelections = getCheckedEntries(levelRadios);
    const audienceLevelValue = audienceSelections[0]?.value;
    const audienceLevelLabel = audienceSelections[0]?.label;
    const supportingFiles = Array.from(materialsInput.files);

    // Validation: block native submit if invalid
    if (!format) {
      event.preventDefault();
      alert("Please select a session format before continuing.");
      return;
    }

    if (topicSelections.length === 0) {
      event.preventDefault();
      alert("Please choose at least one primary topic.");
      return;
    }

    if (!audienceLevelValue) {
      event.preventDefault();
      alert("Please select the intended audience level.");
      return;
    }

    if (!codeOfConductCheckbox.checked) {
      event.preventDefault();
      alert("Please confirm acceptance of the code of conduct.");
      return;
    }

    // Update visible summary (optional, page will navigate immediately on fast machines)
    document.getElementById("result-format").textContent =
      getFormatLabel(format);
    document.getElementById("result-topics").textContent = topicSelections
      .map((entry) => entry.label)
      .join(", ");
    document.getElementById("result-level").textContent = audienceLevelLabel;
    document.getElementById("result-files").textContent =
      supportingFiles.length === 0
        ? "No files uploaded"
        : supportingFiles.map((file) => file.name).join(", ");
    resultPanel.style.display = "block";

    // Populate hidden fields so native GET submission carries human-friendly labels
    const formatHidden = document.getElementById("format-hidden");
    const levelHidden = document.getElementById("level-hidden");
    const topicsHidden = document.getElementById("topics-hidden");
    const filesHidden = document.getElementById("files-hidden");

    if (formatHidden) formatHidden.value = getFormatLabel(format);
    if (levelHidden) levelHidden.value = audienceLevelLabel ?? "";

    // Clear containers and add inputs for multi-value params
    if (topicsHidden) topicsHidden.innerHTML = "";
    if (filesHidden) filesHidden.innerHTML = "";

    if (topicsHidden) {
      topicSelections.forEach((entry) => {
        const i = document.createElement("input");
        i.type = "hidden";
        i.name = "topic";
        i.value = entry.label;
        topicsHidden.appendChild(i);
      });
    }

    if (filesHidden) {
      supportingFiles.forEach((file) => {
        const i = document.createElement("input");
        i.type = "hidden";
        i.name = "file";
        i.value = file.name;
        filesHidden.appendChild(i);
      });
    }

    // Do NOT preventDefault here; allow native navigation to session-confirmation.html
  });

  // Ensure query params always include the human-friendly values
  // This fires after the browser constructs the FormData and before it navigates
  form.addEventListener("formdata", (e) => {
    const fd = e.formData;

    // Clear any existing entries to avoid duplicates
    fd.delete("format");
    fd.delete("level");
    fd.delete("topic");
    fd.delete("file");

    // Add label-based values
    const selectedFormatLabel = getFormatLabel(formatSelect.value) || "";
    if (selectedFormatLabel) fd.set("format", selectedFormatLabel);

    const selectedLevelLabel = getCheckedEntries(levelRadios)[0]?.label || "";
    if (selectedLevelLabel) fd.set("level", selectedLevelLabel);

    const selectedTopics = getCheckedEntries(topicCheckboxes).map(
      (t) => t.label
    );
    selectedTopics.forEach((label) => fd.append("topic", label));

    const selectedFiles = Array.from(materialsInput.files).map((f) => f.name);
    selectedFiles.forEach((name) => fd.append("file", name));
  });
});
