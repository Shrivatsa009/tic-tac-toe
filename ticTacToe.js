function myfunc(){
    
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var b1Btn,b2Btn, b3Btn, b4Btn, b5Btn, b6Btn, b7Btn,b8Btn, b9Btn;
    b1Btn = document.getElementById("b1");
    b2Btn = document.getElementById("b2");
    b3Btn = document.getElementById("b3");
    b4Btn = document.getElementById("b4");
    b5Btn = document.getElementById("b5");
    b6Btn = document.getElementById("b6");
    b7Btn = document.getElementById("b7");
    b8Btn = document.getElementById("b8");
    b9Btn = document.getElementById("b9");

    if( (b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b1Btn.style.color = 'yellowgreen';
        b2Btn.style.color = 'yellowgreen';
        b3Btn.style.color = 'yellowgreen';
        
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b4 == 'x' || b4 == 'X') && (b5 == 'x' || b5 == 'X') && (b6 == 'x' || b6 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b4Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b6Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b7Btn.style.color = 'yellowgreen';
        b8Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
    }
    else if ( (b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b1Btn.style.color = 'yellowgreen';
        b4Btn.style.color = 'yellowgreen';
        b7Btn.style.color = 'yellowgreen';
        
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
        b8Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b2Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b8Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b3Btn.style.color = 'yellowgreen';
        b6Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b1Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X') ) {
        document.getElementById("print").innerHTML = "player x won";
        b3Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b7Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }

    else if( (b1 == '0' || b1 == '0') && (b2 == '0' || b2 == '0') && (b3 == '0' || b3 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b1Btn.style.color = 'yellowgreen';
        b2Btn.style.color = 'yellowgreen';
        b3Btn.style.color = 'yellowgreen';
        
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b4 == '0' || b4 == '0') && (b5 == '0' || b5 == '0') && (b6 == '0' || b6 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b4Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b6Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') && (b9 == '0' || b9 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b7Btn.style.color = 'yellowgreen';
        b8Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
    }
    else if ( (b1 == '0' || b1 == '0') && (b4 == '0' || b4 == '0') && (b7 == '0' || b7 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b1Btn.style.color = 'yellowgreen';
        b4Btn.style.color = 'yellowgreen';
        b7Btn.style.color = 'yellowgreen';
        
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b5Btn.disabled = true;
        b6Btn.disabled = true;
        b8Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b2 == '0' || b2 == '0') && (b5 == '0' || b5 == '0') && (b8 == '0' || b8 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b2Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b8Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b9Btn.disabled = true;
    }
    else if ( (b3 == '0' || b3 == '0') && (b6 == '0' || b6 == '0') && (b9 == '0' || b9 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b3Btn.style.color = 'yellowgreen';
        b6Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b4Btn.disabled = true;
        b5Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b1 ==  '0' || b1 == '0') && (b5 == '0' || b5 == '0') && (b9 == '0' || b9 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b1Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b9Btn.style.color = 'yellowgreen';
        
        b2Btn.disabled = true;
        b3Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b7Btn.disabled = true;
        b8Btn.disabled = true;
    }
    else if ( (b3 == '0' || b3 == '0') && (b5 == '0' || b5 == '0') && (b7 == '0' || b7 == '0') ) {
        document.getElementById("print").innerHTML = "player 0 won";
        b3Btn.style.color = 'yellowgreen';
        b5Btn.style.color = 'yellowgreen';
        b7Btn.style.color = 'yellowgreen';
        
        b1Btn.disabled = true;
        b2Btn.disabled = true;
        b4Btn.disabled = true;
        b6Btn.disabled = true;
        b8Btn.disabled = true;
        b9Btn.disabled = true;
    }

    // else if ( (b1 == 'X' || b1 == '0') &&  (b2 == 'X' || b2 == '0') &&
    //           (b3 == 'X' || b3 == '0') &&  (b4 == 'X' || b4 == '0') &&
    //           (b5 == 'X' || b5 == '0') &&  (b6 == 'X' || b6 == '0') &&
    //           (b7 == 'X' || b7 == '0') &&  (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0') ) {
    //             document.getElementById("print").innerHTML = "Match Tie";
    // }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') && 
        (b4 == 'X' || b4 == '0') && (b5 == 'X' || 
            b5 == '0') && (b6 == 'X' || b6 == '0') && 
        (b7 == 'X' || b7 == '0') && (b8 == 'X' || 
            b8 == '0') && (b9 == 'X' || b9 == '0')) { 
        document.getElementById('print') 
            .innerHTML = "Match Tie"; 
    } 
    

    else {
        if(flag == 1){
            document.getElementById("print").innerHTML = "player X turn";
        }else {
            document.getElementById("print").innerHTML = "player 0 turn";
        }
    }

}

function fullReload() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

flag = 1;
function myfunct_1() {
    if(flag == 1){
        document.getElementById("b1").value = 'X';
        document.getElementById("b1").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b1").value = '0';
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
};

function myfunct_2() {
    if(flag == 1){
        document.getElementById("b2").value = 'X';
        document.getElementById("b2").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b2").value = '0';
        document.getElementById("b2").disabled = true;
        flag = 1;
    }
};

function myfunct_3() {
    if(flag == 1){
        document.getElementById("b3").value = 'X';
        document.getElementById("b3").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b3").value = '0';
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
};

function myfunct_4() {
    if(flag == 1){
        document.getElementById("b4").value = 'X';
        document.getElementById("b4").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b4").value = '0';
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
};


function myfunct_5() {
    if(flag == 1){
        document.getElementById("b5").value = 'X';
        document.getElementById("b5").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b5").value = '0';
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
};


function myfunct_6() {
    if(flag == 1){
        document.getElementById("b6").value = 'X';
        document.getElementById("b6").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b6").value = '0';
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
};


function myfunct_7() {
    if(flag == 1){
        document.getElementById("b7").value = 'X';
        document.getElementById("b7").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b7").value = '0';
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
};

function myfunct_8() {
    if(flag == 1){
        document.getElementById("b8").value = 'X';
        document.getElementById("b8").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b8").value = '0';
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
};

function myfunct_9() {
    if(flag == 1){
        document.getElementById("b9").value = 'X';
        document.getElementById("b9").disabled = true;
        flag = 0;
    }else {
        document.getElementById("b9").value = '0';
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
};