//This is the function that initializes our program
		
function init()
		
{
  
//Store a reference to the HTML button element in a variable:
  
//use the id of the HTML button element to do this
  
var myButton = document.getElementById("btnAnswer");
  
  
//use the onclick event of the button
  
//and assign the value of the getAnswer() function to it.
  
//This function performs the main job in your application

//and runs after the user clicks the button on the page.
  
//Take note: getAnswer is assigned without brackets.
  
//This is so because otherwise getAnswer() would be called
  
  //as soon as the page loads (and we don't want that).
  
myButton.onclick = getAnswer;
  
  
//the init function ends here
  
}
  
  
//Assign the init() function to the onload event:
  
//this event fires when the HTML page is loaded in the browser.
  
//Take note: init is assigned without brackets
  
onload = init;
  
  
//Now write the getAnswer() function
  
function getAnswer()
  
{
  
//Create all the vars you need to manipulate your data:
  
//secretName stores the correct answer the user is expected to guess:
  
var secretName = "Harry Potter";
  
  
//Turn the value of secretName into lower case:
  
//you do this because you're going to compare this value
  
//to the value entered by the user of your application.
  
//Given that users might type the answer either in upper or lower case,
  
//reducing the relevant text values to the same casing automatically
  
//ensures that only the content and not also the letter case plays a role in the comparison.
  
var secretNameLower = secretName.toLowerCase();
  
  
//Get the value the user types into the textbox
  
var myTextBox = document.getElementById("txtName");
  
var name = myTextBox.value;
  
  
//Also turn the value entered by the user to lower case
  
var nameLower = name.toLowerCase();
  
  
//Get a reference to the HTML paragraph that will display your result
  
//after the script has run by storing its id value in a var
  
var message = document.getElementById("message");
  
  
//These are the test cases your application needs to evaluate
  
//and respond to: if the user clicks the button but did not
  
//enter any value in the textbox:
  
if(nameLower.length <= 0)
  
{
  
alert("I didn't quite catch your answer.  Please enter an answer");
  
}
  
  
//If the user gets right the first half but not the latter half of the name:
  
//Take note of the use of the logical operator && 
  
//(go back to lesson 5 if you need to revise logical operators)
  
else if(nameLower.indexOf("harry") == 0 && nameLower.indexOf("potter") == -1)
  
{
  
alert("Almost there: think again");
  
}
  
  
//If the secret name and the name entered by the user match:
  
else if(nameLower.match(secretNameLower))
  
{
  
alert("You got it!");
  
message.innerHTML = "Congratulations, you win!";
  
}
  
  
//Default case - if the user types in the wrong answer:
  
else
  
{
  
alert("Wrong!");
  
message.innerHTML = "Sorry.  The correct answer is: ";
  
message.innerHTML += name.replace(name, "Harry Potter");
  
}
  
  
//the getAnswer() function ends here
  
}