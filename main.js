function update() {
    var element = document.getElementById("myprogressBar");
    var width = 0;
    var identity = setInterval(scene, 100);
    function scene() {
        if (width >= 100) {
            clearInterval(identity);
        } else {
            width++;
            element.style.width = width + '%';
            element.innerHTML = width + '%';
        }
    }
}