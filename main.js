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

// URL of the RSS feed
const rssFeedUrl = 'https://www.factmag.com/category/magazine/feed';

// Function to fetch and display the RSS feed
function loadRSSFeed() {
    fetch(rssFeedUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            const feedContainer = document.getElementById('rss-feed');

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const itemElement = document.createElement('a');
                itemElement.href = link;
                itemElement.textContent = title;

                feedContainer.appendChild(itemElement);
            });
        })
        .catch(error => {
            console.error('Error loading RSS feed:', error);
        });
}

// Call the function to load the RSS feed
loadRSSFeed();
