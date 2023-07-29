const dayNames = ["Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"];

const monthNames = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"]


function updateDate() {
        var today = new Date();

        var string = "📆 ";

        string += dayNames[today.getDay()];
        string += ", ";
        string += monthNames[today.getMonth()];
        string += " ";
        string += today.getDate();

        document.getElementById("date").textContent = string;
        setTimeout(updateDate, 60000);
}

function updateTime() {
        var today = new Date();
        document.getElementById("time").textContent = "🕰" + today.toLocaleTimeString('en-US');
        setTimeout(updateTime, 100);
}
