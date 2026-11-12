(() => {
  /* ---------- Data: vegetables & fruit ---------- */
  const products = [
    { id: 'green-apple', name: 'Green Apple', category: 'fruit', image: 'images/Green Apple.png', price: 14.00, oldPrice: 20.00, sale: 'Sale 50%', rating: 4, lists: ['popular', 'featured'] },
    { id: 'fresh-indian-malta', name: 'Fresh Indian Malta', category: 'fruit', image: 'images/Fresh Indian Malta.png', price: 20.00, rating: 4, lists: ['popular', 'featured'] },
    { id: 'chinese-cabbage', name: 'Chinese cabbage', category: 'vegetable', image: 'images/Chinese cabbage.png', price: 12.00, rating: 4, lists: ['popular', 'hot', 'featured'] },
    { id: 'green-lettuce', name: 'Green Lettuce', category: 'vegetable', image: 'images/Green Lettuce.png', price: 9.00, rating: 4, lists: ['popular', 'hot', 'featured'] },
    { id: 'eggplant', name: 'Eggplant', category: 'vegetable', image: 'images/Eggplant.png', price: 34.00, rating: 4, lists: ['popular', 'hot', 'featured'] },
    { id: 'big-potatoes', name: 'Big Potatoes', category: 'vegetable', image: 'images/Big Potatoes.png', price: 20.00, rating: 4, lists: ['popular', 'hot-row'] },
    { id: 'corn', name: 'Corn', category: 'vegetable', image: 'images/Corn.png', price: 20.00, rating: 4, lists: ['popular', 'hot-row'] },
    { id: 'fresh-cauliflower', name: 'Fresh Cauliflower', category: 'vegetable', image: 'images/Fresh Cauliflower.png', price: 12.00, rating: 4, lists: ['popular', 'hot'] },
    { id: 'green-capsicum', name: 'Green Capsicum', category: 'vegetable', image: 'images/Green Capsicum.png', price: 9.00, oldPrice: 20.00, sale: 'Sale 50%', rating: 4, lists: ['popular', 'hot'] },
    { id: 'green-chili', name: 'Green Chili', category: 'vegetable', image: 'images/Green Chili.png', price: 34.00, rating: 4, lists: ['popular', 'hot'] },
    { id: 'red-chili', name: 'Red Chili', category: 'vegetable', image: 'images/Red Chili.png', price: 12.00, rating: 4, lists: ['hot-row'] },
    { id: 'red-tomatoes', name: 'Red Tomatoes', category: 'vegetable', image: 'images/Red Tomatos.png', price: 9.00, oldPrice: 20.00, sale: 'Sale 50%', rating: 4, lists: ['hot-row'] },
    { id: 'surjapur-mango', name: 'Surjapur Mango', category: 'fruit', image: 'images/Surjapur Mango.png', price: 34.00, rating: 4, lists: ['hot-row'] },
  ];

  /* ---------- Helpers ---------- */
  const money = (value) => `$${value.toFixed(2)}`;

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[char]));

  const stars = (rating) =>
    Array.from({ length: 5 }, (_, i) =>
      `<i class="fa-${i < rating ? 'solid' : 'regular'} fa-star" aria-hidden="true"></i>`
    ).join('');

  /* ---------- Rendering ---------- */
  function productCard(product) {
    const name = escapeHtml(product.name);
    const sale = product.sale
      ? `<span class="tag tag--sale product__tag">${escapeHtml(product.sale)}</span>`
      : '';
    const oldPrice = product.oldPrice ? `<del>${money(product.oldPrice)}</del>` : '';

    return `
      <article class="product">
        <div class="product__media">
          ${sale}
          <div class="product__actions">
            <button type="button" aria-label="Add ${name} to wishlist">
              <i class="fa-regular fa-heart" aria-hidden="true"></i>
            </button>
            <button type="button" aria-label="Quick view ${name}">
              <i class="fa-regular fa-eye" aria-hidden="true"></i>
            </button>
          </div>
          <img src="${escapeHtml(product.image)}" alt="${name}" loading="lazy">
        </div>
        <div class="product__body">
          <div>
            <h3 class="product__name">${name}</h3>
            <p class="product__price">${money(product.price)} ${oldPrice}</p>
          </div>
          <button class="add-btn" type="button" data-add="${product.id}" aria-label="Add ${name} to cart">
            <i class="fa-solid fa-basket-shopping" aria-hidden="true"></i>
          </button>
        </div>
        <div class="rating" role="img" aria-label="Rated ${product.rating} out of 5">
          ${stars(product.rating)}
        </div>
      </article>`;
  }

  function renderProducts() {
    document.querySelectorAll('[data-products]').forEach((container) => {
      const list = container.dataset.products;
      container.innerHTML = products
        .filter((product) => product.lists.includes(list))
        .map(productCard)
        .join('');
    });
  }

  /* ---------- Cart ---------- */
  const cart = { count: 0, total: 0 };
  const countEl = document.querySelector('[data-cart-count]');
  const totalEl = document.querySelector('[data-cart-total]');
  const bagEl = document.querySelector('.cart__bag');

  function updateCart() {
    if (countEl) countEl.textContent = cart.count;
    if (totalEl) totalEl.textContent = money(cart.total);
    if (bagEl) bagEl.setAttribute('aria-label', `Shopping cart, ${cart.count} items`);
  }

  document.addEventListener('click', (event) => {
    const button = event.target.closest('[data-add]');
    if (!button) return;

    const product = products.find((item) => item.id === button.dataset.add);
    if (!product) return;

    cart.count += 1;
    cart.total += product.price;
    updateCart();
  });

  /* ---------- Init ---------- */
  renderProducts();
  updateCart();
})();
