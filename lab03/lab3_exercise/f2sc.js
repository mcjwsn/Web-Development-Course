function fetchProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(0, 30);  
            let originalProducts = [...products]; 

            const tableBody = document.querySelector('#productsTable tbody');
            const szukaj = document.getElementById('szukaj');
            const sortSelect = document.getElementById('sortSelect');

            function renderTable(productsToRender) {
                tableBody.innerHTML = ''; 

                productsToRender.forEach(product => {
                    const row = document.createElement('tr');

                    const cellImage = document.createElement('td');
                    const image = document.createElement('img');
                    image.src = product.thumbnail;
                    image.alt = product.title;
                    image.style.width = '100px';
                    cellImage.appendChild(image);
                    row.appendChild(cellImage);

                    const cellTitle = document.createElement('td');
                    cellTitle.textContent = product.title;
                    row.appendChild(cellTitle);

                    const cellDescription = document.createElement('td');
                    cellDescription.textContent = product.description;
                    row.appendChild(cellDescription);

                    tableBody.appendChild(row);
                });
            }

            // Funkcja do sortowania
            function sortProducts(productsToSort) {
                const sortOrder = sortSelect.value;
                if (sortOrder === 'a') {
                    return productsToSort.sort((a, b) => a.title.localeCompare(b.title));
                } else if (sortOrder === 'd') {
                    return productsToSort.sort((a, b) => b.title.localeCompare(a.title));
                } else if (sortOrder === 'o') {
                    return [...productsToSort]; 
                }
                return productsToSort;
            }

            // Funkcja łącząca filtrowanie, sortowanie i renderowanie
            function applySortAndRender() {
                let productsToRender = [...originalProducts];
                const searchTerm = szukaj.value.toLowerCase();
                if (searchTerm) {
                    productsToRender = productsToRender.filter(product =>
                        product.title.toLowerCase().includes(searchTerm) ||
                        product.description.toLowerCase().includes(searchTerm)
                    );
                }

                const sortedProducts = sortProducts(productsToRender);
                renderTable(sortedProducts); 
            }

            applySortAndRender();
            szukaj.addEventListener('input', applySortAndRender);
            sortSelect.addEventListener('change', applySortAndRender);
        });}
fetchProducts();