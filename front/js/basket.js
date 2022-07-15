 // 08.07.2022 Récupération (TG - Tuto ;-d)
 function saveBasket(product) {
    localStorage.setItem('id', JSON.stringify(product)); /* Sérialisation */
}


// 08.07.2022 Récupération (TG - Tuto ;-d)
function getBasket() {
    let product = localStorage.getItem("product");
    if (product == null) {
        return [];
    } else {
        return JSON.parse(product);
    }
}

// 08.07.2022 Suppression (TG - Tuto ;-d)
function addBasket(product) {
    // // let product = getBasket();
    let productChoosen = product.find(product.id);
    if (productChoosen != undefined) {
        productChoosen.qty++;
    } else {
        product.qty = 1;
        basket.push(product);
    }
    saveBasket(product);
}

// 08.07.2022 Remove (TG - Tuto ;-d)
function removeFromBasket(product) {
    // let product = getBasket();
    product = product.filter(product.id);
    saveBasket(product);

}

// 08.07.2022 Remove (TG - Tuto ;-d)
function changeQty(product, qty) {
    // let product = getBasket();
    let productChoosen = product.find(product.id);
    if (productChoosen != undefined) {
        productChoosen.qty += qty;
        if (productChoosen.qty <= 0) {
            removeFromBasket(productChoosen);
        } else {
            saveBasket(product);
        }
    }
}

// 08.07.2022 Calcul Number of Product (TG - Tuto ;-d)
function getNumberProduct() {
    let product = getBasket();
    let number = 0;
    for (let product of products) {
        number += product.qty;
    }
    return number;
}

// 08.07.2022 Calcul Number of Product (TG - Tuto ;-d)
function getTotalPrice() {
    let product = getBasket();
    let total = 0;
    for (let product of products) {
        total += product.qty * product.price;
    }
    return total;
}
