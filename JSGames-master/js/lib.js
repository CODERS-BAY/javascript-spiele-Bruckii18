
function createPopup(errorMessage, reload = false) {
    let newPopup = document.createElement("div");
    newPopup.setAttribute("id", "errorPopup");

    let popupMessage = document.createElement("h3");
    popupMessage.append(errorMessage);

    let popupButton = document.createElement("button");
    if (reload) {
        popupButton.append("Play again")
        popupButton.addEventListener("click", function (){
            location.reload();
        });
    } else {
        popupButton.append("OK");
        popupButton.addEventListener("click", closePopUp);
    }

    document.body.appendChild(newPopup);
    newPopup.appendChild(popupMessage);
    newPopup.appendChild(popupButton);
}

function closePopUp() {
    errorPopup.remove();
}
