var lists = document.querySelector("#lists")
var userArray = JSON.parse(localStorage.getItem("User-Info")) || [];
for (var user of userArray) {
  var entry = document.createElement("li")
  entry.textContent = `${user.initials} --- ${user.score}`;
  lists.append(entry);
}

