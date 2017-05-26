function init() {
    var btn = document.getElementById('calcbtn');
    btn.addEventListener('click',calculate,false);
}

window.addEventListener('load',init,false);

function calculate() {
    var e;
    var lengthhr = document.getElementById("lengthhr").value;
    lengthhr = (lengthhr == '' ? 0 : parseInt(lengthhr,10));
    var lengthmin = document.getElementById("lengthmin").value;
    lengthmin = (lengthmin == '' ? 0 : parseInt(lengthmin,10));
    var length = lengthhr*60+lengthmin;

    var percent = parseInt(document.getElementById("percent").value,10);
    
    length *= 1 + percent/100;
    length = Math.ceil(length);

    var hr = Math.floor(length/60);
    var min = length%60;

    document.getElementById("alen").innerHTML = hr + 'hr ' + min + 'min';
    
    e = document.getElementById("starthr");
    var starthr = parseInt(e.options[e.selectedIndex].value,10);
    e = document.getElementById("startmin");
    var startmin = parseInt(e.options[e.selectedIndex].value,10);

    length += startmin;
    hr = Math.floor(length/60) + starthr;
    min = length%60;

    document.getElementById("end").innerHTML = hr + ':' + (min < 10 ? '0' : '') + min;
}
