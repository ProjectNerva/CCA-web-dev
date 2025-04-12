// Add JavaScript code for your web site here and call it from index.html.
function getInput() {
    let inputText = document.getElementById("copyIndicator");
    document.getElementById("outputText").textContent = "YOU TYPED: " + inputText.value;
}