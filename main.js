(() => {
  let myCards = document.querySelector('.cards');
  let arrayCards = [];
  let resultsArray = [];
  let counter = 0;
  let images = ['zeraora', 'pikachu', 'charizard', 'snorlax', 'crustle', 'greninja', 'eldegoss', 'lucario'];

  let clone = images.slice(0);
  let images2 = images.concat(clone)

  shuffle(images2);

 function createCard() {
  let card = document.createElement('div')
  card.classList.add('back')
  card.dataset.card = "card";
  return card
 };

 function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

 function check(className) {
  
  var x = document.getElementsByClassName("flipped");
  setTimeout(function() {

    for(var i = (x.length - 1); i >= 0; i--) {
      x[i].className = className;
    }
     console.log(x)
  },500);
}

 function win() {

  if(counter === 8) {
    let h3 = document.querySelector('.h3');
    setTimeout(() => {
      h3.textContent = "You won";
      let button = document.querySelector('.button');
      button.classList.add('button--active');
      button.addEventListener('click', () => {
        location.reload();
      })
    }, 500);
  } 
  
}

  for(i = 0; i < images2.length; i++) {
    arrayCards.push(createCard());
    arrayCards[i].dataset.view = `${images2[i]}`
    arrayCards[i].onclick = function() {
      if (this.className != 'flipped' && this.className != 'correct'){
        this.classList.add('flipped');
        this.classList.remove('back');
        this.classList.remove('reverse');
        let result = this;
        resultsArray.push(result);
        console.log(resultsArray)
        if (resultsArray.length > 1) {

          if (resultsArray[0].dataset.view == resultsArray[1].dataset.view) {
            check('correct')
            counter ++;
            win();
            resultsArray = [];
          } else {
            check('reverse')
            resultsArray = [];
          }
        };
     };
   }; 
   myCards.append(arrayCards[i])
   
  }

})()