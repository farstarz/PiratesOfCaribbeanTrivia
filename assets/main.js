$(document).ready(function(){
  // question index
  var index= 0;
  var trivia = {
    // store questions in an array
    questions: ["Q.1 Jack Sparrow...*ahem*...Captain Jack Sparrow is first seen entering Port Royal in POTC1, on a small sinking boat. Who did he steal trivia boat from?",
                "Q.2 Where is Will Turner first seen in the first POTC?",
                "Q.3 Whose line is trivia \"Ello Popet\"?",
                "Q.4 What is the main theme song for the POTC movies called?",
                "Q.5 What are the movies based on?",
                "Q.6 What port did Captain Jack Sparrow sack without firing a single shot?",
                "Q.7 To find Captain Jack's Rum on Rum Island (the island he was marooned on), he had to knock on a certain tree to find out if it was the tree he needed and then take how many steps to get to his rum stash?",
                "Q.8 When Elizabeth was walking the plank in POTC1, who said \"too long!\" and stomped on the edge of the plank so she fell off?",
                "Q.9 Who plays Ragetti?",
                "Q.10 \"Aye! The compass doesn't point north! But we're not trying to find north are we?\" Who says trivia?"],

    // store answers in an array
    answers1: ["Anna-Maria","Kissing Elizabeth in his workshop.","Bo'sun","Captain Jack","A book","Port Mason","3","Captain Barbossa","Mackenzie Crook","One of the Dauntless crew."],
    answers2: ["Governor Swann","Fighting Jack in Tortuga.","Pintel","Pirates of the Caribbean","A true story of a pirate","Port Coleen","7","Pintel","Hayden Malten","Commodore Norrington"],
    answers3: ["Giselle","Entering his workshop.","Captain Barbossa","He's a Pirate","A video game.","Tortuga","4","Bo'sun","Nicholas Felton","Joshamee Gibbs"],
    answers4: ["Will Turner","Floating on a platform of wood in the sea.","Captain Jack Sparrow","Pirate's Life","An old sea tale","Nassau Port","5","Ragetti","Julian McDermott","Will Turner"],
    answers5: ["Lord Cutler Beckett","Drinking with Gibbs at a bar.","Ragetti","Klaus Badelt","A ride at Disneyland.","Port Royal","6","Captain Jack","Paul Sternyard","Captain Jack Sparrow"],
    // user choice array
    userChoice: [],
    // display question
    updateQuestion: function(){
      console.log("updateQuestion Ran:");
      $("#questions").html("<h2>"+trivia.questions[index]+"</h2>");
      $("#answers").html("<input type=\"radio\" name=\"question"+index+"\" value=\"1\">"+trivia.answers1[index]+"</input><input type=\"radio\" name=\"question"+index+"\" value=\"2\">"+trivia.answers2[index]+"</input><input type=\"radio\" name=\"question"+index+"\" value=\"3\">"+trivia.answers3[index]+"</input><input type=\"radio\" name=\"question"+index+"\" value=\"4\">"+trivia.answers4[index]+"</input><input type=\"radio\" name=\"question"+index+"\" value=\"5\">"+trivia.answers5[index]+"</input>");
      // index = index +1;
      // trivia.nextQuestion();
          
      },
    // store answer to a variable
    getChoice: function(){
      trivia.userChoice[index-1] = $("input[name=\"question"+(index-1)+"\"]:checked").val();
      console.log("getChoice ran");
    },
    // next question
    nextQuestion: function(){
      console.log("nextQuestion Ran:");
      // if(index<9){
        $(".command").html("<h2 id=\"NextQ\">"+"Next Question</h2>");
        // .on("click", function(){
        //   trivia.getChoice();
        //   trivia.updateQuestion();
        // });  
      // }else{
        $(".command").html("<h2 id=\"ShowR\">"+"Show Result</h2>");
        // .on("click", function(){
        //   console.log(index);
        //   trivia.showResult();
        // });
      // };
    },
    // show result
    showResult: function(){
      $("#questions").empty();
      trivia.userChoice.forEach(element => {
        $("#questions").append("<h3>Option "+element+"</h3>");  
      });
      $("#answers").empty();
      $(".command").html("<h2 id=\"ResetQ\">"+"Reset Quiz").on("click",function(){
        // trivia.reset();
      });
      // $("#questions").html("<h3>Option "+trivia.userChoice+"</h3>");

    },
    reset: function(){
      console.log("reset ran");
      index = 0;
      trivia.userChoice=[];
      trivia.updateQuestion();
    } 
  };
  // trivia.updateQuestion();
  //alternative method
  for(index = 0;index<8;index++){
    trivia.updateQuestion();
    trivia.getChoice();
    trivia.nextQuestion();
  }
  if(index===9){
    trivia.updateQuestion();
    trivia.getChoice();
    trivia.showResult();
    trivia.reset();
  }
});

