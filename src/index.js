import style from "./main.scss";

const a = document.getElementsByTagName('a');

Object.keys(a).forEach(function(obj) {
  a[obj].addEventListener('click', function(event) {
    event.preventDefault();
  }, false);
});

console.log('Hello from Armand');
