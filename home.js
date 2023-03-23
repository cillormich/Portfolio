// let elem = document.querySelector('#elem1');
// let clone = elem.cloneNode(true);

// clone.id = 'elem2';
// clone.classList.add ('text-large');
// elem.after(clone);


// let bio = document.querySelector('#idBio');
// let clone = bio.cloneNode(true);

// clone.id = 'idBio2';
// clone.classList.add('cloneBio');
// bio.after(clone);


// let secondBio = document.querySelector('#idBio2 .devText >h3');
// secondBio.innerText = 'The Developer';

// let secondImage = document.querySelector('#idBio2 #dev-image');
// secondImage.src='images/author1.JPG';


// const container = document.querySelectorAll('p');
// container.forEach(para => {
//     para.innerText += 'THIS IS A NEW CHANGE'
// })


const menuIcon = document.querySelector(".menu-icon");
const navlist = document.querySelector(".navlist");
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
})

document.querySelectorAll(".nav-item").array.forEach(n => n.addEventListener("click", () => {
    menuIcon.classList.remove("active");
    navlist.classList.remove("active");
}))
