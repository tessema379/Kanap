document.addEventListener("DOMContentLoaded", function () {

    //-------------------fonction principale-------------------//
    //--------------------------------------------------------//
    async function main() {

        let localStorageArray = getLocalStorage();
        console.log(localStorageArray);
    }

    main();


    function getLocalStorage() {
        let getLocalStorage = [];

        for (let i = 0; i < localStorage.length; i++) {
            getLocalStorage[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
        }

        return getLocalStorage;

    }


})

