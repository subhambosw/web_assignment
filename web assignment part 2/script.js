const eventList = document.getElementById("eventList");

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;

    if (title === "" || date === "") {
        alert("Please enter event title and date");
        return;
    }

    if (eventList.classList.contains("empty")) {
        eventList.innerHTML = "";
        eventList.classList.remove("empty");
    }

    const eventDiv = document.createElement("div");
    eventDiv.className = "event-item";

    eventDiv.innerHTML = `
        <strong>${title}</strong><br>
        ${date} | ${category}<br>
        <small>${description}</small>
    `;

    eventList.appendChild(eventDiv);

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}

function clearEvents() {
    eventList.innerHTML = "No events yet. Add your first event!";
    eventList.className = "empty";
}

function addSample() {
    clearEvents();
    createSample("Tech Conference", "2026-03-10", "Conference");
    createSample("Web Development Workshop", "2026-04-05", "Workshop");
}

function createSample(title, date, category) {
    if (eventList.classList.contains("empty")) {
        eventList.innerHTML = "";
        eventList.classList.remove("empty");
    }

    const div = document.createElement("div");
    div.className = "event-item";
    div.innerHTML = `
        <strong>${title}</strong><br>
        ${date} | ${category}
    `;
    eventList.appendChild(div);
}