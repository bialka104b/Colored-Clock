function colorClock(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (hours < 10){hours = '0' + hours;}
    if (seconds < 10){seconds = '0' + seconds;} 
    if (minutes < 10){minutes = '0' + minutes;}
    var clockFace = hours+':'+minutes+':'+seconds;
    // var hexColor = '#' + seconds + minutes + 50;  
    const colorHex = `#${Math.floor(Math.random()*16777215).toString(16)}`;

    // console.log(Math.random()*16777215);
    // console.log(Math.floor(Math.random()*16777215));
    // console.log(`#${Math.floor(Math.random()*16777215).toString(16)}`);

    document.getElementById('clock').innerHTML = clockFace;
    document.body.setAttribute('style', `background-color: ${colorHex};`);

    setTimeout(function() {
        colorClock();
    }, 1000);
}
console.log(colorClock());
