
function changeImage(position) {
    // Get all items
    var items = document.querySelectorAll('.item');

    // Set the position based on the clicked image
    document.querySelector('.box').style.setProperty('--position', position);

    // Update the checked state of the radio buttons if needed
    var radios = document.getElementsByName('position');
    radios.forEach(function (radio, index) {
        radio.checked = index + 1 === position;
    });
}
