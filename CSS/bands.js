let bandList = []
function addBand() {
    let input = document.getElementById("band");
    let band = input.value;
    bandList.push(band);
    output.textContent = '[' + bandList.join(', ') + ']';
    input.value = '';
    updateScreen();
}

function updateScreen() {
    let output = document.getElementById("list");
    output.textContent = '[' + bandList.join(', ') + ']';
}

function clearList () {
    bandList = [];
    updateScreen();
}

function reverseList() {
    bandList.reverse();
    updateScreen();
}

