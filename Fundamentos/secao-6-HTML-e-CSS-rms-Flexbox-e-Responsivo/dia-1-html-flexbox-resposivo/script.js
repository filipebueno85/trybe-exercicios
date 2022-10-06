const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function preventDefaulLink(event) {
  event.preventDefault()
});

INPUT_CHECKBOX.addEventListener('click', function preventDefaultCheckBox(event) {
    event.preventDefault()
});

INPUT_TEXT.addEventListener('keypress', function keypresDefault(event) {
    const caracter = event.key;
    if (caracter !== 'a'){
      event.preventDefault();
    }
    
});