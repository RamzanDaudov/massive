const text = 'Мама мыла раму, рама мыла мыло, мыло… кхм, дальше не помню';


const textOne = text.split('Мама');

const textTwo = textOne.join('Маша');

const  textThree = textTwo.split('мыла');

const textFive = textThree.join('ела');

const textSix = textFive.split('мыло');

const textSeven = textSix.join('кошку');


console.log(textSeven);