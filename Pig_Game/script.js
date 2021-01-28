

var scores, roundScore, activePlayer;
var dice;



scores = [0, 0];
roundScore = 0;
activePlayer = 0;


document.querySelector('.dice').style.display = 'none';
//document.querySelector('#current--' + activePlayer).textContent = dice ;
document.getElementById('score--0').textContent = scores[0];
document.getElementById('score--1').textContent = scores[1];
document.getElementById('current--0').textContent = '0';
document.getElementById('current--1').textContent = '0';

document.querySelector('.btn--new').addEventListener('click', function(){
document.querySelector('.dice').style.display = 'block';

document.querySelector('.btn--roll').addEventListener('click', function(){

var dice = Math.floor(Math.random() * 6) + 1;
var diceDOM = document.querySelector('.dice');
diceDOM.src = 'dice-' + dice + '.png';
if(dice > 1){
  roundScore += dice;
  document.getElementById('current--' + activePlayer).textContent = roundScore;
  document.querySelector('.dice').style.display = 'block';


} else {

  document.getElementById('current--' + activePlayer).textContent = 0;
  document.querySelector('.player--' + activePlayer).classList.remove('player--active');
  activePlayer === 0? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player--' + activePlayer).classList.add('player--active');
  document.querySelector('.dice').style.display = 'none';
}
});
});
document.querySelector('.btn--hold').addEventListener('click', function(){
  scores[activePlayer] += roundScore;
  document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 100){
      document.title = 'Player ' + activePlayer + ' won';
      alert('Player ' + activePlayer + ' won');
      document.querySelector('.dice').style.display = 'none';
      //document.querySelector('#current--' + activePlayer).textContent = dice ;
      location.reload();

  }
  document.getElementById('current--' + activePlayer).textContent = 0;
  document.querySelector('.player--' + activePlayer).classList.remove('player--active');
  activePlayer === 0? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.querySelector('.player--' + activePlayer).classList.add('player--active');
  document.querySelector('.dice').style.display = 'none';

});
