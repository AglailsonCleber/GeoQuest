const alternativeA = document.querySelector('#A');
const alternativeB = document.querySelector('#B');
const alternativeC = document.querySelector('#C');
const alternativeD = document.querySelector('#D');
const alternativeE = document.querySelector('#E');

const button = document.querySelector('#deliver');

alternativeA.addEventListener("click", function(){ updateAlternatives('#A', 'selected','A'); });
alternativeB.addEventListener("click", function(){ updateAlternatives('#B', 'selected','B'); });
alternativeC.addEventListener("click", function(){ updateAlternatives('#C', 'selected','C'); });
alternativeD.addEventListener("click", function(){ updateAlternatives('#D', 'selected','D'); });
alternativeE.addEventListener("click", function(){ updateAlternatives('#E', 'selected','E'); });

button.addEventListener("click", function(){ updateButton(); });

var enableButton = false;

function updateAlternatives(id, className, alternative)
{
    if (alternative === 'A') {
        addClass(id, className);
        removeClass('#B', className);
        removeClass('#C', className);
        removeClass('#D', className);
        removeClass('#E', className);
        enableButton = true;
    }
    if (alternative === 'B') {
        addClass(id, className);
        removeClass('#A', className);
        removeClass('#C', className);
        removeClass('#D', className);
        removeClass('#E', className);
        enableButton = true;
    }
    if (alternative === 'C') {
        addClass(id, className);
        removeClass('#A', className);
        removeClass('#B', className);
        removeClass('#D', className);
        removeClass('#E', className);
        enableButton = true;
    }
    if (alternative === 'D') {
        addClass(id, className);
        removeClass('#A', className);
        removeClass('#B', className);
        removeClass('#C', className);
        removeClass('#E', className);
        enableButton = true;
    }
    if (alternative === 'E') {
        addClass(id, className);
        removeClass('#A', className);
        removeClass('#B', className);
        removeClass('#C', className);
        removeClass('#D', className);
        enableButton = true;
    }
}

function updateButton()
{
    if (enableButton === false) {
        alert("selecione uma das alternativas.")
    }
    if (enableButton) {
        removeObject("body", "#containerAlternatives");
        removeClass('#containerVideo', 'hidden');
        removeClass('#containerVideo Video', 'hidden');
        addClass('#containerButton', 'hidden');
        addClass('#containerVideo Video', 'video');
    }
}

function addClass(id, className)
{
    document.querySelector(id).classList.add(className);
}

function removeClass(id, className)
{
    document.querySelector(id).classList.remove(className);
}

function removeObject(container, id)
{
    const objFather = document.querySelector(container);
    const objChild = document.querySelector(id);
    objFather.removeChild(objChild);
}

function removeHandler(id, event, myFunction) {
    document.getElementById(id).removeEventListener(event, myFunction);
}


var myVideo = document.getElementById("video");
function playPause() {
    if (myVideo.paused){
        myVideo.play(); 
    }else{ 
        myVideo.pause();
        //console.log(myVideo.currentTime)
    }
}
/*if (myVideo.currentTime > 10) {
    removeClass('#containerButton', 'hidden');
}*/