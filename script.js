document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
});

function greet() {
    var name = document.getElementById('nameInput').value;
    var greeting = 'Hello, ' + name;
    document.getElementById('greeting').textContent = greeting;
}