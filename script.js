document.getElementById('generate-btn').addEventListener('click', function() {
    const randomNum = Math.round(Math.random() * (9999 - 1000 + 1) + 1000);
    document.getElementById('inputPin').value = randomNum;
});
document.getElementById('key-pad').addEventListener('click', function(event) {
    let number = event.target.innerText;
    let calInput = document.getElementById('insertedPin');
    if (isNaN(number)) {
        if (number = "C") {
            calInput.value = " "
        }
    } else {
        const prevNum = calInput.value;
        const newNum = prevNum + number
        calInput.value = newNum;
    }
})
document.getElementById("submitBtn").addEventListener('click', function() {
    const pin = document.getElementById('inputPin').value;
    const typedNum = document.getElementById('insertedPin').value;
    const success = document.getElementById('match');
    const failed = document.getElementById("notMatch")
    if (pin == typedNum) {
        success.style.display = "block";
        failed.style.display = "none"
    } else {
        success.style.display = "none"
        failed.style.display = "block";
    }
})