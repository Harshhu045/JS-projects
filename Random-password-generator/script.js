
function getPassword() {
    let size = document.getElementById("Size").value;
    if(size===''){
        size=8;
    }

    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;

    let chars = '';
    if(includeLowercase) chars+= 'abcdefghijklmnopqrstuvwxyz';
    if(includeUppercase) chars+= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(includeSymbols) chars+= '!@#$%&';
    if(includeNumbers) chars+= '0123456789';

    if(chars===''){
        alert("Please select one of the character CheckBoxes!");
        return;
    }

    let password = '';
    for(let i=0;i<size;i++){
        password += chars.charAt(Math.floor(Math.random()*chars.length));
    }

    document.getElementById("Password").value = password;
}