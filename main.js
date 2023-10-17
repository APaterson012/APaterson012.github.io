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

// URL of the Rolling Stone RSS feed converted to JSON using rss2json
const rssFeedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.rollingstone.com%2Fmusic%2Ffeed%2F';

// Function to load and display the RSS feed with images
function loadRSSFeed() {
    fetch(rssFeedUrl)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const items = data.items;

                const feedContainer = document.getElementById('rss-feed');

                items.forEach(item => {
                    const title = item.title;
                    const link = item.link;

                    // Create a div to hold the title
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'rss-item';

                    // Create a link element for the title
                    const linkElement = document.createElement('a');
                    linkElement.href = link;
                    linkElement.textContent = title;

                    // Append the item div to the feed container
                    feedContainer.appendChild(itemDiv);
                });
            } else {
                console.error('Error loading RSS feed:', data.message);
            }
        })
        .catch(error => {
            console.error('Error loading RSS feed:', error);
        });
}

// Call the function to load the RSS feed
loadRSSFeed();
