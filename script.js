function search() {
    document.getElementById('search-results').innerHTML = `
        <div class="search-options">
            <button onclick="showProducts('smartwatches')">Smartwatches</button>
            <button onclick="showProducts('earbuds')">Earbuds</button>
        </div>
    `;
}

function showOptions() {
    const searchOptions = document.getElementById('search-options');
    searchOptions.style.display = 'block';
    searchOptions.innerHTML = `
        <button onclick="showProducts('smartwatches')">Smartwatches</button>
        <button onclick="showProducts('earbuds')">Earbuds</button>
    `;
}

function showProducts(category) {
    window.location.href = category + '.html';
}

function showContact() {
    const contactInfo = document.getElementById('contact-info');
    contactInfo.innerHTML = `
        <p>Please contact us at: <a href="mailto:atomic@example.com">atomicwatches123@gmail.com</a></p>
    `;
    contactInfo.style.display = 'block';
}
