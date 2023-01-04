function loadFunction(){
    var element = document.getElementById('heading');
    element.firstChild.nodeValue = 'New Heading';
}

document.addEventListener('mouseenter', loadFunction);

function loadFunction2(){
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'Lorem ipsum whatever';
}

document.addEventListener('mouseleave', loadFunction2);