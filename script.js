function temperature() {
    var cel = document.getElementById("celsuis").value;
    var fah = (cel * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fah;
}

function weight() {
    var kilo = document.getElementById("kg").value;
    var pounds = kilo * 2.2;
    document.getElementById("lb").value = pounds;
}

function distance() {
    var kms = document.getElementById("km").value;
    var miles = kms * 0.62137;
    document.getElementById("mi").value = mi;
}