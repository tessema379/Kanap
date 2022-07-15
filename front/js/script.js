document.addEventListener("DOMContentLoaded", function () {

    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    async function main() {

        let products = await getApiInfo();

        showAllProduct(products);
    }

    main();


    //-------------------fonction Appel Ajax API-------------------//
    //--------------------------------------------------------//
    async function getApiInfo() {
        // appel AJAX de l'api depuis le localhost (port) 3000 
        return fetch("http://localhost:3000/api/products/")
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            })

    }


    //-------------------fonction Display product-------------------//
    //--------------------------------------------------------//
    function showAllProduct(products) {

        for (let product of products) {

            let items = document.getElementById("items");

            items.insertAdjacentHTML(
                `beforeend`,
                `<a href="./product.html?id=${product._id}">
                    <article>
                        <img src="${product.imageUrl}" alt="${product.altTxt}">
                        <h3>${product.name}</h3>
                        <p>${product.description}</p> 
                    </article>
                </a>`
            );
        }
    }

});