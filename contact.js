function changeVisibility() {
    const tos = document.getElementById("TOS");
    const button = document.querySelector(".button");
    
    if (tos.style.display == "none") {
        tos.style.display = "block";
        button.innerText = "HIDE TEXT";  
    } else {
        tos.style.display = "none";
        button.innerText = "SHOW TEXT";  
    }
}