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

// Function to load and display the RSS feed with individual boxes
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

                    // Create a div for each individual box
                    const itemDiv = document.createElement('div');
                    itemDiv.className = 'rss-item';

                    // Create a link element for the title
                    const linkElement = document.createElement('a');
                    linkElement.href = link;
                    linkElement.textContent = title;

                    // Append the link to the individual box
                    itemDiv.appendChild(linkElement);

                    // Add the individual box to the feed container
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

// Call the function to load the RSS feed with individual boxes
loadRSSFeed();


let slideIndex = 1; // Initialize slideIndex
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  slideIndex = n; // Update slideIndex directly
  showSlides(slideIndex);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides fade");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}