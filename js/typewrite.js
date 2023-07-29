// -- config --
var name = "Hayden"

var i = 0;
var text = "";

// determine phrase
var today = new Date();
var time = today.getHours();

if (time >= 17 || time < 5) {
        text = "Good evening";
} else if (time >= 12) {
        text = "Good afternoon";
} else {
        text = "Good morning";
}

text += ", " + name;


function typewriterWelcomePhrase(speed) {
        if (i < text.length) {
                document.getElementById("welcomebox").textContent += text.charAt(i);
                i++;
                setTimeout(typewriterWelcomePhrase, speed, speed);
        }
}
