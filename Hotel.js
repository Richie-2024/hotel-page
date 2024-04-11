
var i = 0;
var images = [];
var time = 3000; // Change image every 3 seconds

// Image list
images[0] = "../images/hotel view.jpeg";
images[1] = "../images/Pearl 3.webp",
images[2]="../images/p2.webp"

function changeImg() {
    var slide = document.getElementById("slide");
    slide.style.opacity = 0; // Fade out current image
    setTimeout(function() {
        slide.style.backgroundImage = "url('" + images[i] + "')"; // Change background image
        slide.style.opacity = 1; // Fade in new image
        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
    }, 500); // Adjust timing to match transition duration
    setTimeout(changeImg, time);
}

window.onload = changeImg;