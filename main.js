//-------------toggle icon navbar------------------
let menuIcon = document.querySelector(`#menu-icon`);
let navbar = document.querySelector(`.navbar`);

menuIcon.onclick = () => {
    menuIcon.classList.toggle(`fa-xmark`)
    navbar.classList.toggle(`active`)
    
}
//-------------scroll section active link------------------

let section =document.querySelectorAll(`section`);
let navLinks = document.querySelectorAll(`header nav a`);

window.onscroll = () => {
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute(`id`);

        if(top >=offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove(`active`);
                document.querySelector(`header nav a[href*=` + id + `]`).classList.add(`active`);
            });
        }

    });
    //-------------sticky navbar------------------

    let header = document.querySelector(`header`);
    header.classList.toggle(`sticky`,window.scrollY >100);

    //-------------remove toggle icon and navbar------------------

    menuIcon.classList.remove(`fa-xmark`);
    navbar.classList.remove(`active`);

        //-------------scroll reveal------------------

        ScrollReveal({
            distance:`80px`,
            duration:2000,
            delay:200,
         });
         ScrollReveal().reveal(`.home-content,heading`,{origin:`top`});
         ScrollReveal().reveal(`.home-img, .services-container,.portfolio-box,.contact`,{origin:`buttom`});
         ScrollReveal().reveal(`.home-contact h1, .about-img`,{origin:`left`});
         ScrollReveal().reveal(`.home-contact p, .about-content`,{origin:`right`});

         
 //-------------typed js  -----------------------------

 const typed = new Typed(`.multiple-text`,  {
    Strings:[`Frontend Developer`, `Web Designer`, `Youtuber`],
    typespeed:70,
    backspeed:70,
    backDelay:1000,
    loop:true,

});
    }



// //-------------toggle icon navbar------------------
// let menuIcon = document.querySelector(`#menu-icon`);
// let navbar = document.querySelector(`.navbar`);

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle(`fa-xmark`);
//     navbar.classList.toggle(`active`);
// };

// //-------------scroll section active link------------------

// let sections = document.querySelectorAll(`section`); // Correct variable name
// let navLinks = document.querySelectorAll(`header nav a`);

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute(`id`);

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(link => { // Use `link` instead of `links`
//                 link.classList.remove(`active`);
//                 document.querySelector(`header nav a[href*=${id}]`).classList.add(`active`);
//             });
//         }
//     });

//     //-------------sticky navbar------------------

//     let header = document.querySelector(`header`);
//     header.classList.toggle(`sticky`, window.scrollY > 100);

//     //-------------remove toggle icon and navbar------------------

//     menuIcon.classList.remove(`fa-xmark`);
//     navbar.classList.remove(`active`);
// };

// //-------------scroll reveal------------------

// ScrollReveal({
//     distance: `80px`,
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal(`.home-content, .heading`, { origin: `top` });
// ScrollReveal().reveal(`.home-img, .services-container, .portfolio-box, .contact`, { origin: `bottom` });
// ScrollReveal().reveal(`.home-contact h1, .about-img`, { origin: `left` });
// ScrollReveal().reveal(`.home-contact p, .about-content`, { origin: `right` });

// //-------------typed js-----------------------------

// const typed = new Typed(`.multiple-text`, { // Added a missing comma
//     strings: [`Frontend Developer`, `Web Designer`, `Youtuber`], // Fixed typo (Strings -> strings)
//     typeSpeed: 70, // Fixed typo (typespeed -> typeSpeed)
//     backSpeed: 70, // Fixed typo (backspeed -> backSpeed)
//     backDelay: 1000,
//     loop: true,
// });

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from reloading the page

    const form = e.target;
    const formData = new FormData(form);

    fetch("process_form.php", {
        method: "POST",
        body: formData,
    })
        .then((response) => response.text())
        .then((data) => {
            // Show a success message
            document.getElementById("responseMessage").innerText = "Your message has been sent successfully!";
            // Optionally clear the form
            form.reset();
        })
        .catch((error) => {
            // Show an error message
            document.getElementById("responseMessage").innerText = "There was an error sending your message.";
            console.error("Error:", error);
        });
});



