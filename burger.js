var burgerPrikazi = document.getElementById('burger');
var navNavigacija = document.getElementById('navigacija');


function toggle() {
    console.log(navNavigacija.style.display);



    if (navNavigacija.style.display == "none") {
        navNavigacija.style.display = "block";
    }
    else {
        navNavigacija.style.display = "none";
    }


}


burgerPrikazi.addEventListener('click', toggle);