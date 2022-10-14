/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// add 10 pts when any ball is clicked///

// arenaEl.addEventListener('click',function(clickBall){
document.querySelector('.js-arena').addEventListener('click', function(e) {
    if ( e.target.classList.contains('js-ball') ) {
      score += 10;
      if ( score < 100 ) {
        scoreEl.innerText = score;
      } else {
        declareWinner();
      }
    }
  })


//   retrieving data increments //

let score = getAttribute('data-increment');

score += parseInt(scoreAdd)