function search() {
    document.getElementById('search-results').innerHTML = `
        <div class="search-options">
            <button onclick="showProducts('smartwatches')">
                Smartwatches
            </button>
            <button onclick="showProducts('earbuds')">
                Earbuds
            </button>
        </div>
    `;
}

function showOptions() {
    document.getElementById('search-options').style.display = 'block';
    document.getElementById('search-options').innerHTML = `
        <button onclick="showProducts('smartwatches')">
            Smartwatches
        </button>
        <button onclick="showProducts('earbuds')">
            Earbuds
        </button>
    `;
}

function showProducts(category) {
    window.location.href = category + '.html';
}

function showContact() {
    let contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `<p>Please contact us at: 
        <a href="mailto:atomicwatches123@gmail.com">
        atomicwatches123@gmail.com
        </a></p>`;
    contactInfo.style.display = 'block';
}

function showCart() {
    let cartInfo = document.getElementById('cart-info');
    cartInfo.innerHTML = "<p>No item available now.</p>";
    cartInfo.style.display = 'block';
}
