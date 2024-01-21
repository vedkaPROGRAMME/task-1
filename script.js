const buttons = document.querySelectorAll(".btn");
const msg = document.querySelector(".msg"); // Use querySelector for class "msg"

function btnclick() {
    if (msg) {
        msg.innerText = "Item successfully added in cart";
        msg.classList.remove("hide");
    } else {
        console.error("Error: Element with class 'msg' not found");
    }
}

// Add click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", btnclick);
});
