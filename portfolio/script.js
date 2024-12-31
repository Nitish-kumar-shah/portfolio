let seeBtn = document.querySelector('.js-see');
let img1 = document.querySelector('.image1');
let img2 = document.querySelector('.image2');

// Toggle images on button click
// seeBtn.addEventListener("click", function() {
//     if (img1.style.display === "block") {
//         img1.style.display = "none";
//         img2.style.display = "block";
//     } else {
//         img1.style.display = "block";
//         img2.style.display = "none";
//     }
// });

// Show image2 on hover over the button
seeBtn.addEventListener("mouseover", function() {
    img1.style.display = "none";
    img2.style.display = "block";
});

// Revert to image1 when not hovering over the button
seeBtn.addEventListener("mouseout", function() {
    img1.style.display = "block";
    img2.style.display = "none";
});

//side bar
function ShowSideBar() {
    const bar = document.querySelector('.side-bar');
    bar.style.display = 'flex';
    bar.style.transition = '1s ease-out';
}

function hideBar() {
    const hide = document.querySelector('.side-bar');
    hide.style.display = 'none';
}

let contactBtn = document.querySelector('.contact');
contactBtn.addEventListener("mouseover", function() {
    contactBtn.innerHTML = 'click me';
})
contactBtn.addEventListener("mouseout", function() {
    contactBtn.innerHTML = 'contact me!';
});


// let contactbtn = document.querySelector('.js-contact');
// let sidebar = document.querySelector('.side-bar');
// let isMoved = false;

// contactBtn.addEventListener("click",function() {
//     if(isMoved) {
//         sidebar.style.transform = "translateX(0)";
//     } else {
//         sidebar.style.transform = "translateX(500px)";
//     }
//     isMoved = !isMoved;
// });
