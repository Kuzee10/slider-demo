
var i = 0; //current image index

var img = ["img/kuzee (1).jpg", "img/kuzee (2).jpg", "img/kuzee (3).jpg", "img/kuzee (4).jpg",];

var prev = document.querySelector("#prev");

var next = document.querySelector("#next");

var imageView = document.querySelector(".slider img");

next.addEventListener("click", function(){
    i++;
    if (i >= img.length){
        i = 0;
    }
    imageView.src = img[i];
    imageView.alt = img[i];
});


prev.addEventListener("click", function(){
    i--;
    if ( i < 0){
     i = img.length-1;
    }

    imageView.src = img[i];
    imageView.alt = img[i];
});
