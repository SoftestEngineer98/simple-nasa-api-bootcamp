//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



function pictureButtonHandler(){
    const pictureInput = document.querySelector('input')
    console.log('the value of the input is', pictureInput.value)
    console.log('Button is clicked')
    const url = 'https://api.nasa.gov/planetary/apod?api_key=WoB4NPJ198MH8IOFzDASbWiTm1PYbPMVOvvEW84b&date='+pictureInput.value
console.log(url)

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        console.log(data.title)
        console.log(data.explanation)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('img').src = data.url
    })
}
const pictureButton = document.querySelector('button')
pictureButton.addEventListener('click', pictureButtonHandler)

    // next step: How to change the date? Based on user input
    // Figure out then how to get this data back into your html file 
    // How to access these values (all objects)
    // From there take that object apart and get that title and image tag and display the picture
    // Ping Amanda mcd