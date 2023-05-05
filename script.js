const surveyData = {
	stress: null, 
  depression: null,
  anxiety: null,
  pessimism: null,
};

//Array | Questions for form
let yesText = ["1. Do you care a lot about the way people around you view you?","2. Do you feel like you are always under a lot of pressure from your parents?", "3. Do you feel like you put yourself under a lot of pressure?", "4. Do you compare your success and achievements to others around you?", "5. Do you have overwhelming family responsibilities?", "6. Do you have a weak friendship with your peers?", "7. Do you often spend most of your free time alone?", "8. Have you seen a therapist or talked to a guardian about any mental health issues?", "9. Do you create ambitious goals for yourself in regards to education or work?", "10. Do you spend more time at work or studying than you do spending with family and friends?", "11. Have you been facing big changes in your family?", "12. Have you been facing big changes in regards to your everyday life (ex. new school)?", "13. Do you often regret the decisions you make and look back at what could be done better?", "14. Do you dislike trying new things and getting out of your comfort zone?", "15. Do you like to look at the negative sides of things when facing issues in your everyday life?", "16. When faced with severe adversity, do you often back down easily?", "17. Do you despise going to school or work?", "18. Your friends and family don’t support you when it comes to achieving goals in regards to post-secondary education (yes they don’t support me; no they do support me)?", "19. Do you or your family members set high standards for you and your achievements?", "20. Do you dislike the life you live?", " "];

// Variable setup | Defaults for response-based/altered variables
let questionChanger = 0
let questionValueAdd=-1
let stress = [0, 7, 7, 4, 5, 0, 0, 3, 1, 6, 3, 2, 0, 2, 0, 0, 4, 6, 7, 2];
let stressTotal = 0
let depression = [0, 2, 2, 0, 1, 5, 3, 3, 0, 3, 5, 2, 0, 2, 2, 1, 5, 3, 1, 5];
let depressionTotal = 0
let anxiety = [5, 3, 3, 1, 5, 5, 6, 3, 0, 2, 2, 0, 5, 4, 2, 2, 5, 4, 2, 4];
let anxietyTotal = 0
let pessimism = [1, 0, 0, 4, 0, 0, 2, 3, 0, 0, 0, 2, 8, 2, 9, 6, 6, 0, 0, 7];
let pessimismTotal = 0
let endQuestions = 0


// Variable setup | For form options yes/no
    var box = document.getElementById("box");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var yes = document.getElementById("yes");
    var no = document.getElementById("no");

//box.style.backgroundColor = "#ff0000";


/** Response to button click "Yes"
  * @return  (number)  Shifts through array value (+1)
  * @return  (number)  stressValueCounter sum + 1  
 */


document.getElementById("p1").innerHTML = yesText[questionChanger];
yes.onclick = function(){
  if (endQuestions < 20) {
      //box.style.backgroundColor = (0,0,255,1);
      questionValueAdd+=1
      
      
      stressTotal = stressTotal + stress[questionValueAdd] 
      console.log("Stress value: " + stress[questionValueAdd])

      depressionTotal = depressionTotal + depression[questionValueAdd] 
      console.log("Depression value: " + depression[questionValueAdd])

      anxietyTotal = anxietyTotal + anxiety[questionValueAdd] 
      console.log("Anxiety value: " + anxiety[questionValueAdd])

      pessimismTotal = pessimismTotal + pessimism[questionValueAdd] 
      console.log("Pessimism value: " + pessimism[questionValueAdd])

      
      document.getElementById("p1").innerHTML = yesText[questionChanger];
      questionChanger+=1;
      endQuestions+=1
  }    
}
    
/** Response to button click "No"
  * @return  (number)  Array value + 1
 */
  no.onclick = function(){
    if (endQuestions < 20) {
      //box.style.backgroundColor = "green";
      document.getElementById("p1").innerHTML = yesText[questionChanger];
      questionChanger+=1;
      questionValueAdd+=1
      console.log("The total stress value is " + stressTotal)
      console.log("The total depression value is " + depressionTotal)
      console.log("The total anxiety value is " + anxietyTotal)
      console.log("The total pessimism value is " + pessimismTotal)
      endQuestions+=1 

      
    }
  }

  submit.onclick = function(){
    stressPercentage= (stressTotal/59)*100
    console.log("The stress percentage is " + stressPercentage)
    depressionPercentage= (depressionTotal/45)*100
    console.log("The depression percentage is " + depressionPercentage)
    anxietyPercentage= (anxietyTotal/63)*100
    console.log("The anxiety percentage is " + anxietyPercentage)
    pessimismPercentage= (pessimismTotal/50)*100
    console.log("The pessimism percentage is " + pessimismPercentage)
    surveyData["pessimism"] = 255 * (pessimismPercentage/100);
    surveyData["anxiety"] = 255 * (anxietyPercentage/100);
    surveyData["depression"] = 255 * (depressionPercentage/100);
    surveyData["stress"] =  255 * (stressPercentage/100);
    setup(surveyData);
    console.log(surveyData)


    
    console.log("Resetting DATA")
    questionChanger = 0
    questionValueAdd=-1
    stress = [0, 7, 7, 4, 5, 0, 0, 3, 1, 6, 3, 2, 0, 2, 0, 0, 4, 6, 7, 2];
    stressTotal = 0
    depression = [0, 2, 2, 0, 1, 5, 3, 3, 0, 3, 5, 2, 0, 2, 2, 1, 5, 3, 1, 5];
    depressionTotal = 0
    anxiety = [5, 3, 3, 1, 5, 5, 6, 3, 0, 2, 2, 0, 5, 4, 2, 2, 5, 4, 2, 4];
    anxietyTotal = 0
    pessimism = [1, 0, 0, 4, 0, 0, 2, 3, 0, 0, 0, 2, 8, 2, 9, 6, 6, 0, 0, 7];
    pessimismTotal = 0
    endQuestions = 0
    document.getElementById("p1").innerHTML = yesText[questionChanger];
    questionChanger+=1;
    questionValueAdd+=1
  }

