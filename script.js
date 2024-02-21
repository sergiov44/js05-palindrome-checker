const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const div = document.getElementById("result");

function checkForPalindrome(input) {
    if (input === "") {
        return alert("Please input a value");
    }
    div.replaceChild();
}

button.addEventListener('click', () => {
    checkForPalindrome(input.value);
    input.value = '';
  });