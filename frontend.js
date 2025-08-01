async function loadTasks() {
  try {
    const response = await fetch("https://rupalibhosale.app.n8n.cloud/webhook-test/client-tasks");
    const data = await response.json();

    if (!data.tasks || !Array.isArray(data.tasks)) {
      throw new Error("Unexpected response format.");
    }

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    data.tasks.forEach(task => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${task.date?.split("T")[0] || ""}</td>
        <td>${task.team_member || ""}</td>
        <td>${task.task || ""}</td>
        <td>${task.status || ""}</td>
        <td><span class="priority-${task.priority?.toLowerCase()}">${task.priority || ""}</span></td>
        <td>${task.notes || ""}</td>
      `;
      taskList.appendChild(row);
    });
  } catch (error) {
    const taskList = document.getElementById("taskList");
    if (taskList) {
      taskList.innerHTML = `<tr><td colspan="6">❌ Failed to load tasks:<br>${error}</td></tr>`;
    }
  }
}

window.addEventListener("DOMContentLoaded", loadTasks);
