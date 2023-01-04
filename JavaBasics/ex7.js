function inputDisplay(){
    var element = document.getElementById('text');
    var div = document.getElementById('div');
    div.firstChild.nodeValue = element.value;
}

function buttonPress(){
    var element = document.getElementById('text');
    element.addEventListener('keyup', inputDisplay);
}

document.addEventListener('DOMContentLoaded',buttonPress );