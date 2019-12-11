
// collect all the varibles
let input = document.getElementById('fahrenheit');
let output = document.getElementById('celsius');
let convert = document.getElementById('convert');

// get input and output connected
let convertedTemp = output.textContent;

// add event listener for calculate button
convert.addEventListener('click',() => {
    console.log('temp is converted');
    // perform convertion on click
    convertedTemp = parseFloat(input.value);
    convertedTemp = output.textContent;
    document.getElementById('celsius').innerText = (input - 32) * 5/9;
    // if (convertedTemp >= 30) {
    //     output.style.color = 'red';
    //          console.log('fuego');
    // } else if (convertedTemp <= 0) {
    //     output.style.color = 'light blue';
    //          console.log('frio');
    // } else {
    //     output.style.color = 'black';
    // }
})

// bonus setup
// find a way to fix output's decimal place to 2
// .toFixed(2) for the celsius  

