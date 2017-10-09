    window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);



var EjectDown = false;

var speed = 25;
function keydown(event) {
    if (event.keyCode == 87 && EjectDown === false) { 
        EjectDown = true;
        setTimeout(eject, speed);
    }





     if (event.keyCode == 88) { 
        split();
        setTimeout(split, speed*2);
        setTimeout(split, speed*4);
        setTimeout(split, speed*6);
    }




    if (event.keyCode == 82) { 
        X = window.innerWidth/2;
        Y = window.innerHeight/2;
        $("canvas").trigger($.Event("mousemove", {clientX: X, clientY: Y}));
    }
}




function keyup(event) {
    if (event.keyCode == 87) { 
        EjectDown = false;
    }
}

function eject() {
    if (EjectDown) {
        window.onkeydown({keyCode: 87}); 
        window.onkeyup({keyCode: 87});
        setTimeout(eject, speed);
    }
}

function split() {
    $("body").trigger($.Event("keydown", { keyCode: 32}));
    $("body").trigger($.Event("keyup", { keyCode: 32})); 
}