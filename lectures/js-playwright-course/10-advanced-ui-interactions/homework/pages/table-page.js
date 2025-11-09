// Handles interactions for the Submitted Sessions table page
// Mirrors the separate JS file pattern used by registration-form.html

document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("submissions-table");
  const totalCountEl = document.getElementById("total-count");

  if (!table || !totalCountEl) {
    // Defensive guard in case the script is included elsewhere
    return;
  }

  function updateCount() {
    const count = table.querySelectorAll("tbody tr").length;
    totalCountEl.textContent = String(count);
  }

  function setStatus(row, status) {
    const statusCell = row.querySelector('[data-label="Status"] .pill');
    if (!statusCell) return;
    statusCell.classList.remove(
      "status-pending",
      "status-approved",
      "status-declined"
    );
    if (status === "Approved") statusCell.classList.add("status-approved");
    if (status === "Declined") statusCell.classList.add("status-declined");
    statusCell.textContent = status;
  }

  // Approve handler: alert + set status
  table.addEventListener("click", (e) => {
    const btn = e.target;
    if (!(btn instanceof HTMLElement)) return;
    if (btn.classList.contains("btn-approve")) {
      const speaker = btn.getAttribute("data-speaker") || "Unknown";
      const row = btn.closest("tr");
      alert(`Approved submission for ${speaker}.`);
      if (row) setStatus(row, "Approved");
    }
  });

  // Decline handler: confirm + remove row
  table.addEventListener("click", (e) => {
    const btn = e.target;
    if (!(btn instanceof HTMLElement)) return;
    if (btn.classList.contains("btn-decline")) {
      const speaker = btn.getAttribute("data-speaker") || "Unknown";
      const row = btn.closest("tr");
      const ok = confirm(
        `Are you sure you want to decline the submission for ${speaker}?`
      );
      if (ok && row) {
        row.remove();
        updateCount();
      }
    }
  });

  // Initialize count on load
  updateCount();
});
