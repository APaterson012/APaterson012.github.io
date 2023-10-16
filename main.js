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


$(document).ready(function() {
    // Hide the widget container initially
    $("#widgetContainer").hide();

    // Add a click event handler to the "Show Widget" button
    $("#showWidgetButton").click(function() {
        // Show the widget container when the button is clicked
        $("#widgetContainer").show();

        // Initialize the widget after it's shown
        if (typeof wtmWidgets !== "undefined") {
            wtmWidgets.init();
        }
    });
});