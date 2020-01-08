let url = 'http://134.209.138.34/items';

fetch(url)
    .then(response => response.json() )
    .then(items => {
        let html = '<h1>Недвижимость</h1>';
        html += '<ul class="realty-list">';
        items.forEach(item => {
            html += `
                <li>
                    <a href="#"><img src="${item.previewImage}" width="auto" /></a>
                    <div>
                        <a href="#">${item.title}</a>
                        <p>ID: ${item.id}</p>
                        <p>Адрес: ${item.address}</p>
                        <p>Цена: ${item.price}</p>
                    <div>
                </li>
            `;
        });
        html += '</ul>';

        document.querySelector('.main-page').innerHTML = html;
    })
    .catch(error => console.log(error) )