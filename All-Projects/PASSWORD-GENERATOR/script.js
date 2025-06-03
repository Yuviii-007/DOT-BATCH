const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const passwordDisplay = document.querySelector('[data-passwordDisplay]');
const copyBtn = document.querySelector('[data-copy]');
const copyMsg = document.querySelector('[data-copyMsg]');
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector('#lowercase');
const numbersCheck = document.querySelector('#number');
const symbolsCheck = document.querySelector('#symbols');
const indicator = document.querySelector('[data-indicator]');
const generateBtn = document.querySelector('.generateButton');
const allCheckBox = document.querySelectorAll('input[type="checkbox"]');

const symbol = "!@#$%^&*()_+-{}[]:;'<>?,./\|"


let password = "";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set strength circle color to grey  
setIndicator("#ccc");

//set passwordlength 
function handleSlider() {
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize = ((passwordLength - min) * 100 / (max - min)) + "%100";

}

function setIndicator(color) {
    indicator.style.backgroundcolor = color;
    //shadow
    passwordDisplay.style.color = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


function generateRandomNumber() {
    return getRndInteger(1, 9);

}


function generateLowercase() {
    return String.fromCharCode(getRndInteger(97, 123));
}


function generateUppercase() {
    return String.fromCharCode(getRndInteger(65, 91));
}

function generateSymbol() {
    let randNum = getRndInteger(0, symbol.length);
    return symbol.charAt(randNum);
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) { hasUpper = true };
    if (lowercase.checked) hasLower = true;
    if (number.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

async function copyContent() {

    try {
        await navigator.clipboard.writeText(passwordDisplay);
        copyMsg.innerText = "copied";
    }
    catch (e) {
        copyMsg.innerText = "Failed";
    }

    //to make copy wala span visible 
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    }, 2000)

}

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    });

    //specual condition

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}


allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
}
)


inputSlider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
}
)

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value)
        copyContent();
})

function shufflePassword(array) {
    // fisher yates method      apply on array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random(0, i + 1));
        // swap a[i] and a[j]
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((element) => { str += element });
    return str;
}

generateBtn.addEventListener('click', () => {

    //none of the check box are selected 
    if (checkCount <= 0) {
        passwordDisplay.value = password;
        return;
    }

    else if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }


    //lets start the journey to find the new password 

    console.log("starting the journey");

    //remove old password 
    password = "";

    // lets put the stuff mentioned by chechboxes 

    // if(lowercaseCheck.checked){
    //     password += generateLowercase() ;
    // }

    // if(numberCheck.checked){
    //     password += generateRandomNumber() ;
    // }

    // if(symbolCheck.checked){
    //     password += generateSymbol() ;
    // }

    // if(uppercaseCheck.checked){
    //     password += generateUppercase() ;
    // }



    let funcArr = [];

    if (uppercaseCheck.checked) {
        funcArr.push(generateUppercase);
    }

    if (lowercaseCheck.checked) {
        funcArr.push(generateLowercase);
    }

    if (numbersCheck.checked) {
        funcArr.push(generateRandomNumber);
    }

    if (symbolsCheck.checked) {
        funcArr.push(generateSymbol);
    }

    //compulsary addition

    for (let i = 0; i < funcArr.length; i++) {

        password += funcArr[i]();
    }

    console.log("Compulsary addition done");
    //remaining addition 

    for (let i = 0; i < passwordLength - funcArr.length; i++) {
        let randIndex = getRndInteger(0, funcArr.length - 1);
        console.log("randindex" + randIndex)
        password += funcArr[randIndex]();
    }

    console.log("remainnig addition done");
    //suffle pass word
    password = shufflePassword(Array.from(password));

    console.log("suffling addition done");
    //show in ui 

    passwordDisplay.value = password;
    console.log("ui addition done");

    //calculated strength 

    calcStrength();

});