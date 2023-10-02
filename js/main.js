
let paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

let estilosBody = getComputedStyle(document.body);
let backgroundColorBody = estilosBody.backgroundColor;
for (let p of ps){
p.style.backgroundColor = backgroundColorBody;
p.style.color = 'white';


}
