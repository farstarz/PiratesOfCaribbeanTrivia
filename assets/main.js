console.log("anything");
$(document).ready(function(){
  // $("#questions").html("testing");
  var i = 0;
  var trivia = {
    // store questions in an array
    questions: ["Q.1 Jack Sparrow...*ahem*...Captain Jack Sparrow is first seen entering Port Royal in POTC1, on a small sinking boat. Who did he steal this boat from?",
                "Q.2 Where is Will Turner first seen in the first POTC?",
                "Q.3 Whose line is this \"Ello Popet\"?",
                "Q.4 What is the main theme song for the POTC movies called?",
                "Q.5 What are the movies based on?",
                "Q.6 What port did Captain Jack Sparrow sack without firing a single shot?",
                "Q.7 To find Captain Jack's Rum on Rum Island (the island he was marooned on), he had to knock on a certain tree to find out if it was the tree he needed and then take how many steps to get to his rum stash?",
                "Q.8 When Elizabeth was walking the plank in POTC1, who said \"too long!\" and stomped on the edge of the plank so she fell off?",
                "Q.9 Who plays Ragetti?",
                "Q.10 \"Aye! The compass doesn't point north! But we're not trying to find north are we?\" Who says this?"],

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
      // document.getElementById("questions").innerHTML = "Paragraph changed!";
      $("#questions").html("<h2>"+this.questions[i]+"</h2>");
      console.log(i);
      $("#answers").append("<input type=\"radio\" name=\"option\">"+this.answers1[i]+"</input><input type=\"radio\" name=\"option\">"+this.answers2[i]+"</input><input type=\"radio\" name=\"option\">"+this.answers3[i]+"</input><input type=\"radio\" name=\"option\">"+this.answers4[i]+"</input><input type=\"radio\" name=\"option\">"+this.answers5[i]+"</input>");
      $("#command").html("<button class=\"command\">Next Question</button>");
      // this.getChoice();
      this.nextQuestion();
        
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
          console.log(i);
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

  };
  console.log("2");
  trivia.updateQuestion();
  console.log("3");
  // $("#questions").html("<h4>"+trivia.questions[i]+"</h4>");
  console.log("method ran 2");
});

