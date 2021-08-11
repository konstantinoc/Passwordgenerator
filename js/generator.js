var capitalChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var clearSymbols = '!@#$%^&*-_=+?';
var ambSymbols = '(){}[]|\:;"<,>.?/';
var numbers = '1234567890';

document.getElementById('generate').addEventListener('click', function (event) {
    document.getElementById("gen_passwrd").innerHTML = "";
    var charSet = '';

    var lenght = document.getElementById('txtLength').value;
    
    if(document.getElementById('chkLowers').checked == true){
        charSet += lowerChars;
    }

    if(document.getElementById('chkCapitals').checked == true){
        charSet += capitalChars;
    }

    if(document.getElementById('chkSymbols').checked == true){
        charSet += clearSymbols;

        if(document.getElementById('chkAmb').checked == false){
            charSet += ambSymbols;
        }
    }

    if(document.getElementById('chkNumbers').checked == true){
        charSet += numbers;
    }

    document.getElementById("gen_passwrd").innerHTML = generatePassword(charSet, lenght);
});



function generatePassword(charSet, lenght){

    var pass = "";
    for(var i=0; i < lenght; i++){
        pass += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    return pass; 
}