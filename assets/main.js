$(document).ready(function(){
  // question index
  var index= 0;
  var currentIndex;
  $(".nextQuestion").html("<h2>Next Question</h2>");
  $(".showResults").html("<h2>Show Results</h2>");
  $(".reset").html("<h2>Reset Quiz</h2>");
                    
  var trivia = {
    //score
    score: 0,
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
    //answers array
    ansOption: ["Anna-Maria", "Floating on a platform of wood in the sea.", "Bo'sun", "Pirate's Life", "A video game.", "Port Coleen", "5", "Pintel", "Mackenzie Crook", "Commodore Norrington"],
    // display question
    updateQuestion: function(){
      // console.log("updateQuestion Ran:");
      // console.log(index);
      $(".question").html("<h2>"+trivia.questions[index]+"</h2>");
      $(".answer1").html("<input type=\"radio\" name=\"question"+index+"\" value="+trivia.answers1[index]+">"+trivia.answers1[index]+"</input>");
      $(".answer2").html("<input type=\"radio\" name=\"question"+index+"\" value="+trivia.answers2[index]+">"+trivia.answers2[index]+"</input>");
      $(".answer3").html("<input type=\"radio\" name=\"question"+index+"\" value="+trivia.answers3[index]+">"+trivia.answers3[index]+"</input>");
      $(".answer4").html("<input type=\"radio\" name=\"question"+index+"\" value="+trivia.answers4[index]+">"+trivia.answers4[index]+"</input>");
      $(".answer5").html("<input type=\"radio\" name=\"question"+index+"\" value="+trivia.answers5[index]+">"+trivia.answers5[index]+"</input>");
      currentIndex = index;
      index++;
      // trivia.nextQuestion();
          
      },
    // store answer to a variable
    getChoice: function(){
      trivia.userChoice[currentIndex] = $("input[name=\"question"+(currentIndex)+"\"]:checked").val();
      // console.log("getChoice ran");
        
    },
    // next question
    nextQuestion: function(){
      // console.log("nextQuestion Ran:");
      if(index<9){
        $(".nextQuestion").show("slow");
        $(".showResults").hide("slow");
        $(".reset").hide("slow");
        
        // .on("click", function(){
          // trivia.getChoice();
          // trivia.updateQuestion();
          
      }else if(index===10){
            // $("#showR").html("<h2>Show Result</h2>").on("click", function(){
            // $("#nextQ").hide();
            // $("#showR").show();
            // $("#resetQ").hide();
            // console.log(index);
              // trivia.showResult();
            // });
          }else{
            $(".question").empty();
            $(".answer1").empty();
            $(".answer2").empty();
            $(".answer3").empty();
            $(".answer4").empty();
            $(".answer5").empty();

          };
    },
    // show result
    showResult: function(){
      currentIndex = index;
      
      $(".question").empty();
      $(".answer1").empty();
      $(".answer2").empty();
      $(".answer3").empty();
      $(".answer4").empty();
      $(".answer5").empty();
      
      for(var i =0; i<trivia.userChoice.length;i++){
          
        if(trivia.userChoice[i]===trivia.ansOption[i]){
          this.score++;
          $(".question").append("<h3>Answer "+(i+1)+": "+trivia.ansOption[i]+", your answer is correct!");
        }else{
          $(".question").append("<h3>Answer "+(i+1)+": "+trivia.ansOption[i]+", you answered: "+trivia.userChoice[i]+", your answer is wrong!");
        }
      };
      $(".answer3").html("<h2>You got "+this.score+"answers correct!");
      // $("#nextQ").show();
      // $("#showR").hide();
      // $("#resetQ").hide();
      // .on("click",function(){
      //   trivia.reset();
      // });
      // $("#questions").html("<h3>Option "+trivia.userChoice+"</h3>");

    },
    reset: function(){
      // console.log("reset ran");
      index = 0;
      trivia.userChoice=[];
      trivia.updateQuestion();
    } 
  };
  trivia.updateQuestion();
  $(".nextQuestion").on("click", function(){
    if(index<10){
      trivia.getChoice();
      trivia.updateQuestion();
    }
  });
  $(".showResults").on("click", function(){
    trivia.getChoice();
    trivia.showResult();
  });
  $(".reset").on("click", function(){
    trivia.reset();
  });

  // animate sprites
  var tID;
    
  function animateScript(){
    var positionX= 0;
    var positionY=0;
    var interval=500;
  //create sprite animation function
    tID = setInterval(()=>{
      $("#sprite1").css("background-position", `-${positionX}px ${positionY}px`);

      if(positionX < 300){
        positionX+=60;
      }else{
        positionX=0;
        positionY+=90;
      }
      if(positionY>180){
        positionY = 0;
      }
    }, interval);
  }
  // animateScript();
});

