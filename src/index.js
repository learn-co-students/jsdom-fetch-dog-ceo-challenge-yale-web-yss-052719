const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


document.addEventListener('DOMContentLoaded', function(e){
  // console.log('loaded')
  // Challenge 1
  fetch(imgUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    data.message.forEach(function(e){
      // returning all images
      // console.log(e)
      const imgTag = document.createElement('img')
      imgTag.src = e
      const dogImageContainer = document.getElementById("dog-image-container")
      dogImageContainer.appendChild(imgTag)
    })
  })

  // challenge 2
  const dogBreeds = document.getElementById("dog-breeds")
  fetch(breedUrl)
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    for(let breeds in data.message){
      // console.log(data.message[breeds])
      const liTag = document.createElement('li')
      liTag.innerText = breeds
      dogBreeds.appendChild(liTag)
    }
  })
  // challenge 3
  dogBreeds.addEventListener('click', function(e){
    // console.log(e)
    if(e.target.tagName === 'LI'){
      // console.log(e.target)
      e.target.style.color ='purple'
    }
  })
  // challenge 4
  document.getElementById("breed-dropdown").addEventListener('change', function(e){
    // console.log(e.target.value)
    let letter = e.target.value
    fetch(breedUrl)
    .then(res => res.json())
    .then(data => {
      // need to clear dog breeds
      dogBreeds.innerHTML = ""
      for(let breeds in data.message){
        if(breeds.startsWith(letter)){
          const liTag = document.createElement('li')
          liTag.innerHTML = breeds
          dogBreeds.appendChild(liTag)
        }
      }
    })
  })
})
