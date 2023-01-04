function load(){
    var element = document.getElementById('circle');
    document.addEventListener('click', load2);
    function load2(){
        var element = document.getElementById('circle');
        var circleOpacity = parseFloat(element.style.opacity);
        element.style.opacity = circleOpacity - 0.1;
    }
    element.style.backgroundColor = 'blue';
    element.style.opacity = 1;
    setInterval(load, 1000);
}

document.addEventListener('DOMContentLoaded', load);