document.addEventListener('DOMContentLoaded', function () {
    


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl) 
.then(r => r.json())
.then(data => data.message.forEach(dogImage => renderImage(dogImage)));

fetch(breedUrl)
.then(r => r.json())
.then(data => {
    let breeds = Object.keys(data.message)
    renderBreeds(breeds)
})


function renderBreeds(breeds) {
    const uList = document.getElementById('dog-breeds')
    breeds.forEach(breed => {
        const list = document.createElement('li')
        list.innerText = breed
        uList.append(list)
        list.addEventListener('click', colorChange)
    })
}


function colorChange(e) {
    e.target.style.color = 'red'
}





function renderImage(dogImage) {
    const container = document.getElementById('dog-image-container')
    const img = document.createElement('img')
    img.src = dogImage
    container.append(img)
}

})