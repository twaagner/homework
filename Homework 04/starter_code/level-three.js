/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// retrieve data increments and then add 10 pts when any ball is clicked///

///////////////  retrieving data increments //////////////////////

      // let score = getAttribute('data-increment');

      // score += parseInt(scoreAdd)



// arenaEl.addEventListener('click',function(clickBall){
document.querySelector('.js-arena').addEventListener('click', function(clickBall) {
    if ( clickBall.target.classList.contains('js-ball') ) {console.log(clickBall.target.getAttribute('data-increment'))

    
    
    // parseInt() - take string and turn to number // 

    // += adds value of the right operator to the variable, in our case, the score


      score += parseInt(clickBall.target.dataset.increment);
      // score += 5, 10, or 20 depending on which balll is clicked
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else {
        declareWinner();
      }
    }
  })

function declareWinner(){
    document.body.classList.add('level-winner');
  }



