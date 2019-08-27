 //fonctionnalité 1
 var footer = document.getElementsByTagName("footer")[0];
 var i=1;
footer.addEventListener("click", function(){
	console.log('clique num ' +i);
	i++;
});
//fonctionnalité 2
let nav1 = document.getElementsByClassName("navbar-toggler")[0];
 let burger = document.getElementById("navbarHeader");
 nav1.addEventListener("click",function(){
 burger.classList.toggle("collapse");
    });

 //fonctionnalité 3

 let text = document.getElementsByClassName("card-text")[0];
 console.log(text);
 let edit1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
  


 edit1.addEventListener("click",function(){
 	text.style.color =" red"
 })

 //fonctionnalité 4

 let text2 = document.getElementsByClassName("card-text")[1];
 let edit2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
 edit2.addEventListener("click",function(){
 	if (text2.style.color == " green ")
   {
 		text2.style.color = " ";
 	} 
 	else 
 	{
 		text2.style.color = "green";
 	}
 });
  // Fonctionnalité 5

var navbar = document.getElementsByTagName('header')[0];
var isBootstrap = true;

var destroyBootstrap = function() {
  if (isBootstrap) {
    document.getElementsByTagName('link')[0].remove()
    isBootstrap = false;
  } else {
    let head = document.getElementsByTagName('head')[0];
    let bootstrap = document.createElement('link');
    bootstrap.rel = "stylesheet";
    bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    head.appendChild(bootstrap);
    isBootstrap = true;
  }
}

navbar.addEventListener("dblclick", destroyBootstrap);

// Fonctionnalité 6

var viewButtons = document.getElementsByClassName('btn-success');
var cardImages = document.getElementsByClassName('card-img-top');
var cardTexts = document.getElementsByClassName('card-text');

var isReduced = Array(viewButtons.length).fill(false);

var reduceCard = function(i) {
  let img = cardImages[i];
  let text = cardTexts[i];
  if (isReduced[i]) {
    isReduced[i] = false;
    img.style.height = "100%";
    img.style.width = "100%";
    text.style.fontSize = "";
  } else {
    isReduced[i] = true;
    img.style.height = "20%";
    img.style.width = "20%";
    text.style.fontSize = "0px";
  }
};

for (let i = 0; i<viewButtons.length ; i++) {
  viewButtons[i].addEventListener("mouseover",function() {
    reduceCard(i);
  });
}

// Fonctionnalité 7
var buttonScrollRight = document.getElementsByClassName('btn-secondary')[0];

var clickScrollRight = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.insertBefore(album.lastElementChild, album.firstElementChild);
}

buttonScrollRight.addEventListener("click", clickScrollRight);

// Fonctionnalité 8

var buttonScrollLeft = document.getElementsByClassName('btn-primary')[0];

var clickScrollLeft = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.appendChild(album.firstElementChild);
}

buttonScrollLeft.addEventListener("click", clickScrollLeft);