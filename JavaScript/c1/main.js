const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images_filenames = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */

const alt_names = ["image of an eye", "image of lost hope", "image of flower" , "image of egypt" , "image of butter fly"];

/* Looping through images */

for (var i = 0; i < images_filenames.length; i++){
    const image = document.createElement("img");
    image.src = "images/"+images_filenames[i];
    image.alt = alt_names[i];
    thumbBar.appendChild(image);
}
thumbBar.addEventListener("click", changeLargeImage);

function changeLargeImage(e){
    displayedImage.src = e.target.src;
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener("click", darkenImage);
var darken_image = false;
function darkenImage(){
    if(darken_image){
        displayedImage.style.filter = "brightness(100%)";
        darken_image = false
    }
    else{
        displayedImage.style.filter = "brightness(50%)";
        darken_image = true
    }
}