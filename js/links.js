// JS module to populate a box of links into a given set of categories.

// -- user configuration --
const linkCategories = [
    "home",
    "school"
];

const linkNames = [
    ["github"],
    ["stack overflow", "common app"]
];

const links = [
    ["https://github.com"],
    ["https://stackoverflow.com", "https://commonapp.com"]
];
// -----------------------


function createHeaders() {
    var div;
    for (let i = 0; i < linkCategories.length; i++) {
        div = document.createElement('div');
        div.innerHTML = "<b>" + linkCategories[i] + "</b>";
        div.setAttribute('class', 'link-header');
        document.getElementById("links").appendChild(div);
    }

    document.getElementById('links').style.gridTemplateColumns = "repeat(" + linkCategories.length + ", minmax(0,1fr)";
}

function createLinks() {
    // get lengths of all the link categories in links
    var lengths = [];
    for (let i = 0; i < links.length; i++) { lengths.push(links[i].length); }

    const max = Math.max(...lengths);

    // max is how many rows are going to get created. some cells will
    // simply be blank if there is no corresponding
    
    for (let i2 = 0; i2 < max; i2++) {
        for (let activeColumn = 0; activeColumn < linkCategories.length; activeColumn++) { 
            var div = document.createElement('div');

            div.setAttribute('class', 'link');

            if (i2 >= linkNames[activeColumn].length) {
                // blank cell
                div.innerHTML = "";
            } else {
                var link = document.createElement('a');
                var linkText = document.createTextNode(linkNames[activeColumn][i2]);
                link.appendChild(linkText);
                link.title = linkNames[activeColumn][i2];
                link.href = links[activeColumn][i2];
                div.appendChild(link);
            }

            document.getElementById('links').appendChild(div);
        }
    }
}
