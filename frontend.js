const payload = {
  "Date": dateValue,
  "Team Member": teamMemberValue,
  "Task": taskValue,
  "Status": statusValue,
  "Priority": priorityValue,
  "Notes": notesValue
};

fetch("https://n8n.mycompany.in/webhook/create-task-db", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(payload)
})
.then(res => res.json())
.then(data => {
  alert(data.message);  // Show success message
})
.catch(err => {
  console.error("Error submitting task:", err);
});
