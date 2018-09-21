$(document).ready(function(){
  var i = 0;
  var trivia = {
    // store questions in an array
    questions: ["Jack Sparrow...*ahem*...Captain Jack Sparrow is first seen entering Port Royal in POTC1, on a small sinking boat. Who did he steal this boat from?",
                    "Where is Will Turner first seen in the first POTC?",
                    "Whose line is this \"Ello Popet\"?",
                    "What is the main theme song for the POTC movies called?",
                    "What are the movies based on?",
                    "What port did Captain Jack Sparrow sack without firing a single shot?",
                    "To find Captain Jack's Rum on Rum Island (the island he was marooned on), he had to knock on a certain tree to find out if it was the tree he needed and then take how many steps to get to his rum stash?",
                    "When Elizabeth was walking the plank in POTC1, who said \"too long!\" and stomped on the edge of the plank so she fell off?",
                    "Who plays Ragetti?",
                    "\"Aye! The compass doesn't point north! But we're not trying to find north are we?\" Who says this?"],

    // store answers in an array
    answers: ["Anna-Maria","Kissing Elizabeth in his workshop.","Bo'sun","Captain Jack","A book","Port Mason","3","Captain Barbossa","Mackenzie Crook","One of the Dauntless crew."]
                  ["Governor Swann","Fighting Jack in Tortuga.","Pintel","Pirates of the Caribbean","A true story of a pirate","Port Coleen","7","Pintel","Hayden Malten","Commodore Norrington"]
                  ["Giselle","Entering his workshop.","Captain Barbossa","He's a Pirate","A video game.","Tortuga","4","Bo'sun","Nicholas Felton","Joshamee Gibbs"]
                  ["Will Turner","Floating on a platform of wood in the sea.","Captain Jack Sparrow","Pirate's Life","An old sea tale","Nassau Port","5","Ragetti","Julian McDermott","Will Turner"]
                  ["Lord Cutler Beckett","Drinking with Gibbs at a bar.","Ragetti","Klaus Badelt","A ride at Disneyland.","Port Royal","6","Captain Jack","Paul Sternyard","Captain Jack Sparrow"],
    // user choice array
    userChoice: [],
    // display question
    updateQuestion: function(){
      $("#questions").html("<h4>"+this.questions[i]+"</h4>");
      $("#answers").html("<h4>"+this.answers[i]+"</h4>");
    },
    // store answer to a variable
    getChoice: function(){
      userChoice[i] = $("input:radio[name=option]:checked").val();
    },
    // next question
    nextQuestion: function(){
      if(i<9){
        $("#command").on("click", function(){
          i++;
          updateQuestion();
          getChoice();
        });
      }else{
        $("#command").on("click",function(){
          getChoice();
          showResult();
        });
      }  
    },
    // show result
    showResult: function(){
      $("#questions").html("<h3>show results</h3>");
    } 

  }
  trivia.updateQuestion();
  
});

