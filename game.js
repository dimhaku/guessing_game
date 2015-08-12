
var trivia= [];

var Question = function(q, a, cr, ir) {
  this.q = q;
  this.a = a;
  this.cr = cr;
  this.ir = ir;
};

var Game = function(questions) {
  this.questions = questions;

  this.run = function(triviaO){
    var guess = prompt(triviaO.q);
    if (guess == triviaO.a) {
    var responseListItem=document.createElement('li');
    var responseNode=document.createTextNode(triviaO.cr);
    responseListItem.appendChild(responseNode);
    document.getElementById('response-list').appendChild(responseListItem);

    } else {
      var responseListItem=document.createElement('li');
      var responseNode=document.createTextNode(triviaO.ir);
      responseListItem.appendChild(responseNode);
      document.getElementById('response-list').appendChild(responseListItem);
}
    };

  this.start = function(){
    for (c=0; c<this.questions.length; c++){
      this.run(this.questions[c]);
    }
  };
}



trivia.push(new Question('Which capital city has the highest elevation in the world?', 'La Paz', 'Why do you know these things?', 'Google if you have to'));
trivia.push(new Question('Which country did the tango dance originate from?', 'Argentina', 'You sure do know some wierd things.', 'I now know you don\'t care about tango dancing.'));
trivia.push(new Question('What was the name of Elvis Presley\'s identical twin brother who was stillborn? Just the first name is enough.', 'Jesse', 'That\'s a rather morbid fact to know, don\'t you think?', 'Look it up and impress your friends with this fact about a dead baby!....Kinda'));

var game1 = new Game(trivia);
game1.start();
