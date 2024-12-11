function fetchProducts() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(0, 30);  
            const tableBody = document.querySelector('#itemy tbody'); 
            products.forEach(product => {
                //  wiersz tabeli
                const wierz = document.createElement('tr');

                // obraz
                const komimage = document.createElement('td');
                const image = document.createElement('img');
                image.src = product.thumbnail; 
                image.alt = product.title;
                komimage.appendChild(image);
                wierz.appendChild(komimage);

                //tytuł
                const komTitle = document.createElement('td');
                komTitle.textContent = product.title;
                wierz.appendChild(komTitle);

                // opis
                const komDescription = document.createElement('td');
                komDescription.textContent = product.description;
                wierz.appendChild(komDescription);

                // dodanie wiersza
                tableBody.appendChild(wierz);
            });
        })
}
fetchProducts();