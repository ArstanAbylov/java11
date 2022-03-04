// setTimeout(function() {
//     document.querySelector('span').textContent = "Hello";
// }, 3000);
// document.querySelector('button').addEventListener('click', function() {
//     clearTimeout(timeoutExample);
// });


setTimeout(function() {
    document.querySelector('button').textContent = "";
}, 2000);

document.querySelector('span').addEventListener('click', function() {
    clearTimeout(timeoutExample);
});

// $(document).ready(function() {
//     var Player = {
//         name: "One",
//         weapon: Sword = {
//             damage: 1 + Math.floor(Math.random() * 5),
//             speed: 10
//         }
//     }
//     var player_damage = Player.weapon.damage;

//     $("#add").on("click", function() {
//         $("#content").append(player_damage + " ");
//     })

// })

let timeoutId;
document.querySelector('button').addEventListener('click', function() {
    this.textContent = "Generating...";
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        this.textContent = Math.random() * 100;
    }, 3000);
});
x ``