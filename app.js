function colorChange() {
    // var randomColor = prompt();

    var randomColor = Math.floor(Math.random() * 16581375).toString(16)

    // console.log(randomColor);

    var display = document.getElementById('colorDisplay');
    var value = display.style.backgroundColor = '#' + randomColor
    // console.log(value)
    display.innerHTML = "Hex Code of this Color is " +  value;

    var btn = document.getElementById('colorButton');
    var btnValue = display.style.backgroundColor = '#' + randomColor
    // console.log(btnValue)

    var btnColor = document.getElementById('btnColor');
    btnColor.style.backgroundColor = btnValue;
}