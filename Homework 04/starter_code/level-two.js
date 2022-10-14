 /*
////////////////////////  office hours questions    //////////////////////////

1. when .querySelector-ing, can you type in a portion of the class name and will automatically assign?
    - 'js-ball' 'js-arena'  vs html: class = "level-arena js-arena" & 'score js-score'

2. function(e) - is the (e) a changeable variable    ?
    - function(e) vs function(clickBall)

3. are .innerText and .innerHtml interchangeable in this exercise?


 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');


// everytime a ball is clicked, add 10 pts // 

arenaEl.addEventListener('click', function(clickBall){
    if (clickBall.target.classList.contains('js-ball') )
        {   score += 10;
            if (score < 100){                                 
            scoreEl.innerText = score;                      
          } else {
            declareWinner();
          }
        }
    })   


  // once score of 100 is finally reached // 
  
    function declareWinner(){
        document.body.classList.add('game-over');
    }
        