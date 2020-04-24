var strelicaLevo= document.getElementById('levo');
var strelicaDesno= document.getElementById('desno');
var slika= document.getElementById('karuselSlika');

var nizSlika=[ 'img/st_prevoz_01.jpg','img/st_prevoz_02.jpg','img/st_prevoz_03.jpg','img/st_prevoz_04.jpg','img/st_prevoz_05.jpg','img/st_prevoz_06.jpg','img/st_prevoz_07.jpg','img/st_prevoz_08.jpg','img/st_prevoz_09.jpg','img/st_prevoz_10.jpg','img/st_prevoz_11.jpg','img/st_prevoz_12.jpg','img/st_prevoz_13.jpg'];
var i=0;

console.log(strelicaLevo);
console.log(strelicaDesno);

function prethodna(){

    i=(i>0)? i-1 : nizSlika.length-1;

    slika.src= nizSlika[i];
}

function naredna(){
    
    if(i<nizSlika.length-1){
        i++;
    }else{
        i=0;
    }

    slika.src=nizSlika[i];
}

strelicaLevo.addEventListener('click' , prethodna);
strelicaDesno.addEventListener('click', naredna);
setInterval(naredna, 3000);


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