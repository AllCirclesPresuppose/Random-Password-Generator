const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordLength = 15

function generate() {
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    passwordLength = document.getElementById("password-length").value
    for(let i = 0; i <= passwordLength; i++) {
        passwordOne.textContent += characters[Math.floor(Math.random() * characters.length)]
        passwordTwo.textContent += characters[Math.floor(Math.random() * characters.length)]
    }
    
}

    function copyOne() {
        var copyText = passwordOne.textContent
        navigator.clipboard.writeText(copyText)
        alert("Copied the text: " + copyText)
    }
    
    function copytwo() {
        console.log(passwordTwo.textContent)
    }



