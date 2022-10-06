
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
     // Add comparison logic
     
     console.log(a);
     console.log(b);

    
    //  are they not numbers

    if(isNaN(a)|| isNaN(b)){
      comparison = "N/A";

    } else if (a > b){         // is a more than b

      comparison +'>';
    }
     else if(a < b){            // is b more than a

      comparison = "<";
     }
     
      else{ 
        comparison = "=";          // is a equal to be
     }                  
 
     document.querySelector('#comparison').innerText = comparison;
   };
 