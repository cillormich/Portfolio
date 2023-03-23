// Click Button Function For Other Projects of Portfolio Page Starts Here

const button = document.querySelector("#btn");
const BtnOn = document.querySelector(".otherprojects-containter");
const projectHeight = document.querySelector(".portfolio-container");

button.addEventListener('click', () => {
  button.classList.toggle("active")
  BtnOn.classList.toggle("on");
  projectHeight.classList.toggle("extend");
})

// Click Button Function For Other Projects of Portfolio Page Ends Here



// Hamburger Menu Function Starts Here

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

// Hamburger Menu Function Ends Here




// let portfolioContainer = document.querySelector('.portfolio-container');
// let authorwebsite = document.querySelector('#authorwebsite');
// let clone = authorwebsite.cloneNode(true);
// document.body(portfolioContainer).appendChild(clone);

// clone.id = 'authorwebsite2';
// clone.classList.add ('author-website-2');
// authorwebsite.after(clone);

// let blocksA = document.querySelector('#blocks-A');
// let clone = blocksA.cloneNode(true);
// clone.id = 'blocks-A2';
// clone.classList.add ('blocks-1A');
// blocksA.after(clone);

// let styleA = document.querySelector('#blocks-A2');
// styleA.style.backgroundColor = 'whitesmoke'

// let blocksB = document.querySelector('#blocks-A')
// let cloneB = blocksB.cloneNode(true);
// cloneB.id = 'blocks-A3';
// cloneB.classList.add ('block-1B');
// blocksB.after(cloneB);



// let authorwebsite = document.getElementById('authorwebsite'); 
// authorwebsite.style.backgroundSize = 'cover';
// authorwebsite.style.cursor = 'pointer';


// authorwebsite.addEventListener('mouseover', ()=>{ 
//     authorwebsite.style.boxShadow = '0px 0px 10px 2px black';
// })

// authorwebsite.addEventListener('mouseout', ()=>{ 
//     authorwebsite.style.boxShadow = '';
// })


