document.getElementById("ruleInput").readOnly = true;
var ranNo, questions, ruleMade, dares, lastid, showRules;

lastid = 0;
ruleMade = true;
showRules = false;

questions = [
 "Birthday",
 "Whats the first thing you'll buy with your dream jobs pay check",
 "Dream Car?",
 "Current Crush",
 "Biggest Fear",
 "What embarrasses you the most and/or what’s been your most embarrassing moment",
 "What qualities do you look for in people",
 "Year you lost your virginity",
 "Does anyone know your biggest secret",
 "Last time you slept with someone",
 "Any Tattoes? If so what would you get",
 "Have you ever walked in on your parents doing it",
 "What is your guilty pleasure",
 "What kink would make you run away",
 "What would be in your web history that you’d be embarrassed if someone saw",
 "Have you ever tried to take a sexy picture of yourself",
 "Who is your secret crush",
 "How would you rate your looks on a scale of 1 to 10",
 "Do you think you'll marry your current girlfriend/boyfriend",
 "Would you rather lose your sex organs forever or gain 200 pounds",
 "Who in this room would be the worst person to date? Why",
 "If you were reborn, what decade would you want to be born in",
 "If you could go back in time in erase one thing you said or did, what would it be",
 "Have you ever been caught checking someone out",
 "What's the most unflattering school picture of you",
 "Would you rather be caught picking your nose or picking a wedgie",
 "Do you pee in the shower",
 "The world ends next week and you can do anything you want (even if it's illegal). What would you do",
 "How far would you go to land the guy or girl of your dreams",
 "Who is one person you pretend to like, but actually don’t",
 "What children’s movie could you watch over and over again",
 "When was the last time you wet the bed",
 "If you had to make out with any Disney character, who would it be",
 "What did you last search on a porn site",
 "If you were home by yourself all day, what would you do",
 "What is something you’ve done to try to be ‘cooler’",
 "Have you ever got caught doing something you shouldn’t, what was it",
 "What was the last rate-R movie you watched",
 "What is something that no one else knows about you",
 "What is the worst date you’ve ever been on",
 "Have you ever had a crush on a friend’s boyfriend/girlfriend",
 "If you had to make out with a boy, who would it be",
 "Worst/Best way you have ever asked someone out",
 "Have you ever had a crush on a person at least 10 years older than you",
 "Who is the worst kisser you’ve kissed",
 "Do you ever admire yourself in the mirror",
 "Do you secretly love Twilight",
 "Who is the hottest? Hagrid, Dumbledore, or Dobby",
 "Who are the top 5 cutest girls you know? Rank them",
 "If you were stranded on a deserted island, who would you want to be stranded with",
 "What's the sexiest thing about a girl",
 "Who would you hate to see naked",
 "If you could only use one swear word for the rest of your life, which one would you choose",
 "What's the best thing to say to your friend that would be the worst thing to say to your crush",
 "Who's the hottest in the room",
 "Have you ever shared your friend's secret with someone else",
 "Rate everyone in the room from 1 to 10, with 10 being the hottest",
 "Rate everyone in the room from 1 to 10, with 10 being the best personality",
 "If your friend asked you to lie for tjem and you knew you would get in trouble, would you do it",
 "If you had to choose, who would you stop being friends with",
 "What is the most annoying thing about your best friend",
 "Have you ever tried drugs",
 "Have you ever sexted anyone",
 "Would you ever consider posing for Playboy or a magazine like it",
 "Have you ever seen a naughty magazine",
 "How much money would we have to pay you for you to agree to flash them something?",
 "Have you ever been arrested",
 "Who was your first kiss and how was it",
 "What’s the craziest thing you would do /ever done sexually",
 "Biggest turn off",
 "Biggest turn on",
 "What is your crush's personality like?",
  "Have you ever tried to take a sexy picture of yourself?",
  "Do you sleep with a stuffed animal?",
  "Do you drool in your sleep?",
  "Do you talk in your sleep?",
  "How would you rate your looks on a scale of 1 to 10?",
  "What don't you like about me?",
  "What colour underwear are you wearing right now?",
  "What was the last thing you texted?",
  "What's your biggest pet peeve?",
  "How many people have you kissed?",
  "What's your biggest turn-on"
];
dares = [
 "Slap yourself in the face hard",
 "Chug",
 "Spin around 5 times",
 "Do 5 Pushups",
 "Give Someone A Drink"
];

//
//var ids = [
//    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
//    ,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40
//    ,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60
//    ,61,62,63,64,65,66,67,68,69,70,81,82,83,84
//]

function qOrD() {
 var randoNum = Math.floor(Math.random() * questions.length);
    
 if(randoNum < 13 && randoNum >= 8) {
   newDare();
 } else if (randoNum < 3){
   makeNewRule();
   ruleMade = false;
 }
 else {
   newQuestion();
 }
}

function newQuestion(){
    
    //if statement checking if question has been asked
    //each time new question func is called push randoNum into an array
    ranNo = Math.floor(Math.random() * questions.length)
    
    var newArray = [];
    
    for (var i =0; i < newArray.length; i++){
        if(ranNo !== newArray[i]){
            continue
        }
    }


 if (ruleMade){
   document.querySelector("#change").innerHTML = questions[ranNo] + "?";
 }
    
}


function makeNewRule() {
 document.getElementById("ruleInput").readOnly = false;
 document.querySelector("#change").innerHTML = "&larr;";
}



function addRule() {
	var item    = document.getElementById('ruleInput').value
	var text    = document.createTextNode(item)
	var newItem = document.createElement('li')
 var removeButton = document.createElement('button');

	newItem.appendChild(text)
 newItem.setAttribute("id", "item" + lastid);
 removeButton.appendChild(document.createTextNode("remove"));
 removeButton.setAttribute('onClick','removeName("'+'item'+lastid+'")');
 newItem.appendChild(removeButton);
    removeButton.classList.add("styleRemoveBtn");
 lastid+=1;

	document.getElementById('ruleList').appendChild(newItem)
 document.getElementById("ruleInput").readOnly = true;
 document.querySelector("#change").innerHTML = "Enter Question";

 ruleMade = true;
 clearContent();
}




function removeName(itemid){
   var item = document.getElementById(itemid);
   ruleList.removeChild(item);
    
}



function newDare() {
 if (ruleMade){
     var randomNumber = Math.floor(Math.random() * dares.length);
   document.getElementById('change').innerHTML = "DARE: " + dares[randomNumber];
 }
}




function clearContent() {
 document.getElementById('ruleInput').value = "";
}



function stopRKey(evt) {
  var evt = (evt) ? evt : ((event) ? event : null);
  var node = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null);
  if ((evt.keyCode == 13))  {return false;}
}



document.onkeypress = stopRKey;

/* To Do

Write in more dares.
Write in more questions.
Rules" has to dissapear when there are no rules out, and appear when there are. */
