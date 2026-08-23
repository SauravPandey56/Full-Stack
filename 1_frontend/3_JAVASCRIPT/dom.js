// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i<smallImages.length ; i++){
//     console.dir(smallImages[i]);
// }

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i<smallImages.length ; i++){
//     console.dir(smallImages[i].src);
// }

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i<smallImages.length ; i++){
//     smallImages[i].src = "assets/spiderman_img.pmg";
//     console.log (`value of image no. ${i}is changed.`);
// }

// manipulating by text

// let para = document.querySelector('p');
// para;
// console.dir(para);
// para.innertext;
// para.textContent;
// para.innerHTML;
// para.innerText = "ajffj"
// para.innerHTML = "<b>ajffj</b>"
// console.dir(para.innerHTML);

// let heading = document.querySelector("h1");
// console.dir(heading);
// heading.innerHTML=`<u>${heading.innerText}</u>`
// console.dir(heading.innerHTML);

// manipulating Attribute/

// let img = document.querySelector('img');
// console.dir(img);
// img.getAttribute('id');
// img.setAttribute('id','spidermanImg');    
// img.setAttribute('src','assets/creation_3.jpeg') 

// manipulating by style 

// let heading = document.querySelector('h1');
// heading.style;
// heading.style.color='purple';
// heading.style.color='green';
// heading.style.backgroundColor='red';

// let links = document.querySelectorAll('.box a');

// for (let i = 0 ; i<links.length ; i++){
//     links[i].style.color= "yellow"
// }

// for(links of links ){
//     links.style.color = "orange"
// }

// classList
// Object.classList

// Object.classList.add();
// Object.classList.remove();
// Object.classList.contains();
// Object.classList.toggle();

// navigation on Page [parent , child , previousElementsSibling/nextElementsSibling]

let img = document.querySelector('img');
img.previousElementSibling.style.color="green"

