let restoranlar = document.querySelector(".products-menu");

let req = new XMLHttpRequest();
req.open("GET", "https://yemak.uz/api/user/restaurant");
req.send();
req.addEventListener("readystatechange", () => {

    if (req.readyState === 4) {
        let postData = JSON.parse(req.response);
        let restaran = [...postData.data.products]

        console.log(restaran);

        restaran.forEach((restaran) => {
            console.log(restaran);

            // restoranlar.innerHTML += `
            //     <div class="restoran">
            //         <img class="product-card" src="${restaran}" alt="no photo"/>
            //         <h5>${restoranlar.id}</h5>
            //     </div>`;
        });
    }
});

