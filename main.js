let cookieModal = document.querySelector(".cookie-consent-modal")
let cancelCookieBtn = document.querySelector(".btn.cancel")
let acceptCookieBtn = document.querySelector(".btn.accept")

cancelCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
})
acceptCookieBtn.addEventListener("click", function (){
    cookieModal.classList.remove("active")
    localStorage.setItem("cookieAccepted", "yes")
})

setTimeout(function (){
    let cookieAccepted = localStorage.getItem("cookieAccepted")
    if (cookieAccepted != "yes"){
        cookieModal.classList.add("active")
    }
}, 2000)


document.addEventListener("DOMContentLoaded", function() {
    // Add a click event handler to the "Show Widget" button
    document.getElementById("showWidgetButton").addEventListener("click", function() {
        // Show the widget container when the button is clicked
        document.getElementById("widgetContainer").style.display = "block";

        // Initialize the widget after it's shown
        if (typeof wtmWidgets !== "undefined") {
            wtmWidgets.init();
        }
    });
});