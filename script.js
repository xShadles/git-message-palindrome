let textInput = document.getElementById("textInput");
let textOutput = document.getElementById("textOutput");
const reverseBtn = document.getElementById("reverseBtn");
const clearBtn = document.getElementById("clearBtn");


reverseBtn.addEventListener("click", function () {
    textOutput.value = textInput.value.split("").reverse().join("");
});

clearBtn.addEventListener("click", function() {
    textOutput.value = "";
    textInput.value = "";
});