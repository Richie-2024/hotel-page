  var imageUrls = [
        '../images/food.jpeg',
        '../images/hotel view.jpeg',
        '../images/p1.webp',
         '../images/food.jpeg'
        
       
    ];

    // Create image elements and add them to the page
    var images = [];
    for (var i = 0; i < imageUrls.length; i++) {
        var img = new Image();
        img.src = imageUrls[i];
        img.classList.add('moving-image');
        document.body.appendChild(img); // Append the image to the body
        images.push(img); // Push the image to the images array
    }

    // Set initial position and speed for each image
    var currentPositions = [];
    var speeds = [];
    var numImages = images.length;

    // Initialize positions and speeds for each image
    for (var i = 0; i < numImages; i++) {
        currentPositions[i] = 0;
        speeds[i] = 2; // Adjust speed as needed
    }

    // Function to move the images horizontally
    function moveImages() {
        for (var i = 0; i < numImages; i++) {
            currentPositions[i] += speeds[i];
            images[i].style.left = currentPositions[i] + 'px';

            // Reset position when image goes off-screen
            if (currentPositions[i] > window.innerWidth) {
                currentPositions[i] = -images[i].width; // Reset position to the left side
            }
        }

        // Call the function recursively to create animation effect
        requestAnimationFrame(moveImages);
    }

9    // Start the animation
    moveImages();



   