// Add click handlers for demonstration
document.querySelectorAll(".edit-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const row = this.closest("tr");
    const name = row.querySelector("td:nth-child(2)").textContent;
    alert(`Editing user: ${name}`);
  });
});

document.querySelectorAll(".delete-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const row = this.closest("tr");
    const name = row.querySelector("td:nth-child(2)").textContent;
    if (confirm(`Delete user: ${name}?`)) {
      row.remove();
      updateUserCount();
    }
  });
});

function updateUserCount() {
  const count = document.querySelectorAll("#users-table tbody tr").length;
  document.getElementById("user-count").textContent = `Total Users: ${count}`;
}
