// console.log('%c HI', 'color: firebrick')

// function()

document.addEventListener('DOMContentLoaded', function() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
   .then((response) => {
     return response.json();
   })
   .then((data) => {
    const imgs = data.message
    for(i=0; i < imgs.length; i++){
      // const newImg = document.createElement("img", {src: `${imgs[i]}`})
      // console.log(newImg)
      var img = document.createElement('img');
      img.src = `${imgs[i]}`;
      // document.getElementById('container').appendChild(img);
      document.getElementById("dog-image-container").appendChild(img)
    }

   })
   fetch('https://dog.ceo/api/breeds/list/all')
   .then((resp) => {
     return resp.json();

   })
   .then((data) => {
     // console.log(data)
     const breeds = data.message
     const breedNames = Object.keys(breeds)
     for(i=0; i < breedNames.length; i++){
       ulTag = document.querySelector("ul")
       ulTag.innerHTML += `<li class="breed-name"> ${breedNames[i]} </li> `
     }
   })
})

document.addEventListener('click', function(e){
  if (e.target.className === "breed-name"){
    e.target.style.color = "blue";
  }
})

  document.addEventListener('change', function(e) {
    if (e.target.id === "breed-dropdown") {
      // Re-fetch the data for a different letter selector
      fetch('https://dog.ceo/api/breeds/list/all')
      .then((resp) => {
        return resp.json();

      })
      .then((data) => {
        const breeds = data.message
        const breedNames = Object.keys(breeds)
        for(i=0; i < breedNames.length; i++){
          ulTag = document.querySelector("ul")
          ulTag.innerHTML += `<li class="breed-name"> ${breedNames[i]} </li> `
        }

      const breedLetter = e.target.value
      const breedsUL = document.querySelector("ul")
      // debugger
      const selectedBreeds = []

      for (i=0; i<breedsUL.children.length;i++){
        if (breedsUL.children[i].innerText.charAt(0) === breedLetter){
          selectedBreeds.push(breedsUL.children[i])
          // debugger
        }
      }

      // return selectedBreeds
      // debugger
      breedsUL.innerHTML = ""
      for(i=0; i < selectedBreeds.length; i++){
        breedsUL.appendChild(selectedBreeds[i])
      }
    })
  }

})
