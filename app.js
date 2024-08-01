document.addEventListener('DOMContentLoaded', () => {
    fetch('get_products.php')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');
            data.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
                productList.appendChild(productDiv);
            });
        })
        .catch(error => console.error('Error:', error));
});
