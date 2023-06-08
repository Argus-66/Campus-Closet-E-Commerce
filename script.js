//NAV

/* JavaScript for Navigation Toggle */
function toggleNav() {
    var navMid = document.querySelector('.nav-mid');
    navMid.classList.toggle('show');
}

// Event listener for navigation toggle button
var navToggleBtn = document.getElementById('nav-toggle');
navToggleBtn.addEventListener('click', toggleNav);




// Main Body

// Function to handle the responsive behavior
function handleResponsiveLayout() {
    const textHeading = document.querySelector('.text-box h1');
    const paragraph = document.querySelector('.container p');

    // Adjust font size for smaller screens
    if (window.innerWidth <= 900) {
        textHeading.style.fontSize = '64px';
        paragraph.style.fontSize = '32px';
    } else {
        // Reset font size for larger screens
        textHeading.style.fontSize = '100px';
        paragraph.style.fontSize = '48px';
    }
}

// Call the function initially
handleResponsiveLayout();

// Event listener for window resize
window.addEventListener('resize', handleResponsiveLayout);




// FLEX BOX

/* JavaScript for Box Hover Effect */
var boxes = document.querySelectorAll('.box');

// Attach event listeners to each box
boxes.forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        this.classList.add('box-hover');
    });

    box.addEventListener('mouseleave', function () {
        this.classList.remove('box-hover');
    });
});


// Event listener for box hover effect
var boxes = document.querySelectorAll('.box');

// Attach event listeners to each box
boxes.forEach(function (box) {
    box.addEventListener('mouseenter', function () {
        this.classList.add('box-hover');
    });

    box.addEventListener('mouseleave', function () {
        this.classList.remove('box-hover');
    });
});


//IMAGES