window.addEventListener('DOMContentLoaded', main)



function main() {
   LightTheme()
}

function DarkTheme(){
    document.getElementById("gif-image").style.backgroundImage = "url('gif-bild3.png')";

}
function LightTheme(){
    document.getElementById("gif-image").style.backgroundImage = "url('gif-bild.png')";
}

function SkillsTag1(){
    var toggle = document.getElementById("skills-p-tag1");
    if (toggle.style.visibility === "hidden") {
      toggle.style.visibility = "visible";
    } else {
      toggle.style.visibility = "hidden";
    }
}

function SkillsTag2(){
    var toggle = document.getElementById("skills-p-tag2");
    if (toggle.style.visibility === "hidden") {
      toggle.style.visibility = "visible";
    } else {
      toggle.style.visibility = "hidden";
    }
}

function SkillsTag3(){
    var toggle = document.getElementById("skills-p-tag3");
  if (toggle.style.visibility === "hidden") {
    toggle.style.visibility = "visible";
  } else {
    toggle.style.visibility = "hidden";
  }
}

function dropdown(){
  var toggleDropDown = document.getElementsByClassName("header-knappar");
  console.log(toggleDropDown)
  for (let index = 0; index < toggleDropDown.length; index++) {
    const element = toggleDropDown[index];
    if (element.style.display === "inline-block") {
      element.style.display = "none";
    } else {
      element.style.display = "inline-block";
    }
  }  
}

function resize(){
  console.log("RESIZE");
  if(window.innerWidth >= 1300){
    var toggleDropDown = document.getElementsByClassName("header-knappar");
    for (let index = 0; index < toggleDropDown.length; index++) {
    const element = toggleDropDown[index];
    element.style.display = "inline-block";
  }
}
  else{
    var toggleDropDown = document.getElementsByClassName("header-knappar");
    for (let index = 0; index < toggleDropDown.length; index++) {
    const element = toggleDropDown[index];
    element.style.display = "none";
  }  
}
}

function resize(){
  console.log("RESIZE");
  if(window.innerWidth >= 1300){
    var toggle = document.getElementsByClassName("header-knappar");
    for (let index = 0; index < toggle.length; index++) {
    const element = toggle[index];
    element.style.visibility = "visable";
  }
}
  else{
    var toggleDropDown = document.getElementsByClassName("header-knappar");
    for (let index = 0; index < toggle.length; index++) {
    const element = toggle[index];
    element.style.visibility = "hidden";
  }  
}
}
