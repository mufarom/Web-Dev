function h1click(){
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'NEW HEADING';
}

function pclick(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Paragraph';
}

function load(){
    var element = document.getElementById('heading');
    element.addEventListener('click', h1click);

    var element = document.getElementById('paragraph');
    element.addEventListener('click', pclick);
}

document.addEventListener('DOMContentLoaded', load);