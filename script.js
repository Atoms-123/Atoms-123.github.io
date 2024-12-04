function search() {
  document.getElementById('search-results').innerHTML = `
    <div class="search-options">
      <button onclick="showProducts('smartwatches')">Smartwatch</button>
      <button onclick="showProducts('earbuds')">Earbuds</button>
    </div>
  `;
}

function showProducts(category) {
  let products = {
    smartwatches: ['ATOM 1', 'ATOM Ultra', 'ATOM Pro'],
    earbuds: ['Coming Soon']
  };

  let productHtml = products[category].map(product => `
    <div class="product">${product}</div>
  `).join('');

  document.getElementById('search-results').innerHTML = `
    <div class="product-list">${productHtml}</div>
    <p class="coming-soon-message">We are very sorry but it is coming soon!</p>
  `;
}
