document.addEventListener("DOMContentLoaded", function () {

    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    async function main() {
        // 07.07.2022 (MC)
        let url = new URL(window.location.href);
        let productId = url.searchParams.get("id");

        let product = await getApiInfo(productId);

        showOneProduct(product); // (TG)

        btnClick(product); // 07.07.2022 (MC)

    }

    main();


    //-------------------fonction Appel Ajax API-------------------//
    //--------------------------------------------------------//
    async function getApiInfo(productId) {
        // appel AJAX de l'api depuis le localhost (port) 3000 
        return fetch("http://localhost:3000/api/products/" + productId) // 07.07.2022 (MC)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    //-------------------fonction Display product-------------------//
    //--------------------------------------------------------//
    // 07.07.2022 (MC & TG)
    function showOneProduct(product) {
        // 07.07.2022 -> Récupérer les éléments à afficher sur la page
        let parentTitle = document.getElementsByTagName("title")[0];
        let parentImage = document.getElementsByClassName("item__img")[0];
        let parentName = document.getElementById("title");
        let parentPrice = document.getElementById("price");
        let parentDescription = document.getElementById("description");
        let parentColors = document.getElementById("colors");

        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.imageUrl);
        productImg.setAttribute("alt", product.altTxt);
        parentImage.appendChild(productImg);

        parentTitle.innerHTML = product.name;
        parentName.innerText = product.name;
        parentPrice.innerText = product.price;
        parentDescription.innerText = product.description;

        let options = product.colors;
        options.forEach(function (element) {
            parentColors.appendChild(new Option(element, element));
        });

    }

    //-------------------Initialisation Class Produit-------------------//
    //---------------------------------------------------------------------//
    // 07.07.2022 (MC)
    class ProductClass {
        constructor(id, name, color, qty) {
            this.id = id;
            this.name = name;
            this.color = color;
            this.qty = qty;
        }
    }

    // 07.07.2022 (MC)
    function btnClick(product) {

        let addToCart = document.getElementById('addToCart');

        let colorChoosen = "";
        let qtyChoosen = "";
        let qty = "";
        let colorSelection = document.getElementById('colors');
        colorSelection.addEventListener('change', (e) => {
            colorChoosen = e.target.value;
        })

        let qtySelection = document.getElementById('quantity');
        qtySelection.addEventListener('change', (e) => {
            qty = e.target.value;
        })

        addToCart.addEventListener('click', () => {

            let productLocalStorage = [];
            let oldQty = 0;

            for (let i = 0; i < localStorage.length; i++) {
                productLocalStorage[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (product._id === productLocalStorage[i].id && productLocalStorage[i].color === colorChoosen) {
                    oldQty = productLocalStorage[i].qty;
                }
            }

            qtyChoosen = parseInt(oldQty) + parseInt(qty);

            let productChoosen = new ProductClass(
                product._id,
                product.name,
                colorChoosen,
                qtyChoosen
            )
            if (colorChoosen != "" && qtyChoosen >= 1 && qtyChoosen <= 100) {
                localStorage.setItem(
                    product.name + " " + colorChoosen,
                    JSON.stringify(productChoosen)
                )
                alert('Votre produit a été enregistré au panier.')
            } else {
                alert('Veuillez renseigner une couleur et une quantité correcte.');
            }
        })













    }



});