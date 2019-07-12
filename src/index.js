// console.log('%c HI', 'color: firebrick')

//const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//1. wait for page to load
//2. fetch to url
//3. go to data and load images

//1. waiting page to load
document.addEventListener('DOMContentLoaded', function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //url, optional parameters
    fetch(imgUrl) 
    .then(resp => resp.json())
    .then(data=> {
        console.log(data) //debugging step, check if its broken
        
        //iterate image tag: forEach, for, for of (iterate arrays), for in (iterate objects)
        data.message.forEach(function(element){
            console.log(element) // debbuging step

            const imgTag = document.createElement('img')
            imgTag.src = element
            //imgTag.setAttribute("src", element); use if src method not availiable

            const dogImageContainer = document.getElementById("dog-image-container")
            dogImageContainer.appendChild(imgTag)
        })

        //other options 
            // for
            // for(let i = 0; i < data.message.length; i++){
            //   const imgTag = document.createElement('img')
            //     // imgTag.src = element // same as below
            //     imgTag.setAttribute("src", data.message[i])
        
            //     const dogImageContainer = document.getElementById("dog-image-container")
        
            //     dogImageContainer.appendChild(imgTag)
            // }
            // for of
                // for(let url of data.message){
                //     const imgTag = document.createElement('img')
                //         // imgTag.src = element // same as below
                //         imgTag.setAttribute("src", url)
                
                //         const dogImageContainer = document.getElementById("dog-image-container")
                
                //         dogImageContainer.appendChild(imgTag) 
    })


    const dogBreedUrl = 'https://dog.ceo/api/breeds/list/all'
    //keep it out here to use in other places (can only access outer to inner)
    const dogBreedsUl = document.querySelector("#dog-breeds")
    fetch(dogBreedUrl)
    .then(resp => resp.json())
    .then(data => {

        //method 1
        for(let breeds in data.message){
            // console.log(data.message[species])
            //# = let it know its an id; div#dog-breeds
            const dogLi = document.createElement('li')
            dogLi.innerText = breeds
            dogBreedsUl.appendChild(dogLi)
        }


        //method 2
        // Object.keys(data.message).forEach(species => {
        //     console.log(species)
        // })
    })


    dogBreedsUl.addEventListener('click', function(event){
        if(event.target.tagName === 'LI'){
            console.log(event.target)
            event.target.style.color = `#` + (Math.random() * 0xFFFFFF << 0).toString(16)
            //hexadecimal color
        }
            
    })

    //Challenge 4
    // select option --> filter list of dog breeds
    // filter render onto page if they match first letter 
    // render onto page
    document.querySelector('select').addEventListener('change', function(event){
        console.log(event.target.value)

        let letter = event.target.value
        fetch(dogBreedUrl)
        .then(resp => resp.json())
        .then(data => {
            //method 1  
                // clear out existing list
                // dogBreedsUl.innerHTML = ""

                // //get and add filtered list
                // for (let breeds in data.message){
                //     if (breeds.startsWith(letter)){
                //         const dogLi = document.createElement('li')
                //         dogLi.innerText = breeds
                //         dogBreedsUl.appendChild(dogLi)
                //     }
                // }
            //method 2 - separate out filter with iterator
            let filteredBreeds = Object.keys(data.message).filter(breed => breed.startsWith(letter))
            dogBreedsUl.innerHTML = ""
            for(let breeds of filteredBreeds){
                const dogLi = document.createElement('li')
                    dogLi.innerText = breeds
                    dogBreedsUl.appendChild(dogLi)
            }


        })
    })

})