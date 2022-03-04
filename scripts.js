// const button = document.querySelector("example-1 button");
// const span = document.querySelector("example-1 span");

// span.textContent = localStorage.getItem("example-1-number") ? ? 0;

// button.addEventListener("click", function() {
//     span.textContent--;

//     localStorage.setItem("example-1-number", span.textContent);
// });


// const example3Iput = document.querySelector("#example-2 input");
// example3Iput.value = localStorage.getItem("example-2-input") ? ? 0;

// example3Iput.addEventListener("input", function() {
//     span.textContent--;

//     localStorage.setItem("example-2-input", example3Iput.textContent);
// });

const darkTheme = document.querySelector('input[type=chekbox]');
darkTheme.addEventListener('change', function() {
    document.body.classList.toggle('dark-theme');

    localStorage.setItem('dark-theme', darkTheme.checked);
});