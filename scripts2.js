// var example1Span = document.querySelector('#example-1 span');

// example1Span.textContent = localStorage.getItem('example-1-number') ? ? 0;

// document.querySelector('#example-1 button').addEventListener('click', function() {
//     example1Span.textContent++;
//     localStorage.setItem('example-1-number', example1Span.textContent)
// });

// const example2Span = document.querySelector('#example-2 span');

// example2Span.textContent = localStorage.getItem('example-2-number') ? ? 0;

// document.querySelector('#example-2 button').addEventListener('click', function() {
//     example2Span.textContent--;
//     localStorage.setItem('example-2-number', example2Span.textContent)
// });

// const example3Input = document.querySelector('#example-3 input');
// example3Input.value = localStorage.getItem('example-3-input');
// example3Input.addEventListener('input', function() {
//     localStorage.setItem('example-3-input', example3Input.value)
// });

const darkThem = document.querySelector('input[type=checkbox]');

darkThem.checked = +localStorage.getItem('dark-them');
document.body.classList.toggle('darck-them', darkThem.checked);

darkThem.addEventListener('change', function() {
    localStorage.setItem('dark-them', +darkThem.checked)
    document.body.classList.toggle('darck-them', )
});