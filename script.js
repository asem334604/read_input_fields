// task 1
const outputSpan1 = document.querySelector("#output1");
const inputField1 = document.querySelector("#inputName");

function printResult() {
    const res = inputField1.value;
    if (res === '') {
        outputSpan1.textContent = "You haven't entered a name."
    } else {
        outputSpan1.textContent = `Hello, ${res}!`;
    }
}

// task 2
function checkPassword() {
    const inputPass1 = document.getElementById('pass1');
    const inputPass2 = document.getElementById('pass2');
    const outputSpan2 = document.getElementById('output2');
    if ((inputPass1.value === '') || (inputPass2.value === '')) {
        outputSpan2.textContent = 'You have to fill two fields.'
    } else if (inputPass1.value === inputPass2.value){
        outputSpan2.textContent = 'Equal'
    } else {
        outputSpan2.textContent = 'Not equal'
    }
}


//task 3
function getRandomInt(max) {
    const outputSpan3 = document.getElementById('output3');
    outputSpan3.textContent = Math.floor(Math.random() * max);
}
