'use strict';

loadRealEstateList();

function loadRealEstateList() {
    let url = 'http://134.209.138.34/items';

    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let realtyList = document.querySelector('.realty__list');
        let html = '';
        data.forEach(item => {
            let detailsUrl = `details.html?id=${item.id}`;
            html += `
                <li class="realty__item  realty-item">
                    <a href="${detailsUrl}" class="realty-item__photo"><img src="${item.previewImage}" width="auto" /></a>
                    <div class="realty-item__descr">
                        <a href="${detailsUrl}" class="realty-item__link">
                            <h2 class="realty-item__title">${item.title}</h2>
                        </a>
                        <div class="realty-item__id">ID ${item.id}</div>
                        <div class="realty-item__addr">${item.address}</div>
                        <div class="realty-item__price">${item.price}</div>
                    </div>
                </li>
            `;
        });
        realtyList.innerHTML = html;
    })
    .catch(error => console.log(error) )
}

