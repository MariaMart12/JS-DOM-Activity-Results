// 1. Click the button to display your name
let nameButton = document.getElementById('btnName')
function showName () {
 document.getElementById("myName").value = "Maria";
 document.getElementById("myName").style.color = "blue";
}
nameButton.addEventListener('click', showName)

//2. Switch lights on mouseover
const lightOn = document.getElementById('imageOff')
function turnLightOn () {
  lightOn.src = "images/lighton.png"
}
function turnLightOff () {
  lightOn.src = "images/lightoff.png"
}
lightOn.addEventListener('mouseover', turnLightOn)
lightOn.addEventListener('mouseout', turnLightOff)

//3. Double click to display content
const para = document.getElementById('displayPara')
const btnDbName = document.getElementById('btndbName')
const img = document.getElementById("taskThree"); 
/*Function {
  //create a new img element */
  function showPara () {
   para.innerText = "can you see me?"
   img.src = "https://picsum.photos/200/301";
  }
  btnDbName.addEventListener('dblclick', showPara)

// 4. Traffic Lights
const BtnStop = document.getElementById('btnStop')
const BtnReady = document.getElementById('btnReady')
const BtnGo = document.getElementById('btnGo')
function redOn () {
  document.getElementById("stopDiv").style.backgroundColor = 'red'
  document.getElementById("readyDiv").style.backgroundColor = 'black'
  document.getElementById("goDiv").style.backgroundColor = 'black'
}
function yellowOn () {
  document.getElementById("readyDiv").style.backgroundColor = 'yellow'
  document.getElementById("stopDiv").style.backgroundColor = 'black'
  document.getElementById("goDiv").style.backgroundColor = 'black'
}
function greenOn () {
  document.getElementById("goDiv").style.backgroundColor = 'green'
  document.getElementById("readyDiv").style.backgroundColor = 'black'
  document.getElementById("stopDiv").style.backgroundColor = 'black'
}
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
const myInput = document.getElementById('myName2')
const displayErr = document.getElementById('errMsg')
function toValidate() {
  if (myInput.value === " " || myInput.value.length < 8){         
   alert ("Type in more than 8 characters")
   return false
   } else { 
    alert("all good")
    return true
  } 
}; 
btnValidate.addEventListener('click', toValidate)

// 7.create a list of hobbies
const hobbiesBtn = document.getElementById('btnHobbies')
const myHobbies = ['drawing','sudoku','reading'];

 function showHobbies () {
 for (i=0; i < myHobbies.length; i++){
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
