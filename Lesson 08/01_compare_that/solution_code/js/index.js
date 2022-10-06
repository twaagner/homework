

 document.querySelector('#submit').onclick = function(e) {
   e.preventDefault();
    let comparison;
    let a = Number(document.querySelector('#a').value);
    let b = Number(document.querySelector('#b').value);

    if (a < b) {
      comparison = '<';
    } else if (a > b) {
      comparison = '>';
    } else if (a === b) {
      comparison = '==';
    } else{
      comparison = 'N/A';
    }

    document.querySelector('#comparison').innerText = comparison;
  };


  
  
  
  function hail(){
    console.log("Hail!");
    console.log("For I have been clicked upon!");
  }

let garfield = document.getElementById("comparison");

garfield.addEventListener('click',hail);

let comicPets = {
  "garfield":{
    "type":"cat",
    "color":"orange",
    "weight":"Fat Beyond All Belief"
  },
  "odie":{
    "type":"dog",
    "color":"white with spot",
    "weight":"healthy"
  },
  "slyvester":{
    "type":"cat"
  }
};

console.log(comicPets.garfield.weight);