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

