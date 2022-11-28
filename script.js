//Your code goes here

// 1. Click the button to display your name
//Selectors
let nameButton = document.getElementById('btnName')
//Function
function showName () {
 document.getElementById("myName").value = "test";
}
//Call the event
nameButton.addEventListener('click', showName)

//2. Switch lights on mouseover
//Selectors
const lightOn = document.getElementById('imageOff')

//Function
function turnLightOn () {
  lightOn.src = "images/lighton.png"
}
function turnLightOff () {
  lightOn.src = "images/lightoff.png"
}
//Call the event
lightOn.addEventListener('mouseover', turnLightOn)
lightOn.addEventListener('mouseout', turnLightOff)

//3. Double click to display content
//Selectors
const para = document.getElementById('displayPara')
const btnDbName = document.getElementById('btndbName')
/*Function {
  //some code here
  //create a new img element */
  function showPara () {
   para.innerText = "can you see me?"
  }
  btnDbName.addEventListener('dblclick', showPara)
//Call the event

// 4. Traffic Lights
//Selectors
const BtnStop = document.getElementById('btnStop')
const BtnReady = document.getElementById('btnReady')
const BtnGo = document.getElementById('btnGo')
//Function 1
function redOn () {
  document.getElementById("stopDiv").style.backgroundColor = 'red'
}
//Function 2
function yellowOn () {
  document.getElementById("readyDiv").style.backgroundColor = 'yellow'
}
//Function 3
function greenOn () {
  document.getElementById("goDiv").style.backgroundColor = 'green'
}

//Call the events
BtnStop.addEventListener('click', redOn)
BtnReady.addEventListener('click', yellowOn)
BtnGo.addEventListener('click', greenOn)

//5. Change textbox border colours
let btn = document.getElementById('btn2Name')
function changeBorderCol () {
  document.getElementById('firstName').style.borderColor = 'aqua navy green'
  document.getElementById('lastName').style.borderColor = 'pink purple '
}
btn.addEventListener('click', changeBorderCol)

//6. validate the box [length should be more than 8 characters]
const btnValidate = document.getElementById('btnSub2')
const myInput = document.getElementById('myName2').value

function toValidate() {
  if (myInput.length < 8 || myInput === "" ){         //myInput
   alert ("Type in more than 8 characters")
   return false
  //  return console.error();(myInput, "Please Enter More Than 8 Characters");   
   } else { 
  console.log("all good")
  //   setSuccess(myInput);
  } 
}; 
 btnValidate.addEventListener('click', toValidate)



 

// 7.create a list of hobbies
const hobbiesBtn = document.getElementById('btnHobbies')
const myHobbies = ['drawing','sleeping','coffeetime'];

 function showHobbies () {
 for (i=0; i < myHobbies.length; i++){
    //console.log(myHobbies[i])
    textPrompt = prompt(`My hobbies are: ${myHobbies[i]}`, "see more!")
  } 
} 
hobbiesBtn.addEventListener('click', showHobbies)

// 8. Display a profile card from an object
 const myCat = {
  name: "Pelirrojo",
  age: 7,
  color: "ginger and white"
}
const buttonProfile = document.getElementById("btnProfile")
let displayDiv = document.getElementById("displayCard")
function showProfile() {
    //for loop
    //if statement
    //for 
    displayDiv.innerHTML = `${myCat.name} is about ${myCat.age}, he is ${myCat.color}`
  }
  buttonProfile.addEventListener('click', showProfile)
