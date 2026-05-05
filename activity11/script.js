// --- For Loop Logic ---
function runForLoop() {
    const num = document.getElementById('forNum').value;
    const text = document.getElementById('forText').value;
    const output = document.getElementById('forOutput');
    output.innerHTML = "";

    for (let i = 0; i < num; i++) {
        output.innerHTML += (i + 1) + ". " + text + "<br>";
    }
}

function clearFor() {
    document.getElementById('forNum').value = "";
    document.getElementById('forText').value = "";
    document.getElementById('forOutput').innerHTML = "";
}

// --- While Loop Logic ---
function runWhileLoop() {
    const num = document.getElementById('whileNum').value;
    const text = document.getElementById('whileText').value;
    const output = document.getElementById('whileOutput');
    output.innerHTML = "";

    let i = 0;
    while (i < num) {
        output.innerHTML += (i + 1) + ". " + text + "<br>";
        i++;
    }
}

function clearWhile() {
    document.getElementById('whileNum').value = "";
    document.getElementById('whileText').value = "";
    document.getElementById('whileOutput').innerHTML = "";
}

// --- Do-While Loop Logic ---
function runDoWhile() {
    const num = document.getElementById('doNum').value;
    const text = document.getElementById('doText').value;
    const output = document.getElementById('doOutput');
    output.innerHTML = "";

    let i = 0;
    if (num > 0) {
        do {
            output.innerHTML += (i + 1) + ". " + text + "<br>";
            i++;
        } while (i < num);
    }
}

function clearDo() {
    document.getElementById('doNum').value = "";
    document.getElementById('doText').value = "";
    document.getElementById('doOutput').innerHTML = "";
}